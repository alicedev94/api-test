const express = require("express");
const https = require("https");
const cors = require("cors");

const app = express();
const port = 3002;
const port2 = 443;

const fs = require("fs");
var options = {
  key: fs.readFileSync("./ssl/code.key"),
  cert: fs.readFileSync("./ssl/code.crt"),
};

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello this is node..!");
});

app.listen(port, () => {
  console.log("running http in: " + port);
});

https.createServer(options, app).listen(port2, () => { console.log("running https in: " + port2);});
