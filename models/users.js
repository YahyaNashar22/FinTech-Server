// "use strict";

// export default (sequelize, DataTypes) => {
//   const Users = sequelize.define("Users", {
//     Name: DataTypes.STRING,
//     Email: DataTypes.STRING,
//     Password: DataTypes.STRING,
//     Role: DataTypes.STRING,
//     Picture: DataTypes.STRING,
//   });
//   return Users;
// };

import { Sequelize } from "sequelize";
import sequelize from "../config/dbconnection.js";

const Users = sequelize.define("Users", {
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
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Picture: {
    type: Sequelize.STRING,
  },
});

export default Users;
