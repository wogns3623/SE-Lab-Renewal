const express = require("express");
const passport = require("passport");
const multer = require("multer");
const crypto = require("crypto");

const { select, change } = require("db/index");
const { idRegex, pwRegex, emailRegex } = require("useful/regex.js");
const { pbkdf2Async } = require("useful/password.js");
const config = require("config.json").crypto;

const USER_PROFILE_SRC = "assets/user/profiles";
const DEFAULT_USER_PROFILE_SRC =
  "assets/user/profiles/default_user_profile.png";

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

let checkExist = async (dbTag, value) => {
  console.log("Check", dbTag, value, "exist");
  try {
    let user = await select(`SELECT * FROM User WHERE u_${dbTag} = ?`, [value]);

    if (user.length > 0) {
      console.log(dbTag, value, "dose exist");
      return true;
    } else {
      console.log(dbTag, value, "dose not exist");
      return false;
    }
  } catch (err) {
    console.error("Error in checkExist function");
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
      throw "Id is not valid!";
    } else if (await checkExist("id", info.id)) {
      throw "Id already exist!";
    } else if (!checkValid(pwRegex, info.pw)) {
      throw "Password is not valid!";
    } else if (await checkExist("nick", info.nick)) {
      throw "Nickname already exist!";
    } else if (!checkValid(emailRegex, info.email)) {
      throw "Email is not valid!";
    } else if (await checkExist("email", info.email)) {
      throw "Email already exist!";
    } else {
      return info;
    }
  } catch (err) {
    throw err;
  }
};

let registerUser = async (info) => {
  try {
    let salt = crypto.randomBytes(config.saltSize).toString("base64");
    let pw = await pbkdf2Async(
      info.pw,
      salt,
      config.iterations,
      config.keylen,
      config.digest
    );

    let fileSrc;
    if (info.profile !== undefined) {
      fileSrc =
        USER_PROFILE_SRC + "/" + getFileName(info.id, info.profile.mimetype);

      await change([
        {
          sql:
            "INSERT INTO File(file_name, file_type, file_src) VALUES(?, ?, ?)",
          args: [info.id + "_profile", info.profile.mimetype, fileSrc],
        },
      ]);
    } else {
      fileSrc = DEFAULT_USER_PROFILE_SRC;
    }

    let fileInfo = await select("SELECT * FROM File WHERE file_src = ?", [
      fileSrc,
    ]);

    await change([
      {
        sql:
          "INSERT INTO User(u_id, u_pw, u_pw_salt, u_lname, u_fname, u_nick, u_email, file_id, u_perm) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)",
        args: [
          info.id,
          pw,
          salt,
          info.lname,
          info.fname,
          info.nick,
          info.email,
          fileInfo.file_id,
          info.perm,
        ],
      },
    ]);
  } catch (err) {
    console.log("Error in register user\n", err);
    throw err;
  }
};

// https://programmingsummaries.tistory.com/?page=3
// express에서 async함수를 바로 넣는건 에러 처리에 있어서 문제가 됨
// 적절한 처리 필요
// promise로 변경
userAPIRouter.get("/checkExist", (req, res) => {
  checkExist(req.query.type, req.query.value)
    .then((isExist) => {
      return res.json({
        isExist: isExist,
      });
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

userAPIRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    // express 3.x에서는 req.flash를 지원하지 않아 사용하려면 connect-flash 모듈이 필요함
    // failureFlash: true,
  })
);

// express 4.x버전으로 넘어오면서 기본적으로 multipart/form-data 처리를 지원하지 않게 됨?
// 따로 처리해줄 미들웨어 multer등이 필요함
// Todo: https://github.com/expressjs/multer
// 보고 저장되는 파일 이름 수정하기
userAPIRouter.post("/register", userUpload.single("profile"), (req, res) => {
  let info = req.body;
  info.profile = req.file;

  console.log(info);

  checkUserInfoValid(info)
    .then(registerUser)
    .then(() => {
      res.send("complete");
    })
    .catch((err) => {
      if (typeof err === "string") {
        console.log(err);
        res.status(400).send(err);
      } else {
        res.sendStatus(500);
      }
    });
});

module.exports = userAPIRouter;
