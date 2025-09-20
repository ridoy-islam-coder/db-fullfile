import { User } from "./user.model";
import bcrypt from "bcryptjs";
 import jwt from "jsonwebtoken";
import { config } from './../../config/index';
import { NextFunction } from "express";


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
