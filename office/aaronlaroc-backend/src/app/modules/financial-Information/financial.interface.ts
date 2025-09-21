import { Document, Types } from "mongoose";
import { IUser } from "../auth/user.interface";

export interface FINANCIAL extends Document{
  bankAccount: string;
  retirementAccount: string;
  currentAssets: string;
  debt: string;
  userID: IUser | Types.ObjectId; 
  createdAt: Date;
  updatedAt: Date;
}
