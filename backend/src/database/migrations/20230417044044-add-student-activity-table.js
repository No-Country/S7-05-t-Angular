"use strict";
const {
  STUDENT_ACTIVITY_TABLE,
  StudentActivitySchema,
} = require("../models/studentActivity.model");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(STUDENT_ACTIVITY_TABLE, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      studentId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Students",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      // activityId: {
      //   allowNull: false,
      //   type: Sequelize.UUID,
      //   references: {
      //     model: "Activity",
      //     key: "id",
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "CASCADE",
      // },
      attendanceId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Attendance",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      description: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("NOW()"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(STUDENT_ACTIVITY_TABLE);
  },
};
