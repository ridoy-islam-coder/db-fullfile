import { Request, Response } from "express";
import Stripe from "stripe";
import { PaymentCard, Price, Subscription } from "./paymentcard.model";

const stripe = new Stripe(process.env.STRIPE_API_KEY || "");

// Add Payment Card
export const addPaymentCard = async (req: Request, res: Response) => {
  try {
    const { userId, token } = req.body;

    if (!userId || !token) {
      return res.status(400).json({ 
        success: false, 
        message: "userId and token required" 
      });
    }

    // Check if user already has a Stripe customer
    let customer;
    const existingCard = await PaymentCard.findOne({ userId });

    if (existingCard) {
      customer = { id: existingCard.stripeCustomerId };
    } else {
      // Create new Stripe customer
      customer = await stripe.customers.create({
        metadata: { userId: userId.toString() },
      });
    }

    // Create payment method from token
    const paymentMethod = await stripe.paymentMethods.create({
      type: "card",
      card: { token },
    });

    // Attach payment method to customer
    await stripe.paymentMethods.attach(paymentMethod.id, {
      customer: customer.id,
    });

    // Get card details
    const cardData = paymentMethod.card;

    // Save to database
    const paymentCard = await PaymentCard.create({
      userId,
      stripeCustomerId: customer.id,
      stripePaymentMethodId: paymentMethod.id,
      cardBrand: cardData?.brand || "unknown",
      last4: cardData?.last4 || "",
      expiryMonth: cardData?.exp_month || 0,
      expiryYear: cardData?.exp_year || 0,
      isDefault: true,
    });

    res.status(201).json({
      success: true,
      message: "Card added successfully",
      data: paymentCard,
    });
  } catch (error: any) {
    console.error("Add Payment Card Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to add payment card",
    });
  }
};
// Get user's payment cards
export const getUserPaymentCards = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ 
        success: false, 
        message: "userId required" 
      });
    }

    const cards = await PaymentCard.find({ userId }).select(
      "cardBrand last4 expiryMonth expiryYear isDefault"
    );

    res.json({
      success: true,
      data: cards,
      count: cards.length,
    });
  } catch (error: any) {
    console.error("Get Payment Cards Error:", error);
    res.status(500).json({ 
      success: false, 
      message: error.message || "Failed to fetch cards" 
    });
  }
};


// Delete payment card
export const deletePaymentCard = async (req: Request, res: Response) => {
  try {
    const { cardId } = req.params;

    if (!cardId) {
      return res.status(400).json({ 
        success: false, 
        message: "cardId required" 
      });
    }

    const card = await PaymentCard.findById(cardId);
    if (!card) {
      return res.status(404).json({ 
        success: false, 
        message: "Card not found" 
      });
    }

    // Detach from Stripe
    await stripe.paymentMethods.detach(card.stripePaymentMethodId);

    // Delete from database
    await PaymentCard.findByIdAndDelete(cardId);

    res.json({ 
      success: true, 
      message: "Card deleted successfully" 
    });
  } catch (error: any) {
    console.error("Delete Payment Card Error:", error);
    res.status(500).json({ 
      success: false, 
      message: error.message || "Failed to delete card" 
    });
  }
};






























// Create subscription
export const createSubscription = async (req: Request, res: Response) => {
  try {
    const { userId, planId, paymentMethodId } = req.body;

    console.log(`Received paymentMethodId: ${paymentMethodId} UserId: ${userId}`);

    if (!userId || !planId || !paymentMethodId) {
      return res.status(400).json({ 
        success: false, 
        message: "userId, planId, paymentMethodId required" 
      });
    }

    // Get price from database
    const price = await Price.findOne({ planId });
    if (!price) {
      return res.status(404).json({ 
        success: false, 
        message: "Plan not found" 
      });
    }

    // For testing, don't create Stripe subscription, just save in database
    const savedSubscription = await Subscription.create({
      userId,
      stripeSubscriptionId: `test_${planId}_${Date.now()}`, // Placeholder
      stripePriceId: price.priceId,
      planId,
      status: "active",
      currentPeriodStart: new Date(),
      currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    });

    res.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: savedSubscription,
    });
    return;
  } catch (error: any) {
    console.error("Create Subscription Error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to create subscription",
    });
  }
};














































// Get user subscription
export const getUserSubscription = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ 
        success: false, 
        message: "userId required" 
      });
    }

    const subscription = await Subscription.findOne({ userId });

    if (!subscription) {
      return res.json({
        success: true,
        data: null,
        message: "No active subscription",
      });
    }

    res.json({
      success: true,
      data: subscription,
    });
  } catch (error: any) {
    console.error("Get Subscription Error:", error);
    res.status(500).json({ 
      success: false, 
      message: error.message || "Failed to fetch subscription" 
    });
  }
};