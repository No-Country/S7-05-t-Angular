const { Model, DataTypes, Sequelize } = require("sequelize");

const { TEAM_TABLE } = require("./team.model");
const { STUDENT_TABLE } = require("./student.model");

const TEAM_STUDENT_TABLE = "Team_Students";

const TeamStudentSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  teamId: {
    type: Sequelize.UUID,
    allowNull: true,
    references: {
      model: TEAM_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  studentId: {
    type: Sequelize.UUID,
    allowNull: true,
    references: {
      model: STUDENT_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("NOW()"),
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal("NOW()"),
  },
};

class TeamStudent extends Model {
  static associate(models) {
    // this.belongsTo(models.Student, {
    //   foreignKey: "studentId",
    //   as: "students",
    // });

    models.Team.belongsToMany(models.Student, {
      through: this,
      foreignKey: "teamId",
      otherKey: "studentId",
      as: "students",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TEAM_STUDENT_TABLE,
      modelName: "TeamStudent",
      timestamps: true,
    };
  }
}

module.exports = {
  TEAM_STUDENT_TABLE,
  TeamStudentSchema,
  TeamStudent,
};
