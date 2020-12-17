const express = require("express");

const userAPI = require("./user");

const router = express.Router();

router.use("/user", userAPI);

export default router;
