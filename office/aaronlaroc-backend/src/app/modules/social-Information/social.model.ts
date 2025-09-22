import { model, Schema } from "mongoose";
import { ISocialInfo } from "./social.interface";

const SocialInfoSchema = new Schema<ISocialInfo>(
  {
    userID: {
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
  { timestamps: true, versionKey: false }
);

export const SocialInfoModel = model<ISocialInfo>("socialInfo", SocialInfoSchema);