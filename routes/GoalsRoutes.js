import {
    createGoal,
    getAllGoals,
    getOneGoal,
    deleteGoal,
    updateGoal
}from '../controllers/GoalsController.js'

import express from "express";

const router = express.Router();

router.post("/create", createGoal);

router.get("/getAll", getAllGoals);

router.get("/:id", getOneGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

export default router;
