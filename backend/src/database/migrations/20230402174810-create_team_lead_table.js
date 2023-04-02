'use strict';

const { TeamLeadSchema, TEAM_LEAD_TABLE } = require('../models/teamLead.model');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(TEAM_LEAD_TABLE, TeamLeadSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(TEAM_LEAD_TABLE);
  }
};