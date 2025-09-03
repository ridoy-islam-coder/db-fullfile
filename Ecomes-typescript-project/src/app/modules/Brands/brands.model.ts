
// for mongoose model
import { model, Schema } from 'mongoose'
import { IBRAND } from "./brands.interface";




const bookSchema =  new Schema<IBRAND>({
    brandName: {
        type: String,
        required: true,
        unique: true,
    },
  
    brandImg: {
        type: String,
        required: true,
    },
  
    

}, {
    timestamps: true,
    versionKey: false
})

export const  BrandModel = model<IBRAND>("brands", bookSchema);