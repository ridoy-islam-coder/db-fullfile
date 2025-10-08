import express from "express";
import { AdminEmail, codeverify, followinguser, followUserController, forgetPassword, GetAllProfile, getAllProxysetController, GetProfileData, loginUser, ProfileUpdate, ProxysetController, registerUser, Searchbar, unfollowUserController } from "./user.controller";
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





// proxyset user
router.post("/proxyset/:proxysetId",auth,ProxysetController)
router.get("/getAllProxyset/:id",auth,getAllProxysetController)
















//admin routes

// admin Registration 
router.post("/adminregister",registerUser)

// admin  routes
router.post("/adminlogin",loginUser)


// admin  routes
router.post("/AdminEmail",AdminEmail)


// codeverify  routes
router.post("/codeverify",codeverify)




// codeverify  routes
router.post("/forgetPassword",forgetPassword)















export const userRoutes = router;