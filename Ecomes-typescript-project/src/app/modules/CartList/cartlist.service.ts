import { Request } from "express";
import { CardListModell } from "./cartlist.model";

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
