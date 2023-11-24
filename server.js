import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connect } from "./config/dbconnection.js";
dotenv.config();

import UserRoutes from "./routes/UsersRoutes.js";
import CategoriesRoutes from "./routes/CategoriesRoutes.js";
import CompanyRoutes from "./routes/CompanyRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", UserRoutes);
app.use("/categories", CategoriesRoutes);
app.use("company", CompanyRoutes);

// syncronise();
app.listen(process.env.PORT, () => {
  setTimeout(connect, 7000);
  console.log(`server is running on port ${process.env.PORT}`);
});
