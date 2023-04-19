"use strict";
const { MEETING_TABLE } = require("../models/meeting.model");
const { STUDENT_TABLE } = require("../models/student.model");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Attendance', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      is_present: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      // meetingId: {
      //   allowNull: false,
      //   type: Sequelize.UUID,
      //   references: {
      //     model: MEETING_TABLE,
      //     key: 'id',
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      // },
      studentId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: STUDENT_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()'),
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Attendance');
  }
};

