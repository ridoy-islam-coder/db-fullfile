import { Document, Types } from "mongoose";
import { IPRODUCT } from "../Product/product.interface";





export interface IPRODUCTDETAILLS extends Document{
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    Img6: string;
    img7: string;
    img8: String;
    des: string;
     size: string;
    color: string;  // ObjectId বা CATEGORYID রেফারেন্স
    productID: IPRODUCT | Types.ObjectId;  // ObjectId বা BRANDID রেফারেন্স
    createdAt: Date;
    updatedAt: Date;
}

