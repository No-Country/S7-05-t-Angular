const { Model, DataTypes, Sequelize } = require("sequelize");
const { WEEK_TABLE } = require("./week.model");
const { TEAM_TABLE } = require("./team.model");

const MEETING_TABLE = "Meeting";

const MeetingSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  teamId: {
    allowNull: false,
    type: Sequelize.UUID,
    references: {
      model: TEAM_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  weekId: {
    allowNull: false,
    type: Sequelize.UUID,
    references: {
      model: WEEK_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  meet_number: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  observation: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
};

class Meeting extends Model {
  static associate(models) {
    this.hasMany(models.Attendance, {
      foreignKey: "meetingId",
      as: "attendance",
    });
    this.belongsTo(models.Week, {
      foreignKey: "weekId",
      as: "week",
    });
    this.belongsTo(models.Team, {
      foreignKey: "teamId",
      as: "team",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MEETING_TABLE,
      modelName: "Meeting",
      timestamps: true,
    };
  }
}

module.exports = { MEETING_TABLE, MeetingSchema, Meeting };
