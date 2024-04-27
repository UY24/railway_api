"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Train extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Train.init(
    {
      t_no: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
      t_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      source: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dest: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      total_seats: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      seats_left: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Train",
    }
  );
  return Train;
};
