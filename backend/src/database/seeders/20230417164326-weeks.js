"use strict";

module.exports = {
  up: async (queryInterface) => {
    const weeks = [
      {
        id: "c5d5d5c5-5298-4c25-8825-5c1d0fae55ac",
        number: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "1f8fcdf9-f2d2-4e38-97a5-4f62ad4b4d4a",
        number: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "7e757354-2b9e-41bb-9c0d-b64d54e1c32c",
        number: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "77744d6c-5f1d-4ec7-a6d9-0fa8a77a0c6d",
        number: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Weeks", weeks, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("Weeks", null, {});
  },
};
