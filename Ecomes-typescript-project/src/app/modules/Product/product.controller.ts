import { Request, Response } from "express";
import { ListByBrandService, ListByCategoryService, ListByRemarkService } from "./product.service";




export const ProductListByBrand=async (req:Request,res:Response)=>{
        let result=await ListByBrandService(req)
        return res.json(result);
}



export const ProductListByCategory=async (req:Request,res:Response)=>{
    let result=await ListByCategoryService(req)
    return res.json(result);
}


export const ProductListByRemark=async (req:Request,res:Response)=>{
    let result=await ListByRemarkService(req)
    return res.json(result);
}
