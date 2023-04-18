const { Model, DataTypes, Sequelize } = require('sequelize');

const ADMIN_TABLE = "Admins";

const AdminSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};

class Admin extends Model {
  static associate(models) {
    this.hasMany(models.Student, {
      foreignKey: "adminId",
      as: "students",
    });
    this.hasMany(models.Team, {
      foreignKey: "adminId",
      as: "teams",
    });
    this.hasMany(models.TeamLead, {
      foreignKey: "adminId",
      as: "team_leads",
    });
    this.hasMany(models.Technology, {
      foreignKey: "adminId",
      as: "technologies",
    });
  }

  static config(sequelize) {
    return {
      tableName: ADMIN_TABLE,
      sequelize,
      modelName: "Admin",
      timestamps: true,
    };
  }
}

module.exports = { ADMIN_TABLE, AdminSchema, Admin };