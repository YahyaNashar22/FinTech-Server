import express from "express";
import dotenv from "dotenv";
import { connect } from "../FinTech-Server/config/dbconnection.js";
dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  connect();
  console.log(`server is running on port ${process.env.PORT}`);
});
