'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
          as: "user_id",
        },
        onDelete: "CASCADE",
        type: Sequelize.INTEGER,
      },
      train_id: {
        allowNull: false,
        references: {
          model: "Trains",
          key: "id",
          as: "train_id",
        },
        onDelete: "CASCADE",
        type: Sequelize.INTEGER,
      },
      booked_seats: {
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
    await queryInterface.dropTable('Bookings');
  }
};