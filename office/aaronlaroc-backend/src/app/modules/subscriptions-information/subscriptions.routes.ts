import { Router } from "express";
import { createSubscription } from "./subscriptions.controller";

const router = Router();

// create subscription
router.post("/create", createSubscription);

export default router;