import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: "db4free.net",
    dialect: "mysql",
  }
);

export const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.log("Unable to connect to database", error);
  }
};

export default sequelize;
