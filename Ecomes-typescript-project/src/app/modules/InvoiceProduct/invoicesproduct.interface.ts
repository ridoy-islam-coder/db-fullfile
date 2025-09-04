import { Types } from "mongoose";
import { IUser } from "../auth/user.interface";
import { IPRODUCT } from "../Product/product.interface";
import { INVOIES } from "../Invoices/invoices.interface";

export interface INVOIESPRODUCT extends Document{
    userID: IUser | Types.ObjectId;  
    productID:IPRODUCT | Types.ObjectId;
    invoiceID:INVOIES | Types.ObjectId;
    qty: string;
    price: string;
    color: string;
    size: string;
    createdAt: Date;
    updatedAt: Date;
}
