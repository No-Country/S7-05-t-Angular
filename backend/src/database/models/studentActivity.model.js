const { Model, DataTypes, Sequelize } = require("sequelize");
const { STUDENT_TABLE } = require("./student.model");
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
    field: "studentId",
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
    field: "attendanceId",
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  description: {
    allowNull: true,
    type: Sequelize.TEXT,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("NOW()"),
    field: "createdAt",
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("NOW()"),
    field: "updatedAt",
  },
};

class StudentActivity extends Model {
  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: "studentId",
      as: "student",
    });
    // this.belongsTo(models.Activity, {
    //   foreignKey: "activityId",
    //   as: "activity",
    // });
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
