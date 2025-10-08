import express from "express";
import { followinguser, followUserController, GetAllProfile, getAllProxysetController, GetProfileData, loginUser, ProfileUpdate, ProxysetController, registerUser, Searchbar, unfollowUserController } from "./user.controller";
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

// Get All User Profile
router.post("/Searchbar/:searchTerm",auth,Searchbar)

// follo user
router.post("/follow/:followedUserId",auth,followUserController)


// unfollo user
router.post("/unfollow/:followedUserId",auth,unfollowUserController)
// get following user
router.get("/following",auth,followinguser)










//admin routes

// admin Registration 
router.post("/adminregisterUser",registerUser)

// admin  Login
router.post("/adminlogin",loginUser)


// admin  Login
router.post("/adminlogin",loginUser)













// proxyset user
router.post("/proxyset/:proxysetId",auth,ProxysetController)
router.get("/getAllProxyset/:id",auth,getAllProxysetController)







export const userRoutes = router;