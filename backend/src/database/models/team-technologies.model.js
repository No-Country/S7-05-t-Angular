const { Model, DataTypes, Sequelize } = require("sequelize");

const { TEAM_TABLE } = require("./team.model");
const { TECHNOLOGY_TABLE } = require("./technology.model");

const TEAM_TECHNOLOGY_TABLE = "Team_Technologies";

const TeamTechnologySchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  teamId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: TEAM_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  technologyId: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: TECHNOLOGY_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class TeamTechnology extends Model {
  static associate(models) {
    // this.belongsTo(models.Technology, {
    //   foreignKey: 'technologyId',
    //   as: 'technology',
    // });

    models.Team.belongsToMany(models.Technology, {
      through: this,
      foreignKey: "teamId",
      otherKey: "technologyId",
      as: "technologies",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TEAM_TECHNOLOGY_TABLE,
      modelName: "TeamTechnology",
      timestamps: true,
    };
  }
}

module.exports = {
  TEAM_TECHNOLOGY_TABLE,
  TeamTechnologySchema,
  TeamTechnology,
};
