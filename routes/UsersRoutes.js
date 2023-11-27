import {
  createUser,
  getAll,
  getOne,
  updateUser,
  deleteUser,
  login,
} from "../controllers/UsersController.js";
import express from "express";
import uploadImage from "../middlewares/multer.js";
import authorized from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/getAll", getAll);
router.get("/:id", getOne);
router.post("/create", uploadImage.single("Picture"), createUser);
router.post("/login", login);
router.put("/:id", uploadImage.single("Picture"), updateUser);
router.delete("/:id", deleteUser);

export default router;
