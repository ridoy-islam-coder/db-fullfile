

import express from "express";

import { auth } from './../../middleware/auth.middleware';

import { SocialInformation } from "./social.controller";





const router = express.Router();

// create Financial Information 
router.post("/CreateFinancial",auth,SocialInformation)
router.post("/UpdateFinancial",auth,SocialInformation)




















export const financialRoutes = router;