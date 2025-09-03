import { Types } from "mongoose";
import { IPRODUCT } from "../Product/product.interface";
import { IUser } from "../auth/user.interface";

export interface IWISHLISTE extends Document{
    
    productID: IPRODUCT | Types.ObjectId;  // ObjectId বা BRANDID রেফারেন্স
    userID: IUser | Types.ObjectId;  // ObjectId বা BRANDID রেফারেন্স
    createdAt: Date;
    updatedAt: Date;
}

