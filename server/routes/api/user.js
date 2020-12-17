const express = require("express");
const passport = require("passport");

const router = express.router();

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

export default router;
