import { NextFunction, Request, Response } from "express";
import { existingUser, getUserProfile, LoginInUser, updateUserProfile, sendEmailVerification, codeVerification } from "./user.service";





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







export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // @ts-ignore
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await getUserProfile(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User profile fetched successfully",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};



export const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // @ts-ignore
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { username, email, phone, imgUrl } = req.body;

    const updatedUser = await updateUserProfile(userId, { username, email, phone, imgUrl: imgUrl });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user: {
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
        imgUrl: updatedUser.imgUrl,
        phone: updatedUser.phone,
        role: updatedUser.role,
      },
    });
  } catch (error) {
    next(error);
  }
};





export const emailverify = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.params;

    const result = await sendEmailVerification(email);

    return res.json({ status: "success", message: result.message });
  } catch (error) {
    next(error);
  }
};



export const codeverify = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and otp are required" });
    }

    const result = await codeVerification(email, otp);
    console.log(result);

    return res.json({ status: "success", message: result.message });
  } catch (error) {
    next(error);
  }
};