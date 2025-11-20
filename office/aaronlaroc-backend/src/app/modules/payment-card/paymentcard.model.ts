import mongoose, { Schema, Document } from "mongoose";

export interface IPaymentCard extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  stripeCustomerId: string;
  stripePaymentMethodId: string;
  cardBrand: string;
  last4: string;
  expiryMonth: number;
  expiryYear: number;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPrice extends Document {
  planId: string;      // e.g. "free", "flex", "dedicated"
  name: string;        // Display name
  priceId: string;     // Stripe Price ID
  description?: string;
  amount: number;      // Amount in cents
  currency: string;    // e.g. "usd"
}

export interface ISubscription extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  stripeSubscriptionId: string;
  stripePriceId: string;
  planId: string;                    // "free", "flex", "dedicated"
  status: "active" | "canceled" | "past_due" | "trialing";
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  canceledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentCardSchema = new Schema<IPaymentCard>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    stripeCustomerId: { type: String, required: true },
    stripePaymentMethodId: { type: String, required: true, unique: true },
    cardBrand: { type: String, required: true },
    last4: { type: String, required: true },
    expiryMonth: { type: Number, required: true },
    expiryYear: { type: Number, required: true },
    isDefault: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const PriceSchema = new Schema<IPrice>(
  {
    planId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    priceId: { type: String, required: true, unique: true },
    description: { type: String },
    amount: { type: Number, required: true },
    currency: { type: String, default: "usd" },
  },
  { timestamps: true }
);

const SubscriptionSchema = new Schema<ISubscription>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    stripeSubscriptionId: { type: String, required: true, unique: true },
    stripePriceId: { type: String, required: true },
    planId: { type: String, required: true },
    status: { 
      type: String, 
      enum: ["active", "canceled", "past_due", "trialing"],
      default: "trialing"
    },
    currentPeriodStart: { type: Date, required: true },
    currentPeriodEnd: { type: Date, required: true },
    canceledAt: { type: Date },
  },
  { timestamps: true }
);

export const PaymentCard = mongoose.model<IPaymentCard>("PaymentCard", PaymentCardSchema);
export const Price = mongoose.model<IPrice>("Price", PriceSchema);
export const Subscription = mongoose.model<ISubscription>("Subscription", SubscriptionSchema);