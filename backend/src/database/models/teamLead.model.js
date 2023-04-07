const { Model, DataTypes, Sequelize } = require("sequelize");

const { STUDENT_TABLE } = require("../models/student.model");
const TEAM_LEAD_TABLE = "Team_leads";

const TeamLeadSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
};

class TeamLead extends Model {
  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: "studentId" });
    this.hasMany(models.Team, {
      foreignKey: "team_leadId",
      as: "teams",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TEAM_LEAD_TABLE,
      modelName: "TeamLead",
      timestamps: true,
    };
  }
}

module.exports = { TEAM_LEAD_TABLE, TeamLeadSchema, TeamLead };
