import { Document } from "mongoose";

export enum Role {
    USER = "user",
    ADMIN = "admin",
  
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
    password: string;
    imgUrl: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    
}