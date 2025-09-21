
import express from "express";

import { auth } from './../../middleware/auth.middleware';
import { UpdateMedical } from "./medical.controller";






const router = express.Router();

// create Financial Information 
router.post("/CreateMedical",auth,UpdateMedical)
//update Medical Information
router.post("/UpdateMedical",auth,UpdateMedical)




















export const medicalRoutes = router;