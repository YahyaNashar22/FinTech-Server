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

router.get("/getAll",
  // authorized, checkRole(["admin","financial manager"]), 
    getAll);
router.get("/:id", getOne);
router.post("/userlogout", authorized, userlogout);
router.post("/create", uploadImage.single("Picture"), createUser);
router.post("/login", login);
router.put("/:id", authorized, uploadImage.single("Picture"), updateUser);
router.delete("/:id", authorized, checkRole(["admin", "financial manager"]), deleteUser);

export default router;
