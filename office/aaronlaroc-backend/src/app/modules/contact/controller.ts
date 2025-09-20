import { NextFunction, Request, Response } from "express";
import { creatdata, getallcontact } from "./service";




export  const creatcontact = async (req:Request,res:Response, next:NextFunction) => {
  try {
    const newbook=req.body;
    const books = await creatdata(newbook);
    res.status(200).json({message: "Book created successfully", data: books});
  } catch (error) {
    next(error);
  }
}



export  const getallContact = async (req:Request,res:Response, next:NextFunction) => {
  try {
  
    const books = await getallcontact();
    res.status(200).json({message: "All books fetched successfully", data: books});
  } catch (error) {
    next(error);
  }
}
