import express from "express";

const router = express.Router();

router.get("/test", (_req, res) => {
  res.send("Welcome to the API");
});

export default router;
