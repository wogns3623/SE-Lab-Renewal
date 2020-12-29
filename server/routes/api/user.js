const express = require("express");
const passport = require("passport");

const { select, change } = require("db/index");

const userAPIRouter = express.Router();

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

let checkPWValid = (pw) => {
  const pwRegex = /^(?=.*?\w)(?=.*?\d)(?=.*?[?!@#$%^&*_=+-]).{8,25}$/;
  console.log(pwRegex.test(pw), pw);
  return pwRegex.test(pw);
};

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
      if (await checkExist("id", info.id)) {
        res.send("Id already exist!");
      } else if (!checkPWValid(info.pw)) {
        res.send("Password is not valid!");
      } else if (info.pw != info.pw_check) {
        res.send("Password check is incorrect!");
      } else if (await checkExist("nick", info.nick)) {
        res.send("Nickname already exist!");
      } else {
        await change([
          {
            sql:
              "INSERT INTO User(u_id, u_pw, u_lname, u_fname, u_nick, u_email, u_perm) VALUES(?, ?, ?, ?, ?, ?, ?);",
            args: [
              info.id,
              info.pw,
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
