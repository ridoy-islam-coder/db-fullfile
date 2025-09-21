
import { FinancialModel } from "./financial.model";
import { Request } from "express";





export const FinancialCreateService = async (req:Request) => {
  try {
       let user_id = req.user?.id;
        let requestBody = req.body;
        requestBody.user_id = user_id;
        await FinancialModel.create(requestBody)
        return ({status:"success",message:"Financial Create successfully"})
   
  } catch (error) {
    return {status:'failed', data: error};
  }
}



