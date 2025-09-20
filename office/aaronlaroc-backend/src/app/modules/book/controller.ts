import { NextFunction, Request, Response } from "express";
import { creatnewbook, deletebypost, getalldata, getbydatials, getupdatebook } from "./service";



export  const creatbook = async (req:Request,res:Response, next:NextFunction) => {
  try {
    const newbook=req.body;
    const books = await creatnewbook(newbook);
    res.status(200).json({message: "Book created successfully", data: books});
  } catch (error) {
    next(error);
  }
}



export  const getallbook = async (req:Request,res:Response, next:NextFunction) => {
  try {
  
    const books = await getalldata();
    res.status(200).json({message: "All books fetched successfully", data: books});
  } catch (error) {
    next(error);
  }
}




export  const getbyid = async (req:Request,res:Response, next:NextFunction) => {
  try {
     const {id}= req.params;
    const books = await getbydatials(id, res);
  } catch (error) {
    next(error);
  }
}


export  const bookupdate = async (req:Request,res:Response, next:NextFunction) => {
  try {
     const boolid= req.params.id;
     const bookdata = req.body;
    const books = await getupdatebook(boolid,bookdata);
    if (!books) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({message: "Book updated successfully", data: books});
  } catch (error) {
    next(error);
  }
}







export  const deletepost = async (req:Request,res:Response, next:NextFunction) => {
  const { id } = req.params;
  try {
    const result = await deletebypost(id);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    next(error);
  }
}