import express from "express";

import { auth } from './../../middleware/auth.middleware';
import { shareFinancial, UpdateFinancial } from "./financial.controller";





const router = express.Router();

// create Financial Information 
router.post("/CreateFinancial",auth,UpdateFinancial)
router.post("/UpdateFinancial",auth,UpdateFinancial)
router.get("/shareFinancial/:id",auth,shareFinancial)



















export const financialRoutes = router;