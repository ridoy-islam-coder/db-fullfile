import { User } from "./user.model";
import bcrypt from "bcryptjs";
 import jwt from "jsonwebtoken";
import { config } from './../../config/index';
import { SendEmail } from "../../../helpers/emailHelper";


 export const existingUser=async (username: string, email: string, password: string) => {
    // Check if user already exists
    const user = await User.findOne({ $or: [{ username }, { email }] });
    if (user) {
        throw new Error("User already exists");
    }

    const hsedpassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ username, email, password:hsedpassword });
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




export const getUserProfile = async (userId: string) => {
  return User.findById(userId).select("-password");
};



export const updateUserProfile = async (userId: string,updateData: { username?: string; email?: string; phone?: string; imgUrl?: string }
) => {
  return User.findByIdAndUpdate(userId, updateData, {new: true,runValidators: true,}).select("-password");
};

export const sendEmailVerification = async (email: string) => {
  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  // Generate OTP
  const code = Math.floor(100000 + Math.random() * 900000);

  // Send OTP via email
  const EmailTo = user.email;
  const EmailText = "Your Code is " + code;
  const EmailSubject = "Task Manager Verification Code";

  await SendEmail(EmailTo, EmailText, EmailSubject);

  // Update OTP in user document
  await User.updateOne({ email }, { otp: code });

  return { message: "Verification code sent successfully" };
};




export const codeVerification = async (email: string, code: number) => {
  // Check if user exists
  const user = await User.findOne({ email:email, otp: code.toString() });
  if (!user) {
    throw new Error("User not found");
  }

  if (user.otp !== code.toString()) {
    throw new Error("Invalid code");
  }

  return { message: "Code verified successfully" };
};