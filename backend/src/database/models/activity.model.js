const { Model, DataTypes, Sequelize } = require("sequelize");

const ACTIVITY_TABLE = "Activity";

const ActivitySchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  description: {
    allowNull: true,
    type: DataTypes.STRING,
  },
};

class Activity extends Model {
  static associate(models) {
    // this.belongsToMany(models.Student, {
    //     through: models.StudentActivity,
    //     foreignKey: "activity_id",
    //     as: "students",
    //   });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ACTIVITY_TABLE,
      modelName: "Activity",
      timestamps: true,
    };
  }
}

module.exports = { ACTIVITY_TABLE, ActivitySchema, Activity };
