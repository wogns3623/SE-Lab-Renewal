const express = require("express");
const bodyParser = require("body-parser");
const proxy = require("http-proxy-middleware");
const path = require("path");
const app = express();
// const api = require('./routes/index');
const port = process.env.PORT || 80;

app.use(bodyParser.json());
// app.use('/api', api);
app.use(
  proxy("/api", {
    target: `http://ilovescott.kro.kr/`
  })
);
app.use(
  proxy("/assets", {
    target: `http://ilovescott.kro.kr/`
  })
);
app.use("/assets", express.static(path.join(__dirname, "build/assets")));

app.listen(port, () => console.log(`Listening on port ${port}...`));
