
import express from "express";

import { auth } from './../../middleware/auth.middleware';
import { UpdateMedical } from "./medical.controller";
import { calculateMedicalDataCompleteness } from "./medical.service";






const router = express.Router();

// create Financial Information 
router.post("/CreateMedical",auth,UpdateMedical)
//update Medical Information
router.post("/UpdateMedical",auth,UpdateMedical)


router.post("/calculateMedicalDataCompleteness",auth,calculateMedicalDataCompleteness)























export const medicalRoutes = router;