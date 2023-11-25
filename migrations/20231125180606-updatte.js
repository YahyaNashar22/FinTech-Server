'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Drop the foreign key constraint first
    await queryInterface.removeConstraint('Transactions', 'Transactions_ibfk_2');

    // Drop the existing index on the UserID field
    await queryInterface.removeIndex('Transactions', 'UserID');

    // Now, you can safely drop the index or make other changes
    // ...
  },

  down: async (queryInterface, Sequelize) => {
    // Recreate the index on the UserID field
    await queryInterface.addIndex('Transactions', ['UserID'], { name: 'UserID' });

    // Recreate the foreign key constraint
    await queryInterface.addConstraint('Transactions', {
      fields: ['UserID'],
      type: 'foreign key',
      name: 'Transactions_ibfk_2',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },
};

