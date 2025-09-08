import { Request } from "express";
import { AuthenticatedRequest } from "../../middleware/auth.middleware";

import mongoose from "mongoose";
import { ReviewModel } from "./reviewproduct.model";

const ObjectId =mongoose.Types.ObjectId;

export const ReviewListService=async (req:Request) => {

    try {
        let ProductID=new ObjectId(req.params.ProductID);
        let MatchStage={$match:{_id:ProductID}}
        let JoinWithProfileStage= {$lookup:{from:"profiles",localField:"userID",foreignField:"userID",as:"profile"}};
        
       


        
        
        let UnwindProfileStage={$unwind:"$profile"}

        let ProjectionStage={$project:{'des':1,'rating':1,'profile.cus_name':1}}

        let data=await  ReviewModel.aggregate([
            MatchStage,
            JoinWithProfileStage,
            UnwindProfileStage,
            ProjectionStage,
        ])

        return {status:"success",data:data}
    }catch (error:any) {
        return {status:"fail",data:error.toString()}
    }

}



export const CreateReviewService = async (req:AuthenticatedRequest) => {
  try {
    let user_id = req.user?.id;
    let { productID, des, rating } = req.body;
    let postJSON = {
      userID: user_id,
      productID: productID,
      des: des,
      rating: rating,
    };

    await ReviewModel.updateOne(postJSON, { $set: postJSON }, { upsert: true });

    return { status: "success", message: "create Successfully" };
  } catch (error: any) {
    return { status: "fail", data: error.toString() };
  }
};