import { Document, Types } from "mongoose";


export interface CATEGORYID{
    _id: string;
    categoryName: string;
    categoryImg: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface BRANDID{
    _id: string;
    brandName: string;  
    brandImg: string;
    createdAt: Date;
    updatedAt: Date;
}


export interface IPRODUCT extends Document{
    title: string;
    shortDes: string;
    price: string;
    discount: boolean;
    discountPrice: string;
    star: string;
    Image: string;
    stock: boolean;
    remark: string;
    categoryID: CATEGORYID | Types.ObjectId;  // ObjectId বা CATEGORYID রেফারেন্স
    brandID: BRANDID | Types.ObjectId;  // ObjectId বা BRANDID রেফারেন্স
    createdAt: Date;
    updatedAt: Date;
}

