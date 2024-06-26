const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  JWT_KEY: process.env.JWT_KEY,
  API_KEY: process.env.API_KEY,
  SALT: bcrypt.genSaltSync(10)
};