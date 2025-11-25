import express from "express";

import { auth } from "../../middleware/auth.middleware";
import { addpalndatails, creatsubscriptionplan, getsubscriptionplan } from "./subscription.controller";





const router = express.Router();

// add-plan
router.post("/add-plan",creatsubscriptionplan)

// get-plan
router.get("/get-plan",auth,getsubscriptionplan)



// add-plan
router.post("/plan-details",auth,addpalndatails)




export const subscriptionsRoutes = router;