const { Train } = require("../models");
const messages = require("../constants/messages");

const create = async (req, res) => {
  try {
    const trainDetails = {
      t_no: req.body.t_no,
      t_name: req.body.t_name,
      source: req.body.source,
      dest: req.body.dest,
      total_seats: req.body.total_seats,
      seats_left: req.body.total_seats,
      price: req.body.price,
    };
    const train = await Train.create(trainDetails);
    return res.status(201).json({
      success: true,
      data: train,
      message: messages.success.trainCreated,
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

const get = async (req, res) => {
  try {
    const trainDetails = await Train.findAll({
      where: {
        source: req.body.source,
        dest: req.body.dest,
      },
    });

    return res.status(200).json({
      success: true,
      message: messages.success.trainGet,
      data: trainDetails,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: messages.error.internalServerError,
      data: {},
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const trainId = req.params.id;
    const updatedFields = {
      t_no: req.body.t_no,
      t_name: req.body.t_name,
      source: req.body.source,
      dest: req.body.dest,
      total_seats: req.body.total_seats,
      price: req.body.price,
    };
    const updatedTrain = await Train.update(updatedFields, {
      where: { id: trainId },
    });

    if (!updatedTrain[0]) {
      return res.status(404).json({
        success: false,
        message: messages.error.trainNotFound,
        data: {},
        err: {},
      });
    }

    return res.status(200).json({
      success: true,
      message: messages.success.trainUpdated,
      data: updatedTrain,
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

module.exports = { create, get, update };
