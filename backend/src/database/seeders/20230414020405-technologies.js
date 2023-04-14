'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Technologies', [
      {
        id: 'a3b50d1b-c16f-4e9f-8a3b-3dc52e57e729',
        name: 'Node.js',
        adminId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'baa032cf-ee22-4aeb-9731-cc858d9fb2dd',
        name: 'React',
        adminId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'd12f6398-8c08-4a13-9f4f-3c58e2b2c52c',
        name: 'Angular',
        adminId: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: '5ec3e1d5-1bc5-4552-8c2a-f64f9c9b038d',
        name: 'Vue.js',
        adminId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'd83129f4-cbef-4dbd-b4cb-ff4e4c1fb7cc',
        name: 'Java',
        adminId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ad06e17f-7f9d-424a-88a2-491d8b7e45d3',
        name: 'Bubble',
        adminId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '59c5e2e5-9c9b-468d-b94f-efbebd5e73e8',
        name: 'Airtable',
        adminId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'e07e6f1d-8f7e-41dd-ba58-53161d93e9e7',
        name: 'Zapier',
        adminId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Technologies', null, {});
  }
};
