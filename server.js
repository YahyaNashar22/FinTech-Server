import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connect, syncronise } from "./config/dbconnection.js";
dotenv.config();

import UserRoutes from "./routes/UsersRoutes.js";
import TransactionsRoutes from "./routes/TransactionsRoutes.js";
import CompanyRoutes from "./routes/CompanyRoutes.js";
import CategoriesRoutes from "./routes/CategoriesRoutes.js";

import GoalRouter from "./routes/GoalsRoutes.js";

import "./config/association.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("images"));

app.use("/users", UserRoutes);
app.use("/transactions", TransactionsRoutes);
app.use("/company", CompanyRoutes);
app.use("/categories", CategoriesRoutes);
app.use("/goals", GoalRouter);

app.listen(process.env.PORT, () => {
  setTimeout(connect, 7000);
  setTimeout(syncronise, 7000);
  console.log(`server is running on port ${process.env.PORT}`);
});
