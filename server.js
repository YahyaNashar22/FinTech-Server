import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";

import { connect, syncronise } from "./config/dbconnection.js";
dotenv.config();

import UserRoutes from "./routes/UsersRoutes.js";
import TransactionsRoutes from "./routes/TransactionsRoutes.js";
import CompanyRoutes from "./routes/CompanyRoutes.js";
import CategoriesRoutes from "./routes/CategoriesRoutes.js";
import NotificationRoutes from "./routes/NotificationsRoutes.js";
import GoalRouter from "./routes/GoalsRoutes.js";

import "./config/association.js";
import { authorized } from "./middlewares/auth.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000", // Allow only your frontend origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("User Connected");
  socket.on("send_message", (data) => {
    socket.emit("receive_message", data);
  });
  socket.on("disconnection", () => {
    socket.disconnect();
    console.log("bye bye!");
  });
});

app.use(cors(corsOptions));
app.use(express.json());
const staticDirectory = "./images";
app.use("/images", express.static(staticDirectory));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", UserRoutes);
app.use("/transactions", TransactionsRoutes);
app.use("/company", CompanyRoutes);
app.use("/categories", CategoriesRoutes);
app.use("/goals", GoalRouter);
app.use("/Notifications", NotificationRoutes);
app.get("/auth", authorized, (req, res) => {
  console.log("first");
  res.json({ userId: req.id });
});

server.listen(process.env.PORT, () => {
  setTimeout(connect, 7000);
  setTimeout(syncronise, 7000);
  console.log(`server is running on port ${process.env.PORT}`);
});
