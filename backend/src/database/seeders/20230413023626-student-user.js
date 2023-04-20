"use strict";
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Students",
      [
        {
          id: "8a7c6105-5f55-4a5b-9ce9-458a2b43aa7c",
          name: "John Smith",
          email: "john.smith@example.com",
          phone: "555-1234",
          isTeamLead: true,
          isActive: true,
        },
        {
          id: "8741edeb-8fb7-4d02-bc0a-29bb90ec3eb3",
          name: "Jane Doe",
          email: "jane.doe@example.com",
          phone: "555-5678",
          isTeamLead: false,
          isActive: true,
        },
        {
          id: "4bb4b003-1b7a-4c5c-bb5d-69aef70b626f",
          name: "William Scott",
          email: "william.scott@example.com",
          phone: "555-2345",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: "be10b5c5-5d33-48ef-bbb5-840c4569b2f1",
          name: "Olivia White",
          email: "olivia.white@example.com",
          phone: "555-3567",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: "7f9772f1-9b9d-43bb-83a4-6844fc86a7fc",
          name: "James Martinez",
          email: "james.martinez@example.com",
          phone: "555-4789",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: "b324f8e7-4ee4-4cb4-9d3c-969f9c9e51d2",
          name: "Gabriela Torres",
          email: "gabriela.torres@example.com",
          phone: "555-5678",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: "84a7f9d6-aae6-4283-b8db-6c94f23a99a1",
          name: "Luis Pérez",
          email: "luis.perez@example.com",
          phone: "555-9876",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: "b369a11a-8dd7-498f-b63f-e9559f9c1a09",
          name: "Juan González",
          email: "juan.gonzalez@example.com",
          phone: "555-5555",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: "d05e1e71-9f9a-4f62-90a3-3d273f1ab94e",
          name: "María Hernández",
          email: "maria.hernandez@example.com",
          phone: "555-1234",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: '42c11918-5319-4263-a374-2e03d7d6e447',
          name: "Diego García",
          email: "diego.garcia@example.com",
          phone: "555-8765",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: 'a4c4b0ee-6f7b-4a3c-a6dc-b46e72962c1c',
          name: "Sofía Ortiz",
          email: "sofia.ortiz@example.com",
          phone: "555-4321",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: 'c7b18ea1-116c-4c2c-a60f-9bb17de9b201',
          name: "Diego Castro",
          email: "diego.castro@example.com",
          phone: "555-4321",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: 'e38c63c6-3c3f-4a56-a267-14e69b88b32c',
          name: "Luisa Hernandez",
          email: "luisa.hernandez@example.com",
          phone: "555-8765",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: 'cd14d271-5692-4b31-8c2a-46c28d75d44a',
          name: "Andrés Martinez",
          email: "andres.martinez@example.com",
          phone: "555-1234",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: '1e37498c-d3cc-4c9d-9d95-c38833f7bb20',
          name: "Ana Flores",
          email: "ana.flores@example.com",
          phone: "555-6789",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: '1f904b43-8d80-4b99-9df6-96332c68aa06',
          name: "Gabriela Castillo",
          email: "gabriela.castillo@example.com",
          phone: "555-0987",
          isTeamLead: false,
          isActive: true,          
        },
        {
          id: 'd05e348c-0256-4c4e-80ec-f21b4f4b66ad',
          name: "Ana Fernández",
          email: "ana.fernandez@example.com",
          phone: "555-7654",
          isTeamLead: false,
          isActive: true,          
        },
                
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Students", null, {});
  },
};
