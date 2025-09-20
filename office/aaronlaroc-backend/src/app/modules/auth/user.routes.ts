import express from "express";
import { loginUser, registerUser } from "./user.controller";





const router = express.Router();


router.post("/registerUser",registerUser)
router.post("/login",loginUser)


export const userRoutes = router;