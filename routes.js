import express from "express";
import { Signup, Login, HitReq } from "./user-activities/auth.js";

const userRouter = express.Router();

// Signup Route
userRouter.post("/signup", Signup);

// Login Route
userRouter.post("/login", Login);

// HitReq Route (assuming :id is passed in params)
userRouter.get("/hit/:id", HitReq);

export default userRouter;
