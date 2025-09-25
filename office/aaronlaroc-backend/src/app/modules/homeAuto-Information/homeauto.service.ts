import { Request } from "express";
import { HomeAutoModel } from "./homeauto.model";




export const HomeAutoService = async (req:Request) => {
  try {
       let user_id = req.user?.id;
        let requestBody = req.body;
        requestBody.userID = user_id;
        await HomeAutoModel.findOneAndUpdate({userID: user_id}, requestBody, {upsert: true, new: true})
        return ({status:"success",message:"HomeAuto Update successfully"})

  } catch (error) {
    return {status:'failed', data: error};
  }
}
