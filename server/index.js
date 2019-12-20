const express = require("express");
const bodyParser = require("body-parser");
const proxy = require("http-proxy-middleware");
const path = require("path");
const app = express();
// const api = require('./routes/index');
const port = process.env.PORT || 80;

app.use(bodyParser.json());
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/", express.static(path.join(__dirname, "../build")));

app.listen(port, () => console.log(`Listening on port ${port}...`));
