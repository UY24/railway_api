const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { SALT, API_KEY, JWT_KEY } = require("../config/serverConfig");
const { User } = require("../models");
const messages = require("../constants/messages");

const register = async (req, res) => {
  try {
    let role = "customer";
    if (req.body.apiKey && req.body.apiKey === API_KEY) {
      role = "admin";
    }
    const userDetails = {
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, SALT),
      role: role,
    };
    const user = await User.create(userDetails);
    return res.status(201).json({
      success: true,
      data: user,
      message:messages.success.userCreated,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: messages.error.internalServerError,
      err: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        data: {},
        message:messages.error.userNotFound,
        err: {},
      });
    }
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(400).json({
        success: false,
        message:messages.error.invalidPassword,
        data: {},
        err: {},
      });
    }
    const payload = {
      email: user.email,
    };
    const token = jwt.sign(payload, JWT_KEY, { expiresIn: "24h" });
    return res.status(200).json({
      success: true,
      data: token,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message:messages.error.internalServerError,
      err: error,
    });
  }
};

module.exports = { register, login };
