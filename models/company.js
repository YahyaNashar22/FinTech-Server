import { Sequelize } from "sequelize";
import sequelize from "../config/dbconnection.js";

const Company = sequelize.define("Company", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Email: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  // },
  Description: {
    type: Sequelize.STRING,
  },
  Logo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Capital: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Updated_Capital: {
    type: Sequelize.INTEGER,
  },
  Address: {
    type: Sequelize.STRING,
  },
  Social_Media: {
    type: Sequelize.JSON,
  },
  Phone_Number: {
    type: Sequelize.INTEGER,
  },
  Website: {
    type: Sequelize.STRING,
  },
});

export default Company;