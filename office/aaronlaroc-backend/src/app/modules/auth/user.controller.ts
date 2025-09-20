import { NextFunction, Request, Response } from "express";
import { existingUser, LoginInUser } from "./user.service";




export const registerUser = async (req:Request, res:Response, next:NextFunction) => {

    try{
      const { username, email, password } = req.body;

      if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

     const user = await existingUser(username, email, password);

        return res.status(201).json({ message: "User registered successfully", user:{
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
          
        } });
    }catch(error){
        next(error);
    }



}





export const loginUser = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const { user,token} = await LoginInUser(email, password);

        return res.status(201).json({ message: "User logged in successfully" ,user:{
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
          
        }, token });
    }catch(error){
        next(error);
    }
}   