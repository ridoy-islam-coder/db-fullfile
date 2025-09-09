
// for mongoose model

import { model, Schema, Types } from 'mongoose'
import { IWISHLISTE } from './wishliste.interface';






const wishlisteSchema =  new Schema<IWISHLISTE>({

    
    productID: {
        type: Types.ObjectId,  // পরিবর্তন: ObjectId
        ref: 'products',  // রেফারেন্সঃ 'Brand' মডেল
        required: true
    },
    
     userID: {
        type: Types.ObjectId,  // পরিবর্তন: ObjectId
        ref: 'User',  // রেফারেন্সঃ 'Brand' মডেল
        required: true
    },
    
}, {
    timestamps: true,
    versionKey: false
})

export const WishListeModell = model<IWISHLISTE>("wishliste", wishlisteSchema);