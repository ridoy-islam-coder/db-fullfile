import { Document } from "mongoose";

export interface ICATEGORY extends Document{
    categoryName: string;
    categoryImg: string;
    createdAt: Date;
    updatedAt: Date;
}

