import { Request, Response } from "express";
import { CreateCartService, ReadCartService, RemoveCartService } from "./cartlist.service";


export const  CreateCard=async (req:Request,res:Response)=>{
    let result=await  CreateCartService(req);
    return res.json(result)
}



export const ReadCartList=async(req:Request,res:Response)=>{
    let result=await ReadCartService(req)
    return res.json(result);
}

export const RemoveCart=async(req:Request,res:Response)=>{
    let result=await RemoveCartService(req)
    return res.json(result);
}


// export const UpdateCart=async(req,res)=>{
//     let result=await UpdateCartService(req)
//     return res.json(result);
// }