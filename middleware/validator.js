const messages = require("../constants/messages");

const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: messages.error.fieldMissing,
      err: {},
    });
  }
  next();
};

const validateTrainCreation = (req, res, next) => {
  if (
    !req.body.t_name ||
    !req.body.t_no ||
    !req.body.source ||
    !req.body.dest ||
    !req.body.total_seats ||
    !req.body.t_no ||
    !req.body.price
  ) {
    return res.status(400).json({
      success: false,
      data: {},
      message: messages.error.fieldMissing,
      err: {},
    });
  }
  next();
};

const validateBookingCreation = (req, res, next) => {
  if (!req.body.train_id || !req.body.booked_seats) {
    return res.status(400).json({
      success: false,
      data: {},
      message: messages.error.fieldMissing,
      err: {},
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
  validateTrainCreation,
  validateBookingCreation,
};
