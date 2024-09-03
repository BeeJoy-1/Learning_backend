const express = require("express");
const { Router } = express;
const _ = Router();
const { CreateUser } = require("../Controller/User.controller.js");

_.route("/getname").get(CreateUser);

module.exports = _;
