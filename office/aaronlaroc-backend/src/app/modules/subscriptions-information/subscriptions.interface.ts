
import { Types } from "mongoose";






export interface ISubscriptions {
  _id?: Types.ObjectId;

  userID: Types.ObjectId;

  stripeCustomerId: string;

  stripeSubscriptionId: string;

  stripePriceId: string;

  planName: string;

  amount: number;

  interval: "month" | "year";

  status:
    | "active"
    | "canceled"
    | "incomplete"
    | "past_due"
    | "unpaid"
    | "trialing";

  currentPeriodStart?: Date;
  currentPeriodEnd?: Date;

  createdAt?: Date;
  updatedAt?: Date;
}