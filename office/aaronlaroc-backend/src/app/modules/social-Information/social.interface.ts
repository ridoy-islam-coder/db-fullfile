import { Types } from "mongoose";
import { IUser } from "../auth/user.interface";



export interface ISocialInfo extends Document {
  userID: IUser | Types.ObjectId;
  socialMedia?: string;       // Social media info/link
  website?: string;   
  socialInfoPercentage:number; // Social information completeness percentage
  streamingService?: string;  // Streaming service name
}