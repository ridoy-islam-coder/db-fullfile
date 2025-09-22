

import express from "express";

import { auth } from './../../middleware/auth.middleware';

import { SocialInformation } from "./social.controller";





const router = express.Router();

// create Financial Information 
router.post("/CreateSocialInfo",auth,SocialInformation)
router.post("/UpdateSocialInfo",auth,SocialInformation)




















export const socialRoutes = router;