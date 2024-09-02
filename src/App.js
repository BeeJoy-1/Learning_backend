const express = require("express");
const app = express();
const chalk = require("chalk");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(
    chalk.bgYellowBright(
      `Server Connected on port http://localhost:${process.env.PORT}`
    )
  );
});
