
import { FinancialModel } from "./financial.model";
import { Request } from "express";





// export const FinancialCreateService = async (req:Request) => {
//   try {
//        let user_id = req.user?.id;
//         let requestBody = req.body;
//         requestBody.userID = user_id;
//         await FinancialModel.create(requestBody)
//         return ({status:"success",message:"Financial Create successfully"})

//   } catch (error) {
//     return {status:'failed', data: error};
//   }
// }



export const FinancialUpdateService = async (req:Request) => {
  try {
       let user_id = req.user?.id;
        let requestBody = req.body;
        requestBody.userID = user_id;
        await FinancialModel.findOneAndUpdate({userID: user_id}, requestBody, {upsert: true, new: true})
        return ({status:"success",message:"Financial Update successfully"})

  } catch (error) {
    return {status:'failed', data: error};
  }
}

