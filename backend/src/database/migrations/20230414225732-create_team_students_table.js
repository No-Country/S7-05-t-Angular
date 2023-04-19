"use strict";

const {TEAM_STUDENT_TABLE, TeamStudentSchema} = require("../models/team-student.model")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(
      TEAM_STUDENT_TABLE,
      TeamStudentSchema
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TEAM_STUDENT_TABLE);
  },
};
