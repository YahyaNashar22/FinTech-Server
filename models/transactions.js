"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transactions.init(
    {
      Title: DataTypes.STRING,
      Type: DataTypes.BOOLEAN,
      Date: DataTypes.DATE,
      Value: DataTypes.INTEGER,
      Category_ID: DataTypes.INTEGER,
      UserID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Transactions",
    }
  );
  return Transactions;
};