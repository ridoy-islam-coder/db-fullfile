import express from "express";
import { GetAllProfile, GetProfileData, loginUser, ProfileUpdate, registerUser } from "./user.controller";
import { auth } from './../../middleware/auth.middleware';





const router = express.Router();

// User Registration 
router.post("/registerUser",registerUser)

// User  Login
router.post("/login",loginUser)

// User ProfileDetails
router.get("/ProfileDetails",auth,GetProfileData)

// User Profile Update
router.put("/ProfileUpdate",auth,ProfileUpdate)

// Get All User Profile
router.get("/GetAllProfile",auth,GetAllProfile)



















export const userRoutes = router;