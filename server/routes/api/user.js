const express = require("express");
const passport = require("passport");
const crypto = require("crypto");

const { select, change } = require("db/index");
const { idRegex, pwRegex, emailRegex } = require("useful/regex.js");
const { pbkdf2Async } = require("useful/password.js");
const config = require("config.json").crypto;

const userAPIRouter = express.Router();

let checkExist = async (dbTag, value) => {
  console.log("Check", dbTag, value, "exist");
  try {
    let user = await select(`SELECT * FROM User WHERE u_${dbTag} = ?`, [value]);

    console.log("user :", user);
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
    } else if (info.pw != info.pwCheck) {
      throw "Password check is incorrect!";
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

    console.log(salt.length, pw.length);

    await change([
      {
        sql:
          "INSERT INTO User(u_id, u_pw, u_pw_salt, u_lname, u_fname, u_nick, u_email, u_perm) VALUES(?, ?, ?, ?, ?, ?, ?, ?);",
        args: [
          info.id,
          pw,
          salt,
          info.lname,
          info.fname,
          info.nick,
          info.email,
          0,
        ],
      },
    ]);
  } catch (err) {
    console.log("Error in register user", err);
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

userAPIRouter.post("/register", async (req, res) => {
  let info = req.body;

  console.log(info);

  checkUserInfoValid(info)
    .then(registerUser)
    .then(() => {
      res.redirect("/login");
    })
    .catch((err) => {
      console.log(typeof err);
      if (typeof err === "string") {
        res.status(400).send(err);
      } else {
        res.sendStatus(500);
      }
    });
});

module.exports = userAPIRouter;
