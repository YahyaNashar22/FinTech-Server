import {
  createUser,
  getAll,
  getOne,
  updateUser,
} from "../controllers/UsersController.js";
import express from "express";

const router = express.Router();

router.get("/getAll", getAll);
router.get("/:id", getOne);
router.post("/create", createUser);
router.post("/update", updateUser);

export default router;
