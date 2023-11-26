"use strict";
import { Sequelize } from "sequelize";
import sequelize from "../config/dbconnection.js";
import Transactions from "./transactions.js";

const Notifications = sequelize.define("Notifications", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  TransactionID:{
    type:Sequelize.INTEGER,
    allowNull:false,
  references: {
    model: 'Transactions', // name of the referenced model
    key: 'id', // name of the referenced key
  }
},
});

export default Notifications;
