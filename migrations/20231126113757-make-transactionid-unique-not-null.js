'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Notifications', 'TransactionID', {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      references: {
        model: 'Transactions', // Make sure this matches your actual model name
        key: 'id',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // If you ever need to rollback, you can use this function
    await queryInterface.changeColumn('Notifications', 'TransactionID', {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: false,
      references: {
        model: 'Transactions',
        key: 'id',
      },
    });
  },
};

