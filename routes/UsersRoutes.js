import { createUser, getUsers } from "../controllers/UsersController.js";
import express from "express";
const router = express.Router();

router.post("/create", createUser);
router.get("/getAll", getUsers);

export default router;
