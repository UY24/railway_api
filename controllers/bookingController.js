const { Booking, Train, sequelize } = require("../models");
const messages = require("../constants/messages");

const create = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const user_id = req.user_id;
    const { train_id, booked_seats } = req.body;

    const train = await Train.findByPk(train_id);

    if (!train) {
      return res.status(404).json({
        success: false,
        message: messages.error.trainNotFound,
        data: {},
        err: {},
      });
    }

    if (train.seats_left < booked_seats) {
      return res.status(400).json({
        success: false,
        message: messages.error.notEnoughSeats,
        data: {},
        err: {},
      });
    }

    const booking = await Booking.create(
      {
        user_id,
        train_id,
        booked_seats,
      },
      { transaction: t, lock: t.LOCK.UPDATE }
    );

    await Train.update(
      { seats_left: train.seats_left - booked_seats },
      {
        where: { id: train_id },
        transaction: t,
        lock: t.LOCK.UPDATE,
      }
    );

    await t.commit();

    return res.status(201).json({
      success: true,
      message: messages.success.bookingCreated,
      data: booking,
      err: {},
    });
  } catch (error) {
    await t.rollback();
    return res.status(500).json({
      success: false,
      message: messages.error.internalServerError,
      data: {},
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const user_id = req.user_id;
    const bookings = await Booking.findAll({
      where: {
        user_id,
      },
    });

    return res.status(200).json({
      success: true,
      message: messages.success.bookingGet,
      data: bookings,
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

module.exports = { create, get };
