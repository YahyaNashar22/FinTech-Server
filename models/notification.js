"use strict";
import { Sequelize } from "sequelize";
import sequelize from "../config/dbconnection.js";

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
});

export default Notifications;
