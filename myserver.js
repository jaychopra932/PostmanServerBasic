const { default: axios } = require("axios");
var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, , authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});

var port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

app.post("/getByUrl", function (req, res) {
  let body = req.body;
  let { url } = body;
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => res.send(err));
});

app.post("/PostByUrl", function (req, res) {
  let body = req.body;
  let { url, data } = body;
  let obj = data;
  axios
    .post(url, obj)
    .then((response) => res.send(response.data))
    .catch((err) => res.send(err));
});
