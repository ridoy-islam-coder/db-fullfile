import { Document } from "mongoose";

export interface ISMS extends Document{
    name: string;
    description: string;
    email: string;
    number: string;
    subject: string;
    createdAt: Date;
    updatedAt: Date;
}
