// Import the controller functions

import express from "express";

import {
  createTransaction,
    getAllTransactions,
    getTransactionById,
    updateTransactionById,
    deleteTransactionById,
  } from '../controllers/TransactionController.js';
  


  const trasactionrouter = express.Router();

  // Use the functions in your routes or wherever needed
  app.post('/transactions/create', createTransaction);
  app.get('/transactions/read', getAllTransactions);
  app.get('/transactions/read/:id', getTransactionById);
  app.put('/transactions/update/:id', updateTransactionById);
  app.delete('/transactions/delete/:id', deleteTransactionById);
  


  
  
  export default trasactionrouter;
