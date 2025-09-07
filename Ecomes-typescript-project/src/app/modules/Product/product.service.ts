import { Request } from "express";
import { ProductModell } from "./product.model";
import mongoose from "mongoose";
const ObjectId =mongoose.Types.ObjectId;




export const ListByBrandService= async (req:Request) => {

    try{
        let BrandID=new ObjectId(req.params.BrandID);
        let MatchStage={$match:{brandID:BrandID}}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categorys",localField:"categoryID",foreignField:"_id",as:"category"}};

        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}

        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        // Query
        let data= await ProductModell.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])

        return {status:"success",data:data}
    } catch (error:any) {
        return {status:"fail",data:error.toString()}
    }
}




export const ListByCategoryService=async (req:Request) => {

    try {
        let CategoryID=new ObjectId(req.params.CategoryID);
        let MatchStage={$match:{categoryID:CategoryID}}

       
        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categorys",localField:"categoryID",foreignField:"_id",as:"category"}};

        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        // Query
        let data= await ProductModell.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])

        return {status:"success",data:data}
    }catch (error:any) {
        return {status:"fail",data:error.toString()}
    }
}




export const ListByRemarkService= async (req:Request) => {

    try {
        let Remark=req.params.Remark
        let MatchStage={$match:{remark:Remark}}

        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};

        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        // Query
        let data= await ProductModell.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ])

        return {status:"success",data:data}
    }catch (error:any) {
        return {status:"fail",data:error.toString()}
    }
}








export const DetailsService= async (req:Request) => {

    try {
        let ProductID=new ObjectId(req.params.ProductID);
        let MatchStage={$match:{_id:ProductID}}
        let JoinWithBrandStage= {$lookup:{from:"brands",localField:"brandID",foreignField:"_id",as:"brand"}};
        let JoinWithCategoryStage={$lookup:{from:"categories",localField:"categoryID",foreignField:"_id",as:"category"}};
        let JoinWithDetailsStage={$lookup:{from:"productdetails",localField:"_id",foreignField:"productID",as:"details"}};


        let UnwindBrandStage={$unwind:"$brand"}
        let UnwindCategoryStage={$unwind:"$category"}
        let UnwindDetailsStage={$unwind:"$details"}

        let ProjectionStage={$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}

        let data=await  ProductModell.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            JoinWithDetailsStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            UnwindDetailsStage,
            ProjectionStage,
        ])

        return {status:"success",data:data}
    }catch (error:any) {
        return {status:"fail",data:error.toString()}
    }
}
