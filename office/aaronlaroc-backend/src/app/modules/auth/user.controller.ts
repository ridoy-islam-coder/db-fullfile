import { NextFunction, Request, Response } from "express";
import { existingUser, followUserService, getallUsers, getprofileService, LoginInUser, profileupdateService, Searchbarservice } from "./user.service";
import { User } from "./user.model";





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




export const followUserController = async (req: Request, res: Response) => {
  const result = await followUserService(req);
  return res.json(result);
};