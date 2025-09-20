
// for mongoose model

import { model, Schema } from 'mongoose'
import { IBook } from './interface';



const bookSchema =  new Schema<IBook>({
    title: {
        type: String,
        required: true,
        trim: true
    },
  
    description: {
        type: String,
        trim: true
    },
    subdes: {
        type: String,
        required: true,
        trim: true
    },
     img: {
        type: String,
        required: true,
        trim: true
    },
     link: {
        type: String,
        required: true,
        trim: true
    },
    

}, {
    timestamps: true
})

export const Book = model<IBook>("Book", bookSchema);