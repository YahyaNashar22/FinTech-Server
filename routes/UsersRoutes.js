import controllers from "../controllers/UsersController.cjs";
const { createUser, getUsers } = controllers;
import express from "express";
const router = express.Router();

router.post("/create", createUser);
router.get("/getAll", getUsers);

export default router;
