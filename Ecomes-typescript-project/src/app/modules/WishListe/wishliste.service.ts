import { Request } from "express";

import { WishListeModell } from "./wishliste.model";



export const CreateWishService= async (req:Request) => {

    try{

       let user_id =req.user?.id;
       let {productID} = req.body 
       let postJSON={userID:user_id,productID:productID}

      await  WishListeModell.updateOne(postJSON,{$set:postJSON},{upsert:true})




        return {status:"success",message:"create Successfully"}
    } catch (error:any) {
        return {status:"fail",data:error.toString()}
    }
}




