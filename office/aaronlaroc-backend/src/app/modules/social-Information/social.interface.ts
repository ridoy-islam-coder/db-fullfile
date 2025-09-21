import { Types } from "mongoose";
import { IUser } from "../auth/user.interface";



export interface ISocialInfo extends Document {
  userId: IUser | Types.ObjectId;
  socialMedia?: string;       // Social media info/link
  website?: string;           // Website link
  streamingService?: string;  // Streaming service name
}