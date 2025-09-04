
// for mongoose model
import { model, Schema, Types } from 'mongoose'
import { INVOIES } from './invoices.interface';





const invoiesSchema =  new Schema<INVOIES>({
       userID: { type: Types.ObjectId,   ref: 'User', required: true},
       payable:{type:String,required: true},
       cus_details:{type:String,required: true},
       
    
    

}, {
    timestamps: true,
    versionKey: false
})

export const  InvoiesModel = model<INVOIES>("invoies", invoiesSchema);