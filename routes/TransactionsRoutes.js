// Import the controller functions

import express from "express";

import {
  CreateTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransactionById,
  deleteTransactionById,
  getExpenses,
  getBarChartData,
getLineChartData,
getIncomeAreaChartData,
getWeeklyBarChartData
} from "../controllers/TransactionController.js";
import { authorized, checkRole } from "../middlewares/auth.js";

const router = express.Router();

// Use the functions in your routes or wherever needed
router.post("/create", CreateTransaction);
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

router.get('/IncomeAreaChart',getIncomeAreaChartData)
router.get('/byweek',getWeeklyBarChartData)

export default router;
