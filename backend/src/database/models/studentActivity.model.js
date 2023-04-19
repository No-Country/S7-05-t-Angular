// const { Model, DataTypes, Sequelize } = require("sequelize");
// const { STUDENT_TABLE } = require("./student.model");
// const { ACTIVITY_TABLE } = require("./activity.model");
// const { ATTENDANCE_TABLE } = require("./attendance.model");

// const STUDENT_ACTIVITY_TABLE = "StudentActivity";

// const StudentActivitySchema = {
//   id: {
//     allowNull: false,
//     primaryKey: true,
//     type: Sequelize.UUID,
//     defaultValue: Sequelize.UUIDV4,
//   },
//   studentId: {
//     allowNull: false,
//     type: Sequelize.UUID,
//     references: {
//       model: STUDENT_TABLE,
//       key: "id",
//     },
//     onUpdate: "CASCADE",
//     onDelete: "CASCADE",
//   },
//   activityId: {
//     allowNull: false,
//     type: Sequelize.UUID,
//     references: {
//       model: "Activity",
//       key: "id",
//     },
//     onUpdate: "CASCADE",
//     onDelete: "CASCADE",
//   },
//   attendanceId: {
//     allowNull: false,
//     type: Sequelize.UUID,
//     references: {
//       model: "Attendance",
//       key: "id",
//     },
//     onUpdate: "CASCADE",
//     onDelete: "CASCADE",
//   },
//   created_at: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: Sequelize.literal("NOW()"),
//   },
//   updated_at: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: Sequelize.literal("NOW()"),
//   },
// };

// class StudentActivity extends Model {
//   static associate(models) {
//     this.belongsTo(models.Student, {
//       foreignKey: "student_id",
//       as: "student",
//     });
//     this.belongsTo(models.Activity, {
//       foreignKey: "activity_id",
//       as: "activity",
//     });
//     this.belongsTo(models.Attendance, {
//       foreignKey: "attendance_id",
//       as: "attendance",
//     });
//   }

//   static config(sequelize) {
//     return {
//       sequelize,
//       tableName: STUDENT_ACTIVITY_TABLE,
//       modelName: "StudentActivity",
//       timestamps: true,
//       underscored: true,
//     };
//   }
// }

// module.exports = {
//   STUDENT_ACTIVITY_TABLE,
//   StudentActivitySchema,
//   StudentActivity,
// };

const { Model, DataTypes, Sequelize } = require("sequelize");
const { STUDENT_TABLE } = require("./student.model");
const { ACTIVITY_TABLE } = require("./activity.model");
const { ATTENDANCE_TABLE } = require("./attendance.model");

const STUDENT_ACTIVITY_TABLE = "Student_Activities";

const StudentActivitySchema = {
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
      model: STUDENT_TABLE,
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
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("NOW()"),
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("NOW()"),
  },
};

class StudentActivity extends Model {
  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: "studentId",
      as: "student",
    });
    this.belongsTo(models.Activity, {
      foreignKey: "activityId",
      as: "activity",
    });
    this.belongsTo(models.Attendance, {
      foreignKey: "attendanceId",
      as: "attendance",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: STUDENT_ACTIVITY_TABLE,
      modelName: "StudentActivity",
      timestamps: true,
      underscored: true,
    };
  }
}

module.exports = {
  STUDENT_ACTIVITY_TABLE,
  StudentActivitySchema,
  StudentActivity,
};
