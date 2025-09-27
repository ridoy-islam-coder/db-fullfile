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





export const Searchbarservice = async (searchTerm:string) => {

  try {
 
    const users = await User.find({
      $or: [
        { email: { $regex: searchTerm, $options: 'i' } },  // Case-insensitive search for email
        { phoneNumber: { $regex: searchTerm, $options: 'i' } },  
      ]
    },{_id: 0,role:0,password:0,createdAt:0,updatedAt:0,__v:0}); // Case-insensitive search for phoneNumber});

    return {
      status: "success",
      message: "Search results successfully fetched",
      data: users
    };
  } catch (error) {
    return {status:'failed', data: error};
  }

}






export const followUserService = async (req: Request) => {
  try {
    const { userIdToFollow } = req.body;  
        console.log("userIdToFollow:", userIdToFollow);  
    const userId = req.user?.id;  

    // Find the user who is trying to follow
    const user = await User.findById(userId);

    if (!user) {
      return { status: 'failed', message: 'User not found' };
    }

    // Check if the user is already following the target user
    if (user.following.includes(userIdToFollow)) {
      return { status: 'failed', message: 'Already following this user' };
    }

    // Add the target user to the following list
    user.following.push(userIdToFollow);
   console.log('Following before update:', user.following);
await user.save();
console.log('Following after update:', user.following);

    return { status: 'success', message: 'User followed successfully', data: user };
  } catch (error) {
      return {status:'failed', data: error};
  }
};

