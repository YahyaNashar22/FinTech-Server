'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init({
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Logo: DataTypes.STRING,
    Capital: DataTypes.INTEGER,
    Updated_Captial: DataTypes.INTEGER,
    Address: DataTypes.STRING,
    Social_Media: DataTypes.JSON,
    Phone_Number: DataTypes.INTEGER,
    Website: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};