import { Document } from "mongoose";

export interface IBook extends Document{
    title: string;
    description: string;
    subdes: string;
    img: string;
    link: string;
    createdAt: Date;
    updatedAt: Date;
}

