// Import the controller functions

import express from "express";

import {
    CreatNotification,
  getAllNotifications,
  updateNotificationById,
  deleteNotificationById,
} from "../controllers/NotificationsController.js";

const router = express.Router();

// Use the functions in your routes or wherever needed
router.post("/create",CreatNotification);
router.get("/read", getAllNotifications);
router.put("/update/:id", updateNotificationById);
router.delete("/delete/:id", deleteNotificationById);

export default router;