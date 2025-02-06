import express, { Request, Response } from "express";
import Task from "../models/Task";

const router = express.Router();

//fetch routes

//get all tasks
router.get("/", async (_req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json(e);
  }
});

//get task by task_id
router.get("/id/:id", async (_req: Request, res: Response) => {
  const taskId = _req.params?.id;
  if (!taskId || taskId == "") {
    res.status(400).json({ message: "task id is required" });
  } else {
    try {
      const task = await Task.findByPk(taskId);
      if (!task) {
        res.status(400).json({ message: "task not found" });
      } else {
        res.status(200).json(task);
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }
});

//get task by user_id (imp)
router.get("/user_id/:id", async (req: Request, res: Response) => {
  const userId = req.params?.id;
  if (!userId || userId == "") {
    res.status(400).json({ message: "user_id is required" });
  } else {
    try {
      const tasks = await Task.findAll({ where: { user_id: userId } });

      if (!tasks || tasks.length === 0) {
        res.status(404).json({ message: "No tasks found for this user" });
        return;
      }
      res.status(200).json(tasks);
    } catch (e) {
      res.status(500).json(e);
    }
  }
});

//create new task
router.post("/", async (req: Request, res: Response) => {
  try {
    //add check for user
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (e) {
    res.status(400).json(e);
  }
});

//delete
router.delete("/id/:id", async (req: Request, res: Response) => {
  const taskId = req.params?.id;
  if (!taskId || taskId == "") {
    res.status(400).json({ message: "task id is required" });
  } else {
    try {
      const task = await Task.findByPk(taskId);

      if (!task) {
        res.status(404).json({ message: "task not found with this id" });
        return;
      }

      await task?.destroy();
      res.status(200).json({ message: "task deleted" });
    } catch (e) {
      res.json(500).json(e);
    }
  }
});

//update task
router.put("/id/:id", async (req: Request, res: Response) => {
  const taskId = req.params?.id;
  if (!taskId || taskId == "") {
    res.status(400).json({ message: "task id is required" });
  } else {
    try {
      const task = await Task.findByPk(taskId);
      if (!task) {
        res.status(404).json({ message: "task not found" });
        return;
      }

      await Task.update(req.body, {
        where: {
          id: taskId,
        },
      });

      res.status(200).json({ message: "task updated" });
    } catch (e) {
      res.status(400).json(e);
    }
  }
});

export default router;
