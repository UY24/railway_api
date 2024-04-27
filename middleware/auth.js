const jwt = require("jsonwebtoken");

const { JWT_KEY } = require("../config/serverConfig");
const { User } = require("../models");

const messages = require("../constants/messages");

const isAdmin = async (req, res, next) => {
  const token = req.header("auth_token");
  if (!token) {
    return res
      .status(401)
      .json({
        success: false,
        data: {},
        messages: messages.error.invalidUser,
        err: {},
      });
  }
  try {
    const data = jwt.verify(token, JWT_KEY);
    const user = await User.findOne({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        data: {},
        messages:messages.error.userNotFound,
        err: {},
      });
    }
    if (user.role === "customer") {
      return res.status(401).json({
        success: false,
        data: {},
        messages: messages.error.notAdmin,
        err: {},
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      data: {},
      messages: messages.error.invalidUser,
      err: {},
    });
  }
};

module.exports = isAdmin;
