"use strict";

const { ADMIN_TABLE } = require("../models/admin.model");
const { TECHNOLOGY_TABLE } = require("../models/technology.model");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(TECHNOLOGY_TABLE, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      adminId: {
        type: Sequelize.UUID,
        references: {
          model: ADMIN_TABLE,
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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

  down: async (queryInterface) => {
    await queryInterface.dropTable(TECHNOLOGY_TABLE);
  },
};
