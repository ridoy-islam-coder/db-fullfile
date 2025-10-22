import express from "express";
import { AdminEmail, alldatapercentage, codeverify,   deleteUserController,   forgetPassword, GetAllProfile, getAllProxysetController, getNewUsersLast10Days, GetProfileData, loginUser, ProfileUpdate, ProxysetController, registerUser, Searchbar, updateUserController, UserList,  } from "./user.controller";
import { auth, isAdmin } from './../../middleware/auth.middleware';





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

router.get("/alldata-percentage/:userId",auth, alldatapercentage);








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

// User List with Pagination
router.get("/pagenationlist/:pageNo/:perPage/:searchKeyword",auth,isAdmin, UserList);
// New Users in Last 10 Days
router.get("/new-user-last",auth,isAdmin, getNewUsersLast10Days);


// Update User by Admin
router.put("/updateUser/:id",auth,isAdmin,updateUserController)

// Delete User by Admin
router.delete("/deleteUser/:id",auth,isAdmin,deleteUserController)










export const userRoutes = router;