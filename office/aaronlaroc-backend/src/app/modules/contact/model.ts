
// for mongoose model

import { model, Schema } from 'mongoose'
import { ISMS } from './interface';



const bookSchema =  new Schema<ISMS>({
    name: {
        type: String,
        required: true,
        trim: true
    },
  
    description: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
     number: {
        type: String,
        required: true,
        trim: true
    },
     
     subject: {
        type: String,
        required: true,
        trim: true
    },
    

}, {
    timestamps: true
})

export const Contact = model<ISMS>("contact", bookSchema);