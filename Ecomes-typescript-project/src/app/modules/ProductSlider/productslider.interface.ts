import { Document, Types } from "mongoose";
import { IPRODUCT } from "../Product/product.interface";




export interface IPRODUCTSLIDER extends Document{
    title: string;
    des: string;
    price: string;
    img: string;
    productID: IPRODUCT | Types.ObjectId;  // ObjectId বা BRANDID রেফারেন্স
    createdAt: Date;
    updatedAt: Date;
}

