// Import the controller functions

import express from "express";

import {
  CreatTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransactionById,
  deleteTransactionById,
  getExpenses,
  getBarChartData,
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
// router.get("/income", getIncomeAndExpenses);
// router.get('/line-chart-data', getLineChartData);
router.get('/bymonth',  getBarChartData );
router.get('/LineChart',getLineChartData)
// router.get('/byLine',getExpenseForLineChart)



export default router;
