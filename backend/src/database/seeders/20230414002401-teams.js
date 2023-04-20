'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const teams = [
      {
        id: '12cbb4a4-4c4c-4b87-a7d5-98242c6327f1',
        name: 'S8-05-t-Angular',
        isActive: true,
        team_leadId: null,
        adminId: null,
        selectedId: "2f6e8f58-dadd-44b8-b2df-ef36534445c5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9bb44d34-09f5-4633-b141-68f2d2e52dc3',
        name: 'S8-10-t-React-Node',
        isActive: true,
        team_leadId: null,
        adminId: null,
        selectedId: "2f6e8f58-dadd-44b8-b2df-ef36534445c5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2c2f94a1-f630-4ebc-8c17-7664af4c4b05',
        name: 'S8-15-t-Vue-Node',
        isActive: true,
        team_leadId: null,
        adminId: null,
        selectedId: "2f6e8f58-dadd-44b8-b2df-ef36534445c5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'd988c7cf-2b2a-4ea1-bcef-faf2167c9d75',
        name: 'S8-20-t-Java-Angular',
        isActive: true,
        team_leadId: null,
        adminId: null,
        selectedId: "2f6e8f58-dadd-44b8-b2df-ef36534445c5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '1b920c9e-6f03-4d2d-8f80-7a43ef59b3dc',
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
