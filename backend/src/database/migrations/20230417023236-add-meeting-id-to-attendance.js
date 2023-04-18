"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Attendance", "meetingId", {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "Meeting",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Attendance", "meetingId");
  },
};
