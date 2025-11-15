import express from "express";
import { auth } from "../../middleware/auth.middleware";
import { ReportController } from "./report.controller";






const router = express.Router();

// create Financial Information 
router.post("/create-report",auth,ReportController)



















export const ReportRoutes = router;