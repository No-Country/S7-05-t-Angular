"use strict";

/** @type {import('sequelize-cli').Migration} */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Team_Technologies",
      [
        {
          id: "d288c6b1-00e1-4b87-bac9-17a8a8a98cbe",
          teamId: "12cbb4a4-4c4c-4b87-a7d5-98242c6327f1",
          technologyId: "a3b50d1b-c16f-4e9f-8a3b-3dc52e57e729",
        },
        {
          id: "d12f6398-8c08-4a13-9f4f-3c58e2b2c52c",
          teamId: "12cbb4a4-4c4c-4b87-a7d5-98242c6327f1",
          technologyId: "d12f6398-8c08-4a13-9f4f-3c58e2b2c52c",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Team_Technologies", null, {});
  },
};
