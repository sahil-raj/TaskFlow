import express from "express";
import userRoutes from "./user_routes";
import taskRoutes from "./task_routes";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);

export default router;
