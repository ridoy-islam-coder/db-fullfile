
import express from "express";

import { auth } from './../../middleware/auth.middleware';
import { getEmergencyContact, UpdateMedical } from "./medical.controller";






const router = express.Router();

// create Financial Information 
router.post("/CreateMedical",auth,UpdateMedical)
//update Medical Information
router.post("/UpdateMedical",auth,UpdateMedical)
//get Medical Information
router.get("/getEmergencyContact/:userID",auth,getEmergencyContact)






















export const medicalRoutes = router;