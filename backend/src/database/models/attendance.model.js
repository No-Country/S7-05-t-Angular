const { Model, DataTypes, Sequelize } = require("sequelize");
const { MEETING_TABLE } = require("./meeting.model");
const { STUDENT_TABLE } = require("./student.model");

const ATTENDANCE_TABLE = "Attendance";

const AttendanceSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  is_present: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  meetingId: {
    allowNull: false,
    type: Sequelize.UUID,
    references: {
      model: MEETING_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
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
};

class Attendance extends Model {
  static associate(models) {
    this.belongsTo(models.Meeting, {
      foreignKey: "meetingId",
      as: "meeting",
    });
    this.belongsTo(models.Student, {
      foreignKey: "studentId",
      as: "student",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ATTENDANCE_TABLE,
      modelName: "Attendance",
      timestamps: true,
    };
  }
}

module.exports = { ATTENDANCE_TABLE, AttendanceSchema, Attendance };
