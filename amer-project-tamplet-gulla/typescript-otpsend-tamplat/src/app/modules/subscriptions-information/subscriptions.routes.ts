import express from "express";

import { auth } from "../../middleware/auth.middleware";
import { creatsubscriptionplan } from "./subscription.controller";





const router = express.Router();

// User registration
router.post("/add-plan",creatsubscriptionplan)




export const subscriptionsRoutes = router;