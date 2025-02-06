import express from "express";
import userRoutes from "./users";
import taskRoutes from "./tasks";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/tasks", taskRoutes);

export default router;
