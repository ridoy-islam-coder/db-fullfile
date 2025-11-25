import express from "express";

import { auth } from "../../middleware/auth.middleware";
import { creatsubscriptionplan, getsubscriptionplan } from "./subscription.controller";





const router = express.Router();

// add-plan
router.post("/add-plan",creatsubscriptionplan)

// get-plan
router.get("/get-plan",getsubscriptionplan)




export const subscriptionsRoutes = router;