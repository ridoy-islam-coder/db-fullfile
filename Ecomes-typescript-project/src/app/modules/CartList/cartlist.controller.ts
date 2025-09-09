import { Request, Response } from "express";
import { CreateCartService } from "./cartlist.service";


export const ReadWishList=async (req:Request,res:Response)=>{
    let result=await  CreateCartService(req);
    return res.json(result)
}