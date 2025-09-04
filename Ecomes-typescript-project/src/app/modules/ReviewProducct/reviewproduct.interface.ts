import { Types } from "mongoose";
import { IPRODUCT } from "../Product/product.interface";
import { IUser } from "../auth/user.interface";

export interface IPRODUCTSLIDER extends Document{
     userID: IUser | Types.ObjectId;  
     productID:IPRODUCT | Types.ObjectId;
     des: string;
     rating: string;
    createdAt: Date;
    updatedAt: Date;
}
