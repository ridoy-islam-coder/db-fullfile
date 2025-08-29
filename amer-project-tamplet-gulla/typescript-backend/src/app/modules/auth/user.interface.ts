import { Document } from "mongoose";

export enum Role {
    USER = "user",
    ADMIN = "admin",
  
}

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    
}