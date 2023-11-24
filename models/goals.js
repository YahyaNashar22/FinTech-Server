'use strict';
import { Sequelize } from "sequelize";
import sequelize from "../config/dbconnection.js";

const  Goals = sequelize.define("Goals", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  Value: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  Start_Date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  End_Dat: {
    type: Sequelize.DATE,
    allowNull: false,
  },
 
});

export default Goals;