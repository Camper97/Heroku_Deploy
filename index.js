const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Zanaty World!");
});

app.get("/game", (req, res) => {
  res.send("Zanaty Game!");
});

app.get("/extrema", (req, res) => {
  res.send("Hashesh 3mena");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
