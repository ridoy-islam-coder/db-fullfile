import express from "express";
import { emailverify, getProfile, loginUser, registerUser, updateProfile } from "./user.controller";
import { auth } from "../../middleware/auth.middleware";





const router = express.Router();


router.post("/registerUser",registerUser)
router.post("/login",loginUser)
router.get("/profile", auth, getProfile);
router.put("/updateprofile", auth, updateProfile);
router.get("/emailverify/:email",  emailverify);


export const userRoutes = router;