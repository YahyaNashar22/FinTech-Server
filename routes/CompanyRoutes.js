import express from "express";
import {
  createCompanyInfo,
  getCompanyInfo,
  updateCompanyInfo,
  deleteCompanyInfo,
} from "../controllers/CompanyController.js";
import uploadImage from "../middlewares/multer.js";
import { authorized, checkRole } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", 
// authorized, 
// checkRole(["admin"]), 
uploadImage.single("Logo"),
createCompanyInfo); // Route To create the company info

router.get(
  "/info",
  // authorized,
  // checkRole(["admin"]),
  uploadImage.single("Logo"),
  getCompanyInfo
); // Route to get the company Info

router.put(
  "/update",
  // authorized,
  // checkRole(["admin"]),
  uploadImage.single("Logo"),
  updateCompanyInfo
); // Route to update the company Info

router.delete(
  "/delete",
  // authorized, checkRole(["admin"]),
  deleteCompanyInfo
);

export default router;
