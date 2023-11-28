import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/CategoriesController.js";
import { authorized, checkRole } from "../middlewares/auth.js";
import express from "express";

const router = express.Router();

router.get("/all", getAllCategories); // Route To get all the categories

router.post("/create", createCategory); // Route To create a category

router.put("/update/:id", updateCategory); // Route To update a category

router.delete(
  "/delete/:id",
  authorized,
  checkRole(["admin", "manager"]),
  deleteCategory
); // Route To delete a category

export default router;
