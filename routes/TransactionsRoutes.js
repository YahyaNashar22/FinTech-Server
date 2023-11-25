// Import the controller functions

import express from "express";

import {
  CreatTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransactionById,
  deleteTransactionById,
} from "../controllers/TransactionController.js";

const router = express.Router();

// Use the functions in your routes or wherever needed
router.post("/create",CreatTransaction);
router.get("/read", getAllTransactions);
router.get("/read/:id", getTransactionById);
router.put("/update/:id", updateTransactionById);
router.delete("/delete/:id", deleteTransactionById);

export default router;
