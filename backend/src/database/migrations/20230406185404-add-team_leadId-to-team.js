'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Teams', 'team_leadId', {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: 'Team_leads',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Teams', 'team_leadId');
  }
};
