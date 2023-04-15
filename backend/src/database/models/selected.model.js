const { Model, DataTypes, Sequelize } = require("sequelize");
const { ADMIN_TABLE } = require("./admin.model");

const SELECTED_TABLE = "Selected";

const SelectedSchema = {
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
  start_date: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  end_date: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
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
};

class Selected extends Model {
  static associate(models) {
    this.belongsTo(models.Admin, {
      foreignKey: "adminId",
      as: "admin",
    });
    this.hasMany(models.Team, {
      foreignKey: "selectedId",
      as: "teams",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: SELECTED_TABLE,
      modelName: "Selected",
      timestamps: false,
    };
  }
}

module.exports = { SELECTED_TABLE, SelectedSchema, Selected };
