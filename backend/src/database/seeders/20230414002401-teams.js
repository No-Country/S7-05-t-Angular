'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const teams = [
      {
        id: uuidv4(),
        name: 'S8-05-t-Angular',
        isActive: true,
        team_leadId: null,
        adminId: null,
        selectedId: "2f6e8f58-dadd-44b8-b2df-ef36534445c5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'S8-10-t-React-Node',
        isActive: true,
        team_leadId: null,
        adminId: null,
        selectedId: "2f6e8f58-dadd-44b8-b2df-ef36534445c5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'S8-15-t-Vue-Node',
        isActive: true,
        team_leadId: null,
        adminId: null,
        selectedId: "2f6e8f58-dadd-44b8-b2df-ef36534445c5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'S8-20-t-Java-Angular',
        isActive: true,
        team_leadId: null,
        adminId: null,
        selectedId: "2f6e8f58-dadd-44b8-b2df-ef36534445c5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'S8-25-t-React',
        isActive: true,
        team_leadId: null,
        adminId: null,
        selectedId: "2f6e8f58-dadd-44b8-b2df-ef36534445c5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('Teams', teams, {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Teams', null, {});
  }
};
