import express from "express";
import {
  createCompanyInfo,
  getCompanyInfo,
  updateCompanyInfo,
} from "../controllers/CompanyController.js";
import uploadImage from "../middlewares/multer.js";
import { authorized, checkRole } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", authorized, checkRole(["admin"]), createCompanyInfo); // Route To create the company info

router.get(
  "/info",
  authorized,
  checkRole(["admin"]),
  uploadImage.single("logo"),
  getCompanyInfo
); // Route to get the company Info

router.put(
  "/update",
  authorized,
  checkRole(["admin"]),
  uploadImage.single("logo"),
  updateCompanyInfo
); // Route to update the company Info

export default router;
