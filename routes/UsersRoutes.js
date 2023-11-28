import {
  createUser,
  getAll,
  getOne,
  updateUser,
  deleteUser,
  login,
  userlogout,
} from "../controllers/UsersController.js";
import express from "express";
import uploadImage from "../middlewares/multer.js";
import { authorized, checkRole } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getAll", getAll);
router.get("/:id", getOne);
router.post("/userlogout", userlogout);
router.post("/create", uploadImage.single("Picture"), createUser);
router.post("/login", login);
router.put("/:id", uploadImage.single("Picture"), updateUser);
router.delete("/:id", authorized, checkRole(["admin", "manager"]), deleteUser);

export default router;
