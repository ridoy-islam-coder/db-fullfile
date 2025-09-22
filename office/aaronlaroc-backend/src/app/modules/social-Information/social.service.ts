import { Request } from "express";
import { SocialInfoModel } from "./social.model";



export const SocialInformationService = async (req:Request) => {
  try {
       let user_id = req.user?.id;
        let requestBody = req.body;
        requestBody.userID = user_id;
        await SocialInfoModel.findOneAndUpdate({userID: user_id}, requestBody, {upsert: true, new: true})
        return ({status:"success",message:"Financial Update successfully"})

  } catch (error) {
    return {status:'failed', data: error};
  }
}

