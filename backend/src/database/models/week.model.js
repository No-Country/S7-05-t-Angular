const { Model, DataTypes, Sequelize } = require("sequelize");

//const MEETING_TABLE = require("./meeting.model").MEETING_TABLE;

const WEEK_TABLE = "Weeks";

const WeekSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  number: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

class Week extends Model {
  static associate(models) {
    this.hasMany(models.Meeting, {
      foreignKey: "weekId",
      as: "meetings",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: WEEK_TABLE,
      modelName: "Week",
      timestamps: true,
    };
  }
}

module.exports = { WEEK_TABLE, WeekSchema, Week };
