import express from "express";
import { auth } from "../../middleware/auth.middleware";
import { ReportController, ReportCountController } from "./report.controller";






const router = express.Router();

// create Financial Information 
router.post("/create-report",auth,ReportController)

router.get("/total-reports",auth, ReportCountController);

















export const ReportRoutes = router;