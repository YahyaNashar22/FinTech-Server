'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Description: {
        type: Sequelize.STRING
      },
      Logo: {
        type: Sequelize.STRING
      },
      Capital: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Updated_Captial: {
        type: Sequelize.INTEGER
      },
      Address: {
        type: Sequelize.STRING
      },
      Social_Media: {
        type: Sequelize.JSON
      },
      Phone_Number: {
        type: Sequelize.INTEGER
      },
      Website: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Companies');
  }
};