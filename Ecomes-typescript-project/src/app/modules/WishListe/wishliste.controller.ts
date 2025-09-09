import { Request, Response } from "express"
import { CreateWishService, RemoveWishService } from "./wishliste.service"


export const CreateWishList=async (req:Request,res:Response)=>{
    let result=await  CreateWishService(req);
    return res.json(result)
}



export const DeleteWishList=async (req:Request,res:Response)=>{
    let result=await  RemoveWishService(req);
    return res.json(result)
}