
// for mongoose model
import { model, Schema, Types } from 'mongoose'
import { INVOIESPRODUCT } from './invoicesproduct.interface';





const  Invoiesproduct =  new Schema<INVOIESPRODUCT>({
       userID: { type: Types.ObjectId,   ref: 'User', required: true},
        productID:{type: Types.ObjectId,required:true},
        invoiceID:{type:Types.ObjectId,required:true},
        qty:{type:String,required:true},
        price:{type:String,required:true},
        color:{type:String,required:true},
        size:{type:String,required:true}
       
    
    

}, {
    timestamps: true,
    versionKey: false
})

export const  InvoiesproductModel = model<INVOIESPRODUCT>("invoiesproduct",  Invoiesproduct);