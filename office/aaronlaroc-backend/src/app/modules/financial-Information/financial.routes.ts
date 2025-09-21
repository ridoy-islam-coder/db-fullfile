import express from "express";

import { auth } from './../../middleware/auth.middleware';
import { UpdateFinancial } from "./financial.controller";





const router = express.Router();

// create Financial Information 
router.post("/CreateFinancial",auth,UpdateFinancial)
router.post("/UpdateFinancial",auth,UpdateFinancial)




















export const financialRoutes = router;