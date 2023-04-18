'use strict';

const { ADMIN_TABLE } = require('../models/admin.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Students', 'adminId', {
      type: Sequelize.UUID,
    references: {
      model: ADMIN_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Students', 'adminId');
  }
};
