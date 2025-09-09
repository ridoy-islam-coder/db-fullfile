
import { model, Schema, Types } from 'mongoose'
import { ICartlist } from './cartlist.interface';
const wishlisteSchema =  new Schema<ICartlist>({


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
        color:{type:String,required:true},
        qty:{type:String,required:true},
        size:{type:String,required:true}
    
}, {
    timestamps: true,
    versionKey: false
})

export const CardListModell = model<ICartlist>("cardlist", wishlisteSchema);