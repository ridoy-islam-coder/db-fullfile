
// for mongoose model

import { model, Schema, Types } from 'mongoose'





const financialSchema =  new Schema<FINANCIAL>({
    problem: { type: String, required: true },
    details: { type: String, required: true },
    userID: { type: Types.ObjectId,   ref: 'User', required: true},

    },{
    timestamps: true,versionKey: false
})

export const FinancialModel = model<FINANCIAL>("financial", financialSchema);