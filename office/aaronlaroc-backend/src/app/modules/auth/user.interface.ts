import { Document, Types } from "mongoose";

export enum Role {
    USER = "user",
    ADMIN = "admin",
    CORPORATE = "corporate",
  
}

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    city: string;
    state: string;
    company: string;
    yearStarted: number;
    email: string;
    phoneNumber: string;
    otp: string;
    password: string;
    imgUrl: string;
    role: Role;
    followers: Types.ObjectId[];  
    proxysetId: Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
    
}