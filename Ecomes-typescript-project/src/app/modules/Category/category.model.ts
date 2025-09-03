
// for mongoose model
import { model, Schema } from 'mongoose'
import { ICATEGORY } from './category.interface';




const categorySchema =  new Schema<ICATEGORY>({
     categoryName: {
        type: String,
        required: true,
        unique: true,
    },
  
    categoryImg: {
        type: String,
        required: true,
    },
  
    

}, {
    timestamps: true,
    versionKey: false
})

export const  CategoryModel = model<ICATEGORY>("categorys", categorySchema);