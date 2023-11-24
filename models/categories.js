import { Sequelize } from "sequelize";
import sequelize from "../config/dbconnection.js";

const Categories = sequelize.define("Categories", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  Name: {
    type: Sequelize.STRING,
  },
  type: {
    type: Sequelize.BOOLEAN,
  },
});

export default Categories;