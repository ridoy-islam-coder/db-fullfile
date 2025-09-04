import { Types } from "mongoose";
import { IUser } from "../auth/user.interface";

export interface IPROFILE extends Document{
    userID: IUser | Types.ObjectId;  
    cus_add: string;
    cus_city: string;
    cus_country: string;
    cus_fax: string;
    cus_name: string;
    cus_phone: string;
    cus_postcode: string;
    cus_state: string;
    ship_add: string;
    ship_city: string;
    ship_country: string;
    ship_name: string;
    ship_phone: string;
    ship_postcode: string;
    ship_state: string;
    createdAt: Date;
    updatedAt: Date;
}
