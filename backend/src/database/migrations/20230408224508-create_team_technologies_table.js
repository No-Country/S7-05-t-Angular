"use strict";

const {
  TEAM_TECHNOLOGY_TABLE,
  TeamTechnologySchema,
} = require("../models/team-technologies.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(
      TEAM_TECHNOLOGY_TABLE,
      TeamTechnologySchema
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TEAM_TECHNOLOGY_TABLE);
  },
};
