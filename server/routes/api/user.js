const express = require("express");
const passport = require("passport");
const crypto = require("crypto");

const { select, change } = require("db/index");
const { idRegex, pwRegex, emailRegex } = require("useful/regex.js");

const userAPIRouter = express.Router();

// let generateSalt = async () => {
//   const salt = await new Promise((resolve, reject) => {
//     crypto.randomBytes(256, (err, buf) => {
//       if (err) {
//         reject("Error on generating salt");
//       }
//       resolve(buf);
//     });
//   });

//   return salt;
// };

let pbkdf2Async = (password, salt, iterations, keylen, digest) => {
  return new Promise((res, rej) => {
    crypto.pbkdf2(password, salt, iterations, keylen, digest, (err, key) => {
      err ? rej(err) : res(key);
    });
  });
};

let checkExist = async (dbTag, value) => {
  let user = await select(`SELECT * FROM User WHERE u_${dbTag} = ?`, [value]);

  if (user.length > 0) {
    console.log(dbTag, value, "dose exist");
    return true;
  } else {
    console.log(dbTag, value, "dose not exist");
    return false;
  }
};

let checkValid = (regex, value) => {
  console.log(value, regex.test(value));
  return regex.test(value);
};

userAPIRouter.get("/checkExist", async (req, res) => {
  return res.json({
    isExist: await checkExist(req.query.type, req.query.value),
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

userAPIRouter.post(
  "/register",
  async (req, res) => {
    let info = req.body;

    console.log(info);

    try {
      if (!checkValid(idRegex, info.id)) {
        res.send("Id is not valid!");
      } else if (await checkExist("id", info.id)) {
        res.send("Id already exist!");
      } else if (!checkValid(pwRegex, info.pw)) {
        res.send("Password is not valid!");
      } else if (info.pw != info.pw_check) {
        res.send("Password check is incorrect!");
      } else if (await checkExist("nick", info.nick)) {
        res.send("Nickname already exist!");
      } else if (!checkValid(emailRegex, info.email)) {
        res.send("Email is not valid!");
      } else {
        let salt = crypto.randomBytes(256).toString("base64");
        let pw = await pbkdf2Async(info.pw, salt, 104932, 256, "sha512");

        await change([
          {
            sql:
              "INSERT INTO User(u_id, u_pw, u_pw_salt, u_lname, u_fname, u_nick, u_email, u_perm) VALUES(?, ?, ?, ?, ?, ?, ?);",
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

        res.redirect("/");
      }
    } catch (error) {
      res.send("Error occurred! Please try again");
    }
  }
  // passport.authenticate("local", {
  //   successRedirect: "/",
  //   failureRedirect: "/login",
  //   // express 3.x에서는 req.flash를 지원하지 않아 사용하려면 connect-flash 모듈이 필요함
  //   // failureFlash: true,
  // })
);

module.exports = userAPIRouter;
