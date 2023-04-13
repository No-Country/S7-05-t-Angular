'use strict';

const { ADMIN_TABLE } = require('../models/admin.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Team_leads", "adminId", {
      type: Sequelize.UUID,
      references: {
        model: ADMIN_TABLE,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down (queryInterface) {
    await queryInterface.removeColumn("Team_leads", "adminId");
  }
};
