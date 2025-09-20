import { Document } from "mongoose";

export interface FINANCIAL extends Document{
  bankAccount: string;
  retirementAccount: string;
  currentAssets: string;
  debt: string;
  createdAt: Date;
  updatedAt: Date;
}
