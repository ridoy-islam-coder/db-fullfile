import { Request, Response } from "express";
import { ListByBrandService } from "./product.service";




export const ProductListByBrand=async (req:Request,res:Response)=>{
        let result=await ListByBrandService(req)
        return res.json(result);
}