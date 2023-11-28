import {
  createGoal,
  getAllGoals,
  getOneGoal,
  deleteGoal,
  updateGoal,
} from "../controllers/GoalsController.js";
import { authorized, checkRole } from "../middlewares/auth.js";

import express from "express";

const router = express.Router();

router.post("/create", authorized, checkRole(["admin", "manager"]), createGoal);

router.get("/getAll", getAllGoals);

router.get("/:id", getOneGoal);

router.put("/:id", authorized, checkRole(["admin", "manager"]), updateGoal);

router.delete("/:id", authorized, checkRole(["admin", "manager"]), deleteGoal);

export default router;
