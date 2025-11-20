import mongoose from "mongoose";
import { Price } from "./app/modules/payment-card/paymentcard.model";
import { config } from "./app/config";

async function seedPrices() {
  await mongoose.connect(config.db_uri as string);

  const prices = [
    {
      planId: "free",
      name: "Free Plan",
      priceId: "price_free", // Use a placeholder or real Stripe price ID
      amount: 0,
      currency: "usd",
    },
    {
      planId: "flex",
      name: "Flex Plan",
      priceId: "price_flex",
      amount: 999, // $9.99
      currency: "usd",
    },
    {
      planId: "dedicated",
      name: "Dedicated Plan",
      priceId: "price_dedicated",
      amount: 1999, // $19.99
      currency: "usd",
    },
  ];

  for (const priceData of prices) {
    const existing = await Price.findOne({ planId: priceData.planId });
    if (!existing) {
      await Price.create(priceData);
      console.log(`Created price for ${priceData.planId}`);
    } else {
      console.log(`Price for ${priceData.planId} already exists`);
    }
  }

  console.log("Seeding completed");
  process.exit(0);
}

seedPrices().catch(console.error);