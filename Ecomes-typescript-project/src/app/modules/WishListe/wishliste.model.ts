
// for mongoose model

import { model, Schema, Types } from 'mongoose'
import { IWISHLISTE } from './wishliste.interface';






const wishlisteSchema =  new Schema<IWISHLISTE>({

    
    productID: {
        type: Types.ObjectId,  // পরিবর্তন: ObjectId
        ref: 'Brand',  // রেফারেন্সঃ 'Brand' মডেল
        required: true
    },
    
     userID: {
        type: Types.ObjectId,  // পরিবর্তন: ObjectId
        ref: 'Brand',  // রেফারেন্সঃ 'Brand' মডেল
        required: true
    },
    
}, {
    timestamps: true,
    versionKey: false
})

export const ProductSliderModell = model<IWISHLISTE>("wishliste", wishlisteSchema);