import { Request, Response } from "express";
import { BrandsService } from "./brands.service";


export const BrandList=async (req:Request,res:Response) => {
  
    let result = await BrandsService();
    res.json(result);

}