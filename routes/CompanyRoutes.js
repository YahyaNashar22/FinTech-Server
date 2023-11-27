import express from "express";
import {
  createCompanyInfo,
  getCompanyInfo,
  updateCompanyInfo,
} from "../controllers/CompanyController.js";
import uploadImage from "../middlewares/multer.js";

const router = express.Router();

router.post("/create", createCompanyInfo); // Route To create the company info

router.get("/info", uploadImage.single("logo"),getCompanyInfo); // Route to get the company Info

router.put("/update", uploadImage.single("logo"),updateCompanyInfo); // Route to update the company Info

export default router;