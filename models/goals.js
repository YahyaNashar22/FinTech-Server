'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Goals.init({
    Value: DataTypes.INTEGER,
    Status: DataTypes.BOOLEAN,
    Start_Date: DataTypes.DATE,
    End_Date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Goals',
  });
  return Goals;
};