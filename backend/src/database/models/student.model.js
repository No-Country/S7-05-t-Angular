const { Model, DataTypes, Sequelize } = require("sequelize");
const { ADMIN_TABLE } = require("./admin.model");

//const {TEAM_TABLE} = require("../models/team.model");
const STUDENT_TABLE = "Students";

const StudentSchema = {
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
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  isTeamLead: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  teamId: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: "Teams",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
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

class Student extends Model {
  static associate(models) {
    this.belongsTo(models.Team, {
      foreignKey: "teamId",
      as: "team",
    });
    this.belongsTo(models.Admin, {
      foreignKey: "adminId",
      as: "admin",
    });
    this.hasOne(models.TeamLead, {
      foreignKey: "studentId",
      as: "teamLead",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: STUDENT_TABLE,
      modelName: "Student",
      timestamps: false,
    };
  }
}

module.exports = { STUDENT_TABLE, StudentSchema, Student };
