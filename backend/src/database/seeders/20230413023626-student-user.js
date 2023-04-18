"use strict";
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Students",
      [
        {
          id: uuidv4(),
          name: "William Scott",
          email: "william.scott@example.com",
          phone: "555-2345",
          isTeamLead: false,
          isActive: true,
          teamId: null,
        },
        {
          id: uuidv4(),
          name: "Olivia White",
          email: "olivia.white@example.com",
          phone: "555-3567",
          isTeamLead: false,
          isActive: true,
          teamId: null,
        },
        {
          id: uuidv4(),
          name: "James Martinez",
          email: "james.martinez@example.com",
          phone: "555-4789",
          isTeamLead: false,
          isActive: true,
          teamId: null,
        },
        {
          id: uuidv4(),
          name: "Gabriela Torres",
          email: "gabriela.torres@example.com",
          phone: "555-5678",
          isTeamLead: false,
          isActive: true,
          teamId: null
        },
        {
          id: uuidv4(),
          name: "Luis Pérez",
          email: "luis.perez@example.com",
          phone: "555-9876",
          isTeamLead: false,
          isActive: true,
          teamId: null
        },
        {
          id: uuidv4(),
          name: "Juan González",
          email: "juan.gonzalez@example.com",
          phone: "555-5555",
          isTeamLead: false,
          isActive: true,
          teamId: null
        },
        {
          id: uuidv4(),
          name: "María Hernández",
          email: "maria.hernandez@example.com",
          phone: "555-1234",
          isTeamLead: false,
          isActive: true,
          teamId: null
        },
        {
          id: uuidv4(),
          name: "Diego García",
          email: "diego.garcia@example.com",
          phone: "555-8765",
          isTeamLead: false,
          isActive: true,
          teamId: null
        },
        {
          id: uuidv4(),
          name: "Sofía Ortiz",
          email: "sofia.ortiz@example.com",
          phone: "555-4321",
          isTeamLead: false,
          isActive: true,
          teamId: null
        },
        {
          id: uuidv4(),
          name: "Diego Castro",
          email: "diego.castro@example.com",
          phone: "555-4321",
          isTeamLead: false,
          isActive: true,
          teamId: null,
        },
        {
          id: uuidv4(),
          name: "Luisa Hernandez",
          email: "luisa.hernandez@example.com",
          phone: "555-8765",
          isTeamLead: false,
          isActive: true,
          teamId: null,
        },
        {
          id: uuidv4(),
          name: "Andrés Martinez",
          email: "andres.martinez@example.com",
          phone: "555-1234",
          isTeamLead: false,
          isActive: true,
          teamId: null,
        },
        {
          id: uuidv4(),
          name: "Ana Flores",
          email: "ana.flores@example.com",
          phone: "555-6789",
          isTeamLead: false,
          isActive: true,
          teamId: null,
        },
        {
          id: uuidv4(),
          name: "Gabriela Castillo",
          email: "gabriela.castillo@example.com",
          phone: "555-0987",
          isTeamLead: false,
          isActive: true,
          teamId: null,
        },
        {
          id: uuidv4(),
          name: "Ana Fernández",
          email: "ana.fernandez@example.com",
          phone: "555-7654",
          isTeamLead: false,
          isActive: true,
          teamId: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Students", null, {});
  },
};
