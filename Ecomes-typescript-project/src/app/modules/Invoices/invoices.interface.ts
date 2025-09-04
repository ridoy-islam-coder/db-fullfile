import { Types } from "mongoose";
import { IUser } from "../auth/user.interface";

export interface INVOIES extends Document{
    userID: IUser | Types.ObjectId;  
    payable: string;
    cus_details: string;
    ship_details: string;
    tran_id: string;
    val_id: string;
    payment_status: string;
    delivery_status: string;
    total: string;
    vat: string;
    createdAt: Date;
    updatedAt: Date;
}
