import express, { Request, Response, Router } from "express";
import User from "../models/user_model";

const router = express.Router();

//fetch routes

//get all users (no use right now)
router.get("/", async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json(e);
  }
});

//get user by id
router.get("/id/:id", async (_req: Request, res: Response) => {
  const userId = _req.params?.id;
  if (!userId || userId == "") {
    res.status(400).json({ message: "user id is required" });
  } else {
    try {
      const user = await User.findByPk(userId);
      if (!user) {
        res.status(400).json({ message: "user not found" });
      } else {
        res.status(200).json(user);
      }
    } catch (e) {
      res.status(500).json(e);
    }
  }
});

export default router;
