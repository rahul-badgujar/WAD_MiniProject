const express = require("express");
const path = require("path");

const port = 8080;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Coming soon");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
