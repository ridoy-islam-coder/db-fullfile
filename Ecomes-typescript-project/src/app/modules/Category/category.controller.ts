import { Request, Response } from "express";
import { CategoryService } from "./category.service";



export const CategoryList=async (req:Request,res:Response) => {
  
    let result = await CategoryService();
    res.json(result);

}