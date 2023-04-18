"use strict";

const { MEETING_TABLE } = require("../models/meeting.model");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(MEETING_TABLE, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },

      teamId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Teams",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      weekId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Weeks",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      meet_number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      observation: {
        allowNull: true,
        type: Sequelize.TEXT,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(MEETING_TABLE);
  },
};
