const { ADMIN_TABLE } = require("../models/admin.model");

const SELECTED_TABLE = "Selected";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(SELECTED_TABLE, {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      start_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      end_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(SELECTED_TABLE);
  },
};
