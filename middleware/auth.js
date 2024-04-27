const jwt = require("jsonwebtoken");

const { JWT_KEY } = require("../config/serverConfig");
const { User } = require("../models");

const INVALID_USER_ERROR = "Please authenticate with a valid token";
const NOT_ADMIN = "You are not an admin";

const isAdmin = async (req, res, next) => {
  const token = req.header("auth_token");
  if (!token) {
    return res
      .status(401)
      .json({ success: false, data: {}, error: INVALID_USER_ERROR });
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
        err: "User not found",
      });
    }
    if (user.role === "customer") {
      return res.status(401).json({
        success: false,
        data: {},
        err: NOT_ADMIN,
      });
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      data: {},
      err: INVALID_USER_ERROR,
    });
  }
};

module.exports = isAdmin;
