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
      activityId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: "Activity",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
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

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     await queryInterface.createTable("StudentActivity", {
//       id: {
//         allowNull: false,
//         primaryKey: true,
//         type: Sequelize.UUID,
//         defaultValue: Sequelize.UUIDV4,
//       },
//       student_id: {
//         allowNull: false,
//         type: Sequelize.UUID,
//         references: {
//           model: "Students",
//           key: "id",
//         },
//         onUpdate: "CASCADE",
//         onDelete: "CASCADE",
//       },
//       activity_id: {
//         allowNull: false,
//         type: Sequelize.UUID,
//         references: {
//           model: "Activity",
//           key: "id",
//         },
//         onUpdate: "CASCADE",
//         onDelete: "CASCADE",
//       },
//       attendance_id: {
//         allowNull: false,
//         type: Sequelize.UUID,
//         references: {
//           model: "Attendance",
//           key: "id",
//         },
//         onUpdate: "CASCADE",
//         onDelete: "CASCADE",
//       },
//       created_at: {
//         type: Sequelize.DATE,
//         allowNull: false,
//         defaultValue: Sequelize.literal("NOW()"),
//       },
//       updated_at: {
//         type: Sequelize.DATE,
//         allowNull: false,
//         defaultValue: Sequelize.literal("NOW()"),
//       },
//     });
//   },

//   down: async (queryInterface, Sequelize) => {
//     await queryInterface.dropTable("StudentActivity");
//   },
// };
