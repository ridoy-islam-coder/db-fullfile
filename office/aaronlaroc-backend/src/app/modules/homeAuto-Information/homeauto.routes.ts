
import express from "express";

import { auth } from './../../middleware/auth.middleware';

import { HomeAutoUpdate } from "./homeauto.controller";






const router = express.Router();

// // create Financial Information 
// router.post("/CreateHomeAuto",auth,HomeAutoUpdate)
// //update Medical Information
// router.post("/UpdateHomeAuto",auth,HomeAutoUpdate)




//HomeAuto Information
router.post("/UpdateHomeAuto",auth,HomeAutoUpdate)


















export const homeautoRoutes = router;