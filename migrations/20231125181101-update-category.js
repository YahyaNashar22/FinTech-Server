'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Drop the foreign key constraint for CategoryID first
    await queryInterface.removeConstraint('Transactions', 'Transactions_ibfk_1');

    // Drop the existing index on the CategoryID field
    await queryInterface.removeIndex('Transactions', 'CategoryID');

    // Now, you can safely drop the index or make other changes
    // ...
  },

  down: async (queryInterface, Sequelize) => {
    // Recreate the index on the CategoryID field
    await queryInterface.addIndex('Transactions', ['CategoryID'], { name: 'CategoryID' });

    // Recreate the foreign key constraint for CategoryID
    await queryInterface.addConstraint('Transactions', {
      fields: ['CategoryID'],
      type: 'foreign key',
      name: 'Transactions_ibfk_1',
      references: {
        table: 'Categories',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },
};
