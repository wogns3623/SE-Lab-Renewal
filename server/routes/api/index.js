const express = require("express");

const APIRouter = express.Router();
const userAPIRouter = require("./user");

APIRouter.use("/user", userAPIRouter);

module.exports = APIRouter;
