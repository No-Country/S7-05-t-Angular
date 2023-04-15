'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Team_Students', [
      {
        id: '40f0485e-bf1a-481e-a5b7-5e9c9e92da2f',
        teamId: '12cbb4a4-4c4c-4b87-a7d5-98242c6327f1',
        studentId: '8a7c6105-5f55-4a5b-9ce9-458a2b43aa7c'
      },
      {
        id: '8f7a4df6-123f-4f2e-bd38-248e1776f1c7',
        teamId: '12cbb4a4-4c4c-4b87-a7d5-98242c6327f1',
        studentId: '8741edeb-8fb7-4d02-bc0a-29bb90ec3eb3'
      },
      {
        id: '31c324d1-faf5-43a5-8ea5-53b5e38c2409',
        teamId: '9bb44d34-09f5-4633-b141-68f2d2e52dc3',
        studentId: 'b324f8e7-4ee4-4cb4-9d3c-969f9c9e51d2'
      },
      {
        id: 'bb0e7ca3-7083-4d38-bf0d-d4c4af1c3351',
        teamId: '9bb44d34-09f5-4633-b141-68f2d2e52dc3',
        studentId: '84a7f9d6-aae6-4283-b8db-6c94f23a99a1'
      },
      {
        id: 'c53d8197-87e2-4c33-8d56-c36a1a51a28b',
        teamId: '12cbb4a4-4c4c-4b87-a7d5-98242c6327f1',
        studentId: 'b369a11a-8dd7-498f-b63f-e9559f9c1a09'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Team_Students', null, {});
  }
};