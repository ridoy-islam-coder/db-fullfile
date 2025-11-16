
import { model, Schema } from "mongoose";
import { ISubscriptions } from "./subscriptions.interface";




const subscriptionsSchema = new Schema<ISubscriptions>(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    stripeCustomerId: {
      type: String,
      required: true,
    },

    stripeSubscriptionId: {
      type: String,
      required: true,
    },

    stripePriceId: {
      type: String,
      required: true,
    },

    planName: { type: String, required: true },

    amount: { type: Number, required: true },

    interval: { type: String, enum: ["month", "year"], required: true },

    status: {
      type: String,
      enum: [
        "active",
        "canceled",
        "incomplete",
        "past_due",
        "unpaid",
        "trialing"
      ],
      default: "active",
    },

    currentPeriodStart: { type: Date },
    currentPeriodEnd: { type: Date },
  },
  { timestamps: true, versionKey: false }
);

export const subscriptionsModel = model<ISubscriptions>("subscriptions", subscriptionsSchema);