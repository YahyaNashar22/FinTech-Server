// Import the controller functions

import express from "express";

import {
  CreatTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransactionById,
  deleteTransactionById,
} from "../controllers/TransactionController.js";
import { authorized, checkRole } from "../middlewares/auth.js";

const router = express.Router();

// Use the functions in your routes or wherever needed
router.post("/create", CreatTransaction);
router.get("/read", getAllTransactions);
router.get("/read/:id", getTransactionById);
router.put(
  "/update/:id",
  authorized,
  checkRole(["admin", "manager"]),
  updateTransactionById
);
router.delete(
  "/delete/:id",
  authorized,
  checkRole(["admin", "manager"]),
  deleteTransactionById
);
router.get("/expense", getExpenses);
export default router;
