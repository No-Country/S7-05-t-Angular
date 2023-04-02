// const { Sequelize, DataTypes, Model } = require("sequelize");
// const sequelize = require("../db");
// const Student = require("./student");

// class TeamLead extends Model {}

// TeamLead.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     id_team: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     id_student: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: Student,
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     modelName: "team_lead",
//   }
// );

// module.exports = TeamLead;

const { Model, DataTypes, Sequelize } = require('sequelize');


const TEAM_LEAD_TABLE = "team_lead";

const TeamLeadSchema = {
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
  },
};

class TeamLead extends Model {
  static associate(models) {
    // agregar relaciones con otros modelos aquí
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TEAM_LEAD,
      modelName: "TeamLead",
      timestamps: true,
    };
  }
}

module.exports = { TEAM_LEAD_TABLE, TeamLeadSchema, TeamLead }
