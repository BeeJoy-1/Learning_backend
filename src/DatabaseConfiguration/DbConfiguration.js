const mongoose = require("mongoose");
const chalk = require("chalk");
const { DBname } = require("../Constant/constant.js");

const DbConnection = async () => {
  try {
    const connectionInfo = await mongoose.connect(
      `${process.env.DATABASE_URL}/${DBname}`
    );
    console.log(
      chalk.blue.bgBlueBright.bold(
        `MongoDB CONNECTED!! ${(await connectionInfo).connection.host}`
      )
    );
  } catch (error) {
    console.log(chalk.bgRedBright(error));
  }
};

module.exports = { DbConnection };
