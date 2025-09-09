import { Types } from "mongoose";
import { IUser } from "../auth/user.interface";
import { IPRODUCT } from "../Product/product.interface";

export interface ICartlist extends Document{
    
    productID: IPRODUCT | Types.ObjectId;  // ObjectId বা BRANDID রেফারেন্স
    userID: IUser | Types.ObjectId;  // ObjectId বা BRANDID রেফারেন্স
    color: string;
    qty: string;
    size: string;
    createdAt: Date;
    updatedAt: Date;
}
