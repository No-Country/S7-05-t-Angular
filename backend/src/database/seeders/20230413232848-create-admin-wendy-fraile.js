"use strict";
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Admins", [
      {
        id: "123e4567-e89b-12d3-a456-426655440000",
        name: "Wendy Fraile",
        email: "wendyfraile@nocountry.com",
        password: "mySecretpassword23",
        phone: "+54 (555) 123-4567",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Admins", {
      email: "wendyfraile@nocountry.com",
    });
  },
};
