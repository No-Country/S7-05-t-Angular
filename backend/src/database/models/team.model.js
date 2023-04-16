const { Model, DataTypes, Sequelize } = require("sequelize");
const { Admin, ADMIN_TABLE } = require("./admin.model");
const { SELECTED_TABLE } = require("./selected.model");

const TEAM_TABLE = "Teams";

const TeamSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  team_leadId: {
    type: Sequelize.UUID,
    allowNull: true,
    references: {
      model: TEAM_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  adminId: {
    type: Sequelize.UUID,
    references: {
      model: ADMIN_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  selectedId: {
    type: Sequelize.UUID,
    references: {
      model: SELECTED_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Team extends Model {
  static associate(models) {
    this.belongsTo(models.TeamLead, {
      foreignKey: "team_leadId",
      as: "teamLead",
    });
    this.belongsTo(models.Selected, {
      foreignKey: "selectedId",
      as: "selected",
    });
    this.belongsTo(models.Admin, {
      foreignKey: "adminId",
      as: "admin",
    });
    // this.belongsToMany(models.Technology, {
    //   through: "Team_Technologies",
    //   foreignKey: "technologyId",
    // });
    // this.belongsToMany(models.Student, {
    //   through: models.TeamStudent,
    //   // foreignKey: "teamId",
    //   // as: "students",
    // });
    // this.hasMany(models.Student, {
    //   foreignKey: "teamId",
    //   as: "students",
    // });
    this.belongsToMany(models.Technology, {
      through: models.TeamTechnology,
      foreignKey: "teamId",
      //otherKey: 'technologyId',
    });

    this.belongsToMany(models.Student, {
      through: models.TeamStudent,
      foreignKey: "teamId",
      //otherKey: 'technologyId',
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
