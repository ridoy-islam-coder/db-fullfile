
// for mongoose model
import { model, Schema, Types } from 'mongoose'
import { INVOIES } from './invoices.interface';





const invoiesSchema =  new Schema<INVOIES>({
       userID: { type: Types.ObjectId,   ref: 'User', required: true},
       payable:{type:String,required: true},
       cus_details:{type:String,required: true},
        ship_details:{type:String,required:true},
        tran_id:{type:String,required:true},
        val_id:{type:String,required:true},
        payment_status:{type:String,required:true},
        delivery_status:{type:String,required:true},
        total:{type:String,required:true},
        vat:{type:String,required:true},
       
    
    

}, {
    timestamps: true,
    versionKey: false
})

export const  InvoiesModel = model<INVOIES>("invoies", invoiesSchema);