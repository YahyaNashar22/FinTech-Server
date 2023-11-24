import express from "express";
import {
  getCompanyInfo,
  updateCompanyInfo,
} from "../controllers/CompanyController.js";

const router = express.Router();

router.get("/companyInfo", getCompanyInfo); // Route to get the company Info

router.put("/companyInfo", updateCompanyInfo); // Route to update the company Info

export default router;
