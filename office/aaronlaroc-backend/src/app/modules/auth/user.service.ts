import { User } from "./user.model";
import bcrypt from "bcryptjs";
 import jwt from "jsonwebtoken";
import { config } from './../../config/index';
import { NextFunction, Request } from "express";

// Extend Express Request type to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: {
        _id?: string;
        [key: string]: any;
      };
    }
  }
}


 export const existingUser=async (phoneNumber: string, email: string, password: string) => {
    // Check if user already exists
    const user = await User.findOne({ $or: [{ phoneNumber }, { email }] });
    if (user) {
        throw new Error("User already exists");
    }

    const hsedpassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ phoneNumber, email, password:hsedpassword });
    await newUser.save();

    return newUser;

}



export const LoginInUser = async (email: string, password: string) => {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }

// Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid password");
    }

    const token = jwt.sign(
        { userId: user._id, role: user.role },
        config.jwt_secret as string, { expiresIn: "24h" }
    );

    return {
       user,token
    };
}




export const getprofileService =async (req:Request) => {
  try {

    let user_id=req.user?.id;
    let data=await User.findOne({"_id":user_id})
    return ({status:"success",message:"User profile successfully",data:data})
  } catch (error) {
    return {status:'failed', data: error};
  }
}





export const profileupdateService =async (req:Request) => {
  try {

        let reqBody=req.body;
        let user_id=req.user?.id;
       let data= await User.updateOne({"_id":user_id},reqBody)
        return ({status:"success",Message:"User Update successfully",data:data})
  } catch (error) {
    return {status:'failed', data: error};
  }
}





export const getallUsers = async () => {

  try {

        const users = await User.find();
        return ({status:"success",Message:"Get All User Data successfully",data:users})
  } catch (error) {
    return {status:'failed', data: error};
  }

}
