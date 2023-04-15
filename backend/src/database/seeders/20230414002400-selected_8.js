"use strict";

/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Selected",
      [
        {
          id: "2f6e8f58-dadd-44b8-b2df-ef36534445c5",
          name: "Selected 8",
          start_date: "2023-04-26",
          end_date: "2023-05-26",
          isActive: true,
          adminId: null
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Selected", { name: "Selected 8" }, {});
  },
};
