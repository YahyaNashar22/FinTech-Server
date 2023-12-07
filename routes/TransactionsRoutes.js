// Import the controller functions

import express from "express";

import {
  CreatTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransactionById,
  deleteTransactionById,
  getExpenses,
  getIncomeExpenseByYear,
  getLineChartData
} from "../controllers/TransactionController.js";
import { authorized, checkRole } from "../middlewares/auth.js";

const router = express.Router();

// Use the functions in your routes or wherever needed
router.post("/create", CreatTransaction);
router.get("/read", getAllTransactions);
router.get("/read/:id", getTransactionById);
router.put(
  "/update/:id",
  updateTransactionById
);
router.delete(
  "/delete/:id",
  deleteTransactionById
);
router.get("/expense", getExpenses);
router.get("/income", getIncomeExpenseByYear);
router.get('/line-chart-data', getLineChartData);

export default router;
