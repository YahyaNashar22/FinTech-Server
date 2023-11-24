'use strict';
import { Sequelize } from "sequelize";
import sequelize from "../config/dbconnection.js";

const  Notification = sequelize.define("Notification", {
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
  TransactionID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
   
});

export default Notification;