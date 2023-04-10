const { Model, DataTypes } = require('sequelize');

const { TEAM_TABLE } = require('./team.model');
const { TECHNOLOGY_TABLE } = require('./technology.model');

const TEAM_TECHNOLOGY_TABLE = 'Team_Technologies';

const TeamTechnologySchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  teamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TEAM_TABLE,
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

class TeamTechnology extends Model {
  static associate(models) {
    this.belongsTo(models.Team, {
      foreignKey: 'teamId',
      as: 'team',
    });
    this.belongsTo(models.Technology, {
      foreignKey: 'technologyId',
      as: 'technology',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TEAM_TECHNOLOGY_TABLE,
      modelName: 'TeamTechnology',
      timestamps: true,
    };
  }
}

module.exports = { TEAM_TECHNOLOGY_TABLE, TeamTechnologySchema, TeamTechnology };
