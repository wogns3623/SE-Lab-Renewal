const express = require("express");

const APIRouter = express.Router();
const userAPIRouter = require("./users");
const authAPIRouter = require("./auth");

APIRouter.use("/users", userAPIRouter);
APIRouter.use("/auth", authAPIRouter);

module.exports = APIRouter;
