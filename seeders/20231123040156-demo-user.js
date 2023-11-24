'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      { name: 'facebook', type: true, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Add logic to revert the seeded data
    // For example:
    await queryInterface.bulkDelete('Users', null, {});
  }
};