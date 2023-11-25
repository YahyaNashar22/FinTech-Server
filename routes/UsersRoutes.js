import {
  createUser,
  getAll,
  getOne,
  updateUser,
  deleteUser,
} from "../controllers/UsersController.js";
import express from "express";
import uploadImage from "../middlewares/multer.js";

const router = express.Router();

router.get("/getAll", getAll);
router.get("/:id", getOne);
router.post("/create", uploadImage.single("image"), createUser);
router.put("/:id", uploadImage.single("image"), updateUser);
router.delete("/:id", deleteUser);

export default router;
