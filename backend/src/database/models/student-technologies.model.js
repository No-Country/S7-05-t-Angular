const { Model, DataTypes } = require('sequelize');

const { STUDENT_TABLE } = require('./student.model');
const { TECHNOLOGY_TABLE } = require('./technology.model');

const STUDENT_TECHNOLOGY_TABLE = 'Student_Technologies';

const StudentTechnologySchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: STUDENT_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  technologyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TECHNOLOGY_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class StudentTechnology extends Model {
  static associate(models) {
    this.belongsTo(models.Student, {
      foreignKey: 'studentId',
      as: 'student',
    });
    this.belongsTo(models.Technology, {
      foreignKey: 'technologyId',
      as: 'technology',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: STUDENT_TECHNOLOGY_TABLE,
      modelName: 'StudentTechnology',
      timestamps: true,
    };
  }
}

module.exports = { STUDENT_TECHNOLOGY_TABLE, StudentTechnologySchema, StudentTechnology };
