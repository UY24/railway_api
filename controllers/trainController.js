const { Train } = require("../models");

const create = async (req, res) => {
  const train = await Train.create(req.body);
  return res.status(201).json({
    success: true,
    train: train,
  });
};

module.exports = { create };
