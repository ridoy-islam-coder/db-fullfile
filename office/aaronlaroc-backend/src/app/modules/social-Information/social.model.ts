import { model, Schema } from "mongoose";
import { ISocialInfo } from "./social.interface";

const SocialInfoSchema = new Schema<ISocialInfo>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    socialMedia: {
      type: String,
      trim: true,
      default: undefined,
    },
    website: {
      type: String,
      trim: true,
      default: undefined,
    },
    streamingService: {
      type: String,
      trim: true,
      default: undefined,
    },
  },
  { timestamps: true }
);

export const SocialInfoModel = model<ISocialInfo>("SocialInfo", SocialInfoSchema);