import express from "express";
import {
  addPaymentCard,
  getUserPaymentCards,
  deletePaymentCard,
  createSubscription,
  getUserSubscription,
} from "./paymentcard.controller";
import { auth } from "../../middleware/auth.middleware";


const router = express.Router();

// Payment Card Routes
router.post("/add-card", auth, addPaymentCard);
router.get("/cards/:userId", auth, getUserPaymentCards);
router.delete("/cards/:cardId", auth, deletePaymentCard);

// Subscription Routes
router.post("/subscription/create", auth, createSubscription);
router.get("/subscription/:userId", auth, getUserSubscription);

export const PaymentCardRoutes = router;