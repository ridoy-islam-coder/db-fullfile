import { Request } from "express";
import { CardListModell } from "./cartlist.model";
import mongoose from "mongoose";

const ObjectId=mongoose.Types.ObjectId;

export const CreateCartService= async (req:Request) => {

    try{
       let user_id=req.user?.id;
       let {productID,color,qty,size}=req.body;
       let postJSON={
        productID:productID,
        userID:user_id,
        color:color,
        qty:qty,
        size:size

       }

       await  CardListModell.create(postJSON)
       
       
        return {status:"success",message:" Cart create Successfully"}
    } catch (error:any) {
        return {status:"fail",data:error.toString()}
    }
}



export const ReadCartService=async (req:Request)=>{
    try {
        let user_id=new ObjectId(req.user?.id);
        let MatchStage={$match:{userID:user_id}}

        let JoinStageProduct= {$lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"}};

        let data=await CardListModell.aggregate([
            MatchStage,
            JoinStageProduct
        ])
        return {status:"success",message:"Read Successfully",data:data};
      
        } catch (error:any) {
            return {status:"fail",data:error.toString()}
      }

}
