import { Request } from "express";
import { MedicalModel } from "./medical.model";



export const MedicalUpdateService = async (req:Request) => {
  try {
       let user_id = req.user?.id;
        let requestBody = req.body;
        requestBody.userID = user_id;
        await MedicalModel.findOneAndUpdate({userID: user_id}, requestBody, {upsert: true, new: true})
        return ({status:"success",message:"Financial Update successfully"})

  } catch (error) {
    return {status:'failed', data: error};
  }
}




export const getEmergencyContactCompletion = async (req: Request) => {
    try {  
        
  const userID = req.params.userID;
  const totalRequired = 3; // Change as needed

  const count = await MedicalModel.countDocuments({ userID });
  const percent = Math.round((count / totalRequired) * 100);

    return { status: 'success', data: { percent } };
    } catch (error) {
      return {status:'failed', data: error};
    }
};