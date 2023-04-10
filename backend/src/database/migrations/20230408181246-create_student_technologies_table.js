'use strict';

const { STUDENT_TECHNOLOGY_TABLE, StudentTechnologySchema } = require('../models/student-technologies.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(STUDENT_TECHNOLOGY_TABLE, StudentTechnologySchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(STUDENT_TECHNOLOGY_TABLE);
  }
};
