import { Request, Response } from "express"
import { ReviewListService } from "./reviewproduct.service"


export const ProductReviewListByID=async (req:Request,res:Response)=>{
    let result=await  ReviewListService(req)
    return res.json(result)
}