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



export const RemoveCartService= async (req:Request) => {

    try{
       let user_id=req.user?.id
       let body=req.body;
       body.userID = user_id;

       await  CardListModell.deleteOne(body)
       
       
        return {status:"success",message:"Remove Successfully"}
    } catch (error:any) {
        return {status:"fail",data:error.toString()}
    }
}



export const UpdateCartService= async (req:Request) => {

    try{
        let user_id=req.user?.id
        let {color,qty,size,id}=req.body;
        let postJSON={
         color:color,
         qty:qty,
         size:size
 
        }
 
       let data= await CardListModell.updateOne({userID:user_id,_id:id},{$set:postJSON})
        
        
         return {status:"success",message:" Cart update Successfully",data:data}
     } catch (error:any) {
         return {status:"fail",data:error.toString()}
     }
}