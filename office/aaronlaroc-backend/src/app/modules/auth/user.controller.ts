import { NextFunction, Request, Response } from "express";
import { adminEmailService, codeVerification, existingUser,  getallUsers, getprofileService, getProxysetData, getUserFullProfileService, getUserList, LoginInUser, profileupdateService, ProxysetService, Searchbarservice,  updatePassword } from "./user.service";






export const registerUser = async (req:Request, res:Response, next:NextFunction) => {

    try{
      const { phoneNumber, email, password } = req.body;

      if (!phoneNumber || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
      }

     const user = await existingUser(phoneNumber, email, password);

        return res.status(201).json({ message: "User registered successfully", user:{
            _id: user._id,
            phoneNumber: user.phoneNumber,
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
            username: user.phoneNumber,
            email: user.email,
            role: user.role,
          
        }, token });
    }catch(error){
        next(error);
    }
}   




export const GetProfileData=async (req:Request,res:Response) => {
  
    let result = await getprofileService(req);
    res.json(result);

}


export const ProfileUpdate=async (req:Request,res:Response) => {
  
    let result = await profileupdateService(req);
    res.json(result);

}



export const GetAllProfile=async (req:Request,res:Response) => {
  
    let result = await getallUsers();
    res.json(result);

}


export const  Searchbar=async (req:Request,res:Response)=> {
   const { searchTerm } = req.params;


  if (!searchTerm || typeof searchTerm !== 'string') {
    return res.status(400).json({ message: 'Search term is required and must be a string' });
  }


  
    const result = await Searchbarservice(searchTerm);
    
    if (!Array.isArray(result.data) || result.data.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }

    return res.status(200).json(result);
}












export const ProxysetController = async (req: Request, res: Response) => {
  const result = await ProxysetService(req);
  return res.json(result);
};



export const getAllProxysetController = async (req: Request, res: Response) => {
  const { id } = req.params; // or use req.query.id if appropriate
  const result = await getProxysetData(id);
  return res.json(result);
};










export const alldatapercentage = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const userProfile = await getUserFullProfileService(userId);

    if (!userProfile) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: userProfile,
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



























export const  AdminEmail = async (req: Request, res: Response) => {
  const result = await adminEmailService(req);
  return res.json(result);
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








export const forgetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, otp, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and new password are required" });
    }

    // If OTP is "0" or not provided, skip verification
    if (otp !== "0" && otp) {
      const result = await codeVerification(email, otp);
      if(result.message !== "Code verified successfully"){
        return res.status(400).json({ message: result.message });
      }
    }

    await updatePassword(email, password);
    return res.json({ status: "success", message: "Password updated successfully" });
  } catch (error) {
    next(error);
  }
};





export const UserList = async (req: Request, res: Response): Promise<void> => {
  try {
    const pageNo = Number(req.params.pageNo);
    const perPage = Number(req.params.perPage);
    const searchKeyword = req.params.searchKeyword;

    const data = await getUserList(pageNo, perPage, searchKeyword);

    res.status(200).json({ status: "success", data });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};