
// for mongoose model

import { model, Schema, Types } from 'mongoose'
import { IPRODUCT } from './product.interface';




const ProductSchema =  new Schema<IPRODUCT>({
    title: {
        type: String,
        required: true,
        trim: true
    },
  
    shortDes: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: String,
        required: true,
        trim: true
    },
     discount: {
        type: Boolean,
        required: true,
        trim: true
    },
     discountPrice: {
        type: String,
        required: true,
        trim: true
    },
      star: {
        type: String,
        required: true,
        trim: true
    },
     Image: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Boolean,
        required: true,
        trim: true
    },
     remark: {
        type: String,
        required: true,
        trim: true
    },
     categoryID: {
        type: Types.ObjectId,  // পরিবর্তন: ObjectId
        ref: 'Category',  // রেফারেন্সঃ 'Category' মডেল
        required: true
    },
    brandID: {
        type: Types.ObjectId,  // পরিবর্তন: ObjectId
        ref: 'Brand',  // রেফারেন্সঃ 'Brand' মডেল
        required: true
    },
    

}, {
    timestamps: true
})

export const Book = model<IPRODUCT>("products", ProductSchema);