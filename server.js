import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connect } from "../FinTech-Server/config/dbconnection.js";
dotenv.config();

import UserRoutes from "./routes/UsersRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", UserRoutes);

app.listen(process.env.PORT, () => {
  connect();
  console.log(`server is running on port ${process.env.PORT}`);
});
