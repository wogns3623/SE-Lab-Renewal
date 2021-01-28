const express = require("express");
const multer = require("multer");
const crypto = require("crypto");

const { select, change, pool } = require("db/index");
const { idRegex, pwRegex, emailRegex } = require("useful/regex");
const { pbkdf2Async } = require("useful/password");
const { UserInfoException, DBException } = require("useful/exceptions");
const config = require("config.json").crypto;

const USER_PROFILE_SRC = "assets/users/profile";
const DEFAULT_USER_PROFILE_SRC = USER_PROFILE_SRC + "/default_user_profile.png";

let getFileName = (id, mimetype) => {
  return id + "_profile." + mimetype.split("/")[1];
};

const userStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, USER_PROFILE_SRC);
  },
  filename: (req, file, cb) => {
    cb(null, getFileName(req.body.id, file.mimetype));
  },
});
const userUpload = multer({ storage: userStorage });

const userAPIRouter = express.Router();

let getUserInfo = async (fragmentedUserInfo, serchOption = "AND") => {
  console.log("get user by", fragmentedUserInfo);
  try {
    let dbTags = Object.keys(fragmentedUserInfo);
    let values = Object.values(fragmentedUserInfo);
    let user = await select(
      `SELECT u_no, u_id, u_lname, u_fname, u_nick, u_email, file_id, u_perm, u_homepage FROM User WHERE u_${
        dbTags.join(" = ? " + serchOption + " u_") + " = ?"
      }`,
      values
    );

    if (user.length === 1) {
      console.log("find user", user);

      return user;
    } else if (user.length > 1) {
      console.log("find several user that has given info");

      return user;
    } else {
      console.log("user not exist");
      return undefined;
    }
  } catch (err) {
    console.error("Error in getUserInfo function");
    throw err;
  }
};

let checkValid = (regex, value) => {
  console.log(value, regex.test(value));
  return regex.test(value);
};

let checkUserInfoValid = async (info) => {
  try {
    if (!checkValid(idRegex, info.id)) {
      throw UserInfoException("Id", "not valid!");
    } else if (!checkValid(pwRegex, info.pw)) {
      throw UserInfoException("Password", "not valid");
    } else if (!checkValid(emailRegex, info.email)) {
      throw UserInfoException("Email", "not valid");
    } else if (
      await getUserInfo(
        { id: info.id, nick: info.nick, email: info.email },
        "OR"
      )
    ) {
      throw UserInfoException(
        "User who has given unique value",
        "already exist"
      );
    } else {
      console.log("user info is valid");
      return info;
    }
  } catch (err) {
    throw err;
  }
};

let createUser = async (info) => {
  try {
    let salt = crypto.randomBytes(config.saltSize).toString("base64");
    let pw = await pbkdf2Async(
      info.pw,
      salt,
      config.iterations,
      config.keylen,
      config.digest
    );

    let querys = [];
    let fileSrc;
    if (info.profile !== undefined) {
      fileSrc =
        USER_PROFILE_SRC + "/" + getFileName(info.id, info.profile.mimetype);

      querys.push({
        sql: "INSERT INTO File(file_name, file_type, file_src) VALUES(?, ?, ?)",
        args: [info.id + "_profile", info.profile.mimetype, fileSrc],
      });
    } else {
      fileSrc = DEFAULT_USER_PROFILE_SRC;
    }

    querys.push({
      sql:
        "INSERT INTO User(u_id, u_pw, u_pw_salt, u_lname, u_fname, u_nick, u_email, u_perm, file_id) VALUES(?, ?, ?, ?, ?, ?, ?, ?, (SELECT file_id FROM File WHERE file_src = ?))",
      args: [
        info.id,
        pw,
        salt,
        info.lname,
        info.fname,
        info.nick,
        info.email,
        info.perm,
        fileSrc,
      ],
    });

    await change(querys);

    return true;
  } catch (err) {
    console.log("Error in create user\n", err);
    throw err;
  }
};

// express 4.x버전으로 넘어오면서 기본적으로 multipart/form-data 처리를 지원하지 않게 됨?
// 따로 처리해줄 미들웨어 multer등이 필요함
userAPIRouter.post("/", userUpload.single("profile"), (req, res) => {
  let info = req.body;
  info.profile = req.file;

  console.log(info);

  checkUserInfoValid(info)
    .then(createUser)
    .then(() => {
      res.status(201)("complete");
    })
    .catch((err) => {
      if (err instanceof UserInfoException) {
        console.log("user info is not valid");
        res.status(400).send(err);
      } else if (err instanceof DBException) {
        console.log("db problem occured");
        res.status(500).send(err);
      } else {
        res.sendStatus(500);
      }
    });
});

// https://programmingsummaries.tistory.com/?page=3
// express에서 async함수를 바로 넣는건 에러 처리에 있어서 문제가 됨
// 적절한 처리 필요
// promise로 변경
userAPIRouter.get("/", (req, res) => {
  // get user info by other info(email, nickname, etc)
  // frag will be fragmented user information
  let frag = req.query;

  if (frag === undefined) {
    res.sendStatus(400);
  } else {
    getUserInfo(frag)
      .then((user) => {
        return res.json({
          user: user,
        });
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  }
});

userAPIRouter.get("/:userID", (req, res) => {
  // get user info by userID
  let id = req.params.userID;

  getUserInfo({ id: id })
    .then((user) => {
      return res.json({
        user: user,
      });
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});
module.exports = userAPIRouter;
