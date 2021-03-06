const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
// const proxy = require("http-proxy-middleware");

const passportConfig = require("./passport");
const APIRouter = require("routes/api/index");

const app = express();

const port = process.env.PORT || 80;
const secretKey = "thisIsSecret";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(secretKey));
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passportConfig();

app.use("/api", APIRouter);
app.use("/assets", express.static(path.join(__dirname, "../assets")));
app.use("/", express.static(path.join(__dirname, "../build")));

app.listen(port, () => console.log(`Listening on port ${port}...`));
