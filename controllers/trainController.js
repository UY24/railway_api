const { Train } = require("../models");

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
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
    });
  }
};

module.exports = { create };
