"use strict";

const { SELECTED_TABLE } = require('../models/selected.model');
const { TEAM_TABLE } = require('../models/team.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(TEAM_TABLE, "selectedId", {
      type: Sequelize.UUID,        
      references: {
        model: SELECTED_TABLE,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn(TEAM_TABLE, "selectedId");
  },
};
