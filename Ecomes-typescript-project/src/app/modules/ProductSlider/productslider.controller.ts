import { Request, Response } from "express";
import { ProductSliService } from "./productslider.service";


export const ProductList=async (req:Request,res:Response) => {
  
    let result = await ProductSliService();
    res.json(result);

}