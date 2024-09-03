const express = require("express");
const app = express();
const chalk = require("chalk");
const AllRoutes = require("./Routes/index.js");
app.use(AllRoutes);

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.listen(process.env.PORT, () => {
  console.log(
    chalk.bgYellowBright(
      `Server Connected on port http://localhost:${process.env.PORT}`
    )
  );
});
