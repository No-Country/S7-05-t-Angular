const { Model, DataTypes, Sequelize } = require('sequelize');

const STUDENT_TABLE = 'students';

const StudentSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: true,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
  },
  isTeamLead: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}

class Student extends Model {
  static associate(models) {
    // agregar relaciones con otros modelos aquí
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: STUDENT_TABLE,
      modelName: 'Student',
      timestamps: false
    }
  }
}

module.exports = { STUDENT_TABLE, StudentSchema, Student }
