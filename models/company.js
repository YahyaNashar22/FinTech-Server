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
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
    },
    Logo: {
      type: DataTypes.STRING,
    },
    Capital: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Updated_Capital: {
      type: DataTypes.INTEGER,
    },
    Address: {
      type: DataTypes.STRING,
    },
    Social_Media: {
      type: DataTypes.JSON,
    },
    Phone_Number: {
      type: DataTypes.INTEGER,
    },
    Website: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};