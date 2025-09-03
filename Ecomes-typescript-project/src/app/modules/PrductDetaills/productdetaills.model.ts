
// for mongoose model

import { model, Schema, Types } from 'mongoose'
import { IPRODUCTDETAILLS } from './productdetaills.interface';




const ProductDetaillsSchema =  new Schema<IPRODUCTDETAILLS>({
    img1: {
        type: String,
        required: true,
        trim: true
    },
  
    img2: {
        type: String,
        required: true,
        trim: true
    },
    img3: {
        type: String,
        required: true,
        trim: true
    },

     img4: {
        type: String,
        required: true,
        trim: true
    },
      img5: {
        type: String,
        trim: true
    },
     Img6: {
        type: String,
        trim: true
    },
    img7: {
        type: String,
        trim: true
    },
     img8: {
        type: String,
        trim: true
    },
      des: {
        type: String,
        trim: true
    },
      color: {
        type: String,
         required: true,
        trim: true
    },
      size: {
        type: String,
        required: true,
        trim: true
    },

    productID: {
        type: Types.ObjectId,  // পরিবর্তন: ObjectId
        ref: 'Brand',  // রেফারেন্সঃ 'Brand' মডেল
        required: true
    },
    

}, {
    timestamps: true
})

export const ProductModell = model<IPRODUCTDETAILLS>("products", ProductDetaillsSchema);