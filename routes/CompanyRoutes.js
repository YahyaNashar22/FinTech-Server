import express from "express";
import {
  createCompanyInfo,
  getCompanyInfo,
  updateCompanyInfo,
} from "../controllers/CompanyController.js";

const router = express.Router();

router.post("/create", createCompanyInfo); // Route To create the company info

router.get("/info", getCompanyInfo); // Route to get the company Info

router.put("/update", updateCompanyInfo); // Route to update the company Info

export default router;