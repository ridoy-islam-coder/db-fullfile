import mongoose from "mongoose";
import { BrandModel } from "./brands.model";
import { Request } from "express";
const ObjectId =mongoose.Types.ObjectId;



export const BrandsService =async () => {
  try {
    let date =await BrandModel.find();
    return {status:'success', data: date};
  } catch (error) {
    return {status:'failed', data: error};
  }
}





export const BrandServiceById =async (req:Request) => {
  try {
    
      let BrandID=new ObjectId(req.params.id);
      let MatchStage={$match:{BrandID:BrandID}};
  } catch (error) {
    return {status:'failed', data: error};
  } 
}