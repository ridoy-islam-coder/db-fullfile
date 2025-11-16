
import { model, Schema } from "mongoose";
import { ISubscriptions } from "./subscriptions.interface";


const subscriptionsSchema = new Schema<ISubscriptions>(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
   
  },
  { timestamps: true, versionKey: false }
);

export const subscriptionsModel = model<ISubscriptions>("subscriptions", subscriptionsSchema);