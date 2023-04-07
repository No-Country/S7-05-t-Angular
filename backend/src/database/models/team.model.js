const { Model, DataTypes, Sequelize } = require("sequelize");

//const { TEAM_LEAD_TABLE } = require("../models/teamLead.model");
const TEAM_TABLE = "Teams";

const TeamSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  // id_team_lead: {
  //   type: DataTypes.INTEGER,
  //   allowNull: true,
  //   references: {
  //     model: TEAM_LEAD_TABLE,
  //     key: "id",
  //   },
  //   onUpdate: "CASCADE",
  //   onDelete: "SET NULL",
  // },
};

class Team extends Model {
  static associate(models) {
    this.belongsTo(models.TeamLead, {
      foreignKey: "team_leadId",
      as: "teamLead",
    });
    this.hasMany(models.Student, {
      foreignKey: "teamId",
      as: "students",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TEAM_TABLE,
      modelName: "Team",
      timestamps: false,
    };
  }
}

module.exports = { TEAM_TABLE, TeamSchema, Team };
