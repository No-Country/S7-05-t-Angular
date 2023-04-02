// const { DataTypes } = require("sequelize");
// const sequelize = require("../db");
// const Student = require("../models/student.model");

// const STUDENT_TABLE = "students";

// module.exports = {
//   up: async (queryInterface) => {
//     await queryInterface.createTable(STUDENT_TABLE, {
//       ...Student.attributes,
//     });
//   },

//   down: async (queryInterface) => {
//     await queryInterface.dropTable(STUDENT_TABLE);
//   },
// };

'use strict';

const { StudentSchema, STUDENT_TABLE } = require('../models/student.model');


module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(STUDENT_TABLE, StudentSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(STUDENT_TABLE);
  }
};