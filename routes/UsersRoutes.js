import {
  createUser,
  getAll,
  getOne,
  updateUser,
  deleteUser,
} from "../controllers/UsersController.js";
import express from "express";

const router = express.Router();

router.get("/getAll", getAll);
router.get("/:id", getOne);
router.post("/create", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
