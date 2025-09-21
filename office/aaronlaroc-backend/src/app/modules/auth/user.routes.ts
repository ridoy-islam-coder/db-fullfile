import express from "express";
import { GetAllProfile, GetProfileData, loginUser, ProfileUpdate, registerUser } from "./user.controller";
import { auth } from './../../middleware/auth.middleware';





const router = express.Router();


router.post("/registerUser",registerUser)
router.post("/login",loginUser)
router.get("/ProfileData",auth,GetProfileData)
router.get("/ProfileDetails",auth,GetProfileData)
router.put("/ProfileUpdate",auth,ProfileUpdate)
router.get("/GetAllProfile",auth,GetAllProfile)



















export const userRoutes = router;