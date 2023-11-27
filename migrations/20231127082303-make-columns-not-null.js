'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Change the CategoryID column to be NOT NULL
    await queryInterface.changeColumn('Transactions', 'CategoryID', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });

    // Change the UserID column to be NOT NULL
    await queryInterface.changeColumn('Transactions', 'UserID', {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // You can add down migration logic if needed
  },
};
