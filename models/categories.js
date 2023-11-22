'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model { 
    static associate(models) {
      // define association here
    }
  }
  Categories.init({
    Name: DataTypes.STRING,
    type: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};