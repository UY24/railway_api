"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Trains", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      t_no: {
        allowNull: false,
        unique: true,
        type: Sequelize.INTEGER,
      },
      t_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      source: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dest: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      total_seats: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      seats_left: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Trains");
  },
};
