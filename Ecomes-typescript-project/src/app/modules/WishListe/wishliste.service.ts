import { Request } from "express";

import { WishListeModell } from "./wishliste.model";

import mongoose from "mongoose";

const ObjectId=mongoose.Types.ObjectId;

export const CreateWishService= async (req:Request) => {

    try{
       let user_id =req.user?.id;
    //    let user_id =new ObjectId(req.user?.id);
       let {productID} = req.body 
       let postJSON={userID:user_id,productID:productID}

      await  WishListeModell.updateOne(postJSON,{$set:postJSON},{upsert:true})




        return {status:"success",message:"create Successfully"}
    } catch (error:any) {
        return {status:"fail",data:error.toString()}
    }
}




export const  RemoveWishService= async (req:Request) => {

    try{

       let user_id =req.user?.id;
       let {productID} = req.body 
       let postJSON={userID:user_id,productID:productID}

      await  WishListeModell.deleteOne(postJSON)




        return {status:"success",message:"delete Successfully"}
    } catch (error:any) {
        return {status:"fail",data:error.toString()}
    }
}


