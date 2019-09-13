const express = require("express");
const rook = require("rookout");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/plus", (req, res) => {
  const { first_number, second_number } = req.query;
  const result = parseInt(first_number) + parseInt(second_number);
  res.status(200).send(`${first_number} + ${second_number} = ${result}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
