import express from "express";

import { auth } from './../../middleware/auth.middleware';
import { CreateFinancial } from "./financial.controller";





const router = express.Router();

// create Financial Information 
router.post("/CreateFinancial",auth,CreateFinancial)





















export const financialRoutes = router;