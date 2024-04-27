"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        onDelete: "CASCADE",
      });
      this.belongsTo(models.Train, {
        foreignKey: "train_id",
        onDelete: "CASCADE",
      });
    }
  }
  Booking.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      train_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      booked_seats: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
