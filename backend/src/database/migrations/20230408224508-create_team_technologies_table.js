"use strict";

const {
  TEAM_TECHNOLOGY_TABLE,
  TeamTechnologySchema,
} = require("../models/team-technologies.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(
      TEAM_TECHNOLOGY_TABLE,
      TeamTechnologySchema
    );
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TEAM_TECHNOLOGY_TABLE);
  },
};

// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable('Team_Technologies', {
//       id: {
//         type: Sequelize.UUID,
//         defaultValue: Sequelize.UUIDV4,
//         primaryKey: true,
//       },
//       teamId: {
//         type: Sequelize.UUID,
//         allowNull: false,
//         references: {
//           model: 'Teams',
//           key: 'id',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE',
//       },
//       technologyId: {
//         type: Sequelize.UUID,
//         allowNull: false,
//         references: {
//           model: 'Technologies',
//           key: 'id',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'SET NULL',
//       },
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable('Team_Technologies');
//   }
// };
