const { Model, DataTypes, Sequelize } = require("sequelize");

const { STUDENT_TABLE } = require("../models/student.model");
const { ADMIN_TABLE } = require("./admin.model");
const TEAM_LEAD_TABLE = "Team_leads";

const TeamLeadSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  studentId: {
    type: Sequelize.INTEGER,
      references: {
        model: STUDENT_TABLE,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
  },
  adminId: {
    type: Sequelize.INTEGER,
    references: {
      model: ADMIN_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class TeamLead extends Model {
  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: "studentId" });
    this.belongsTo(models.Admin, {
      foreignKey: "adminId",
      as: "admin",
    });
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
