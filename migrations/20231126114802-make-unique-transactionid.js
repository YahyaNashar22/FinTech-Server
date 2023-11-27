'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Drop the existing foreign key constraint
    await queryInterface.removeConstraint('Notifications', 'Notifications_ibfk_1');

    // Modify the column to be NOT NULL and UNIQUE
    await queryInterface.changeColumn('Notifications', 'TransactionID', {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Re-add the foreign key constraint if needed
    await queryInterface.addConstraint('Notifications', {
      fields: ['TransactionID'],
      type: 'foreign key',
      name: 'Notifications_ibfk_1',
      references: {
        table: 'Transactions',
        field: 'id',
      },
      onDelete: 'cascade', // Adjust this if needed
      onUpdate: 'cascade', // Adjust this if needed
    });
  },
};
