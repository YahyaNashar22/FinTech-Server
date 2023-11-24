import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Users from "./models/users.js";
import Transactions from "./models/transactions.js";
import sequelize, { connect } from "../FinTech-Server/config/dbconnection.js";
dotenv.config();

import UserRoutes from "./routes/UsersRoutes.js";
import TransactionsRoutes from "./routes/TransactionsRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", UserRoutes);
app.use("/transactions", TransactionsRoutes);

// syncronise();
app.listen(process.env.PORT, () => {
  setTimeout(connect, 7000);
  console.log(`server is running on port ${process.env.PORT}`);
});

// Users.hasMany(Transactions, { foreignKey: "UserID" });
// // Categories.hasMany(Transactions , { foreignKey: 'CategoriesId' });

// sequelize
//   .sync({ force: true })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
