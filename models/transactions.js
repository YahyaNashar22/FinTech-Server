"use strict";
import { Sequelize } from "sequelize";
import sequelize from "../config/dbconnection.js";

const Transactions = sequelize.define("Transactions", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  value: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  CategoryID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Categories", // name of the referenced model
      key: "id", // name of the referenced key
    },
    unique: false,
  },
  UserID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "Users", // name of the referenced model
      key: "id", // name of the referenced key
    },
    unique: false,
  },
});

export default Transactions;
