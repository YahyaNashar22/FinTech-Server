import {
  createUser,
  getAll,
  updateUser,
} from "../controllers/UsersController.js";
import express from "express";

const router = express.Router();

router.post("/create", createUser);
router.get("/getAll", getAll);
router.post("/update", updateUser);

export default router;
