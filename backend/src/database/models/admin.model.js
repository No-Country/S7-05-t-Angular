// const { Sequelize, DataTypes, Model } = require("sequelize");
// const sequelize = require("../db");

// class Admin extends Model {}

// Admin.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     phone: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     isActive: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: true,
//     },
//   },
//   {
//     sequelize,
//     modelName: "admin",
//   }
// );

// module.exports = Admin;

const { Model, DataTypes, Sequelize } = require('sequelize');

const ADMIN_TABLE = "admins";

const AdminSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
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
    // Se agregan relaciones con otros modelos aquí
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