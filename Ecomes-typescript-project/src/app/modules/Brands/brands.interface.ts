import { Document } from "mongoose";

export interface IBRAND extends Document{
    brandName: string;
    brandImg: string;
    createdAt: Date;
    updatedAt: Date;
}

