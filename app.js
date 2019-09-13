const express = require("express");
const rookout = require("rookout");
const app = express();
const port = 3000;

rookout.start({
  token: "f8e6cbdb53547f225d21e8bbde9f3a95dcfeda9746645a0d131f8c58cb6aa327"
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/plus", (req, res) => {
  const { first_number, second_number } = req.query;
  const result = parseInt(first_number) + parseInt(second_number);
  res.status(200).send(`${first_number} + ${second_number} = ${result}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
