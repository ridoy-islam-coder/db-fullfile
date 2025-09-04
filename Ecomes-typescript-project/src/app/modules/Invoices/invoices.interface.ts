import { Types } from "mongoose";
import { IUser } from "../auth/user.interface";

export interface INVOIES extends Document{
    userID: IUser | Types.ObjectId;  
    payable: string;
    cus_details: string;
    createdAt: Date;
    updatedAt: Date;
}
