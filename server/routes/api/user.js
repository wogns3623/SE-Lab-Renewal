const express = require("express");
const passport = require("passport");

const userAPIRouter = express.Router();

userAPIRouter.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    // express 3.x에서는 req.flash를 지원하지 않아 사용하려면 connect-flash 모듈이 필요함
    // failureFlash: true,
  })
);

module.exports = userAPIRouter;
