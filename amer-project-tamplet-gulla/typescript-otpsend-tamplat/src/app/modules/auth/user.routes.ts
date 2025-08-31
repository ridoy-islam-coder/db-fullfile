import express from "express";
import { codeverify, emailverify, getProfile, loginUser, registerUser, updateProfile } from "./user.controller";
import { auth } from "../../middleware/auth.middleware";





const router = express.Router();

// User registration
router.post("/registerUser",registerUser)
// User login
router.post("/login",loginUser)
// Get user profile
router.get("/profile", auth, getProfile);
// Update user profile
router.put("/updateprofile", auth, updateProfile);
// Email verification
router.get("/emailverify/:email",  emailverify);
// Code verification
router.post("/codeVerification",codeverify)
// Forget password
router.post("/forgetpassword",codeverify)



export const userRoutes = router;