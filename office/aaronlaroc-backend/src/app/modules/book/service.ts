
import { Book } from "./model";
import { IBook } from "./interface";
import mongoose, { RootFilterQuery } from "mongoose";
import { Response } from "express";





export  const creatnewbook = async (data:IBook) => {
 const result = await Book.create(data);
 return result;
}


export  const getalldata = async () => {
 const result = await Book.find();
 return result;
}



export  const  getbydatials = async (id:string, res:Response) => {

  // আইডি ভ্যালিড কিনা চেক করুন
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid book id" });
  }
  const result = await Book.findById(id);
  if (!result) {
    return res.status(404).json({ message: "Book not found" });
  }
  return res.status(200).json({message: "books fetched successfully", data: result});
  

}


export  const  getupdatebook = async (id:string, data:IBook) => {
  const result = await Book.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  return result;
  

}



export  const  deletebypost = async (id:string ) => {
if (!mongoose.Types.ObjectId.isValid(id)) {

    return { deletedCount: 0 };
  }
  const result = await Book.deleteOne({ _id: id });
  return result;
  

}