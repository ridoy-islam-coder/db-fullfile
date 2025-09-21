import { Document, Types } from "mongoose";
import { IUser } from "../auth/user.interface";

export interface MEDICAL extends Document{
     healthInsurance: string;
     supplementalInsurance: string;
     medications: string;
     knownAilments: string;
    userID: IUser | Types.ObjectId; 
    createdAt: Date;
    updatedAt: Date;
}
