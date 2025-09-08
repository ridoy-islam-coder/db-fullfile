
import { NextFunction, Request, Response } from "express";
import  jwt  from 'jsonwebtoken';
import { config } from "../config";
import { User, TokenBlacklist } from "../modules/auth/user.model";


export interface AuthenticatedRequest extends Request {
  user?:any
}



export const auth= async(req:AuthenticatedRequest, res:Response, next:NextFunction) => {
  try {
      const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

    // Check if token is blacklisted
    const blacklistedToken = await TokenBlacklist.findOne({ token });
    if (blacklistedToken) {
      return res.status(401).json({ message: "Token has been invalidated" });
    }

    const decoded = jwt.verify(token, config.jwt_secret as string)  as { userId: string, role: string };
    const user =await User.findById(decoded.userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = {
        id: user._id,
        role: user.role
    }
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
}



export const isAdmin = (req:AuthenticatedRequest, res:Response, next:NextFunction) => {
  if (req.user?.role !== "admin") {
   return res.status(403).json({ message: "Access denied. Admins only." });
  }
    next();
};