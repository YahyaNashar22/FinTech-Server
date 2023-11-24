import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connect, syncronise } from "../FinTech-Server/config/dbconnection.js";
dotenv.config();

import UserRoutes from "./routes/UsersRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", UserRoutes);

// syncronise();
app.listen(process.env.PORT, () => {
  setTimeout(connect, 7000);
  console.log(`server is running on port ${process.env.PORT}`);
});
