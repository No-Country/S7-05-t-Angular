const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../db");
const Student = require("./student");

class TeamLead extends Model {}

TeamLead.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_team: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_student: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Student,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "team_lead",
  }
);

module.exports = TeamLead;