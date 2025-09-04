
// for mongoose model
import { model, Schema, Types } from 'mongoose'
import { INVOIESPRODUCT } from './invoicesproduct.interface';





const  reviewproductSchema =  new Schema<INVOIESPRODUCT>({
        userID: { type: Types.ObjectId,   ref: 'User', required: true},
        productID:{type: Types.ObjectId,required:true},
        des:{type:String,required:true},
        rating:{type:String,required:true},
       
    
    

}, {
    timestamps: true,
    versionKey: false
})

export const  ReviewModel = model<INVOIESPRODUCT>("reviewproducts",  reviewproductSchema);