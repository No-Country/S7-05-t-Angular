const { Model, DataTypes, Sequelize } = require("sequelize");
const { ADMIN_TABLE } = require("./admin.model");

const TECHNOLOGY_TABLE = "Technologies";

const TechnologySchema = {
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

class Technology extends Model {
  static associate(models) {
    this.belongsTo(models.Admin, {
      foreignKey: "adminId",
      as: "admin",
    });
    this.belongsToMany(models.Student, {
      through: "Student_Technologies",
      foreignKey: "technologyId",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: TECHNOLOGY_TABLE,
      modelName: "Technology",
      timestamps: true,
    };
  }
}
module.exports = { TECHNOLOGY_TABLE, TechnologySchema, Technology };
