
// for mongoose model

import { model, Schema, Types } from 'mongoose'
import { IPRODUCTSLIDER } from './productslider.interface';





const ProductSliderSchema =  new Schema<IPRODUCTSLIDER>({
    title: {
        type: String,
        required: true,
        trim: true
    },
  
    des: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
     img: {
        type: String,
        required: true,
        trim: true
    },
    
    productID: {
        type: Types.ObjectId,  // পরিবর্তন: ObjectId
        ref: 'brands',  // রেফারেন্সঃ 'Brand' মডেল
        required: true
    },
    

}, {
    timestamps: true
})

export const ProductSliderModell = model<IPRODUCTSLIDER>("productsliders", ProductSliderSchema);