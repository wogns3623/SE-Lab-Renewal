const express = require("express");
const bodyParser = require("body-parser");
const proxy = require("http-proxy-middleware");
const path = require("path");
const app = express();
// const api = require('./routes/index');

app.use(bodyParser.json());
// app.use('/api', api);
app.use(
  proxy("/api", {
    target: "http://localhost:3001/"
  })
);
app.use(
  proxy("/assets", {
    target: "http://localhost:3001/"
  })
);
app.use("/assets", express.static(path.join(__dirname, "build/assets")));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
