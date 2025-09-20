
// for mongoose model

import { model, Schema } from 'mongoose'
import { FINANCIAL } from './financial.interface';




const financialSchema =  new Schema<FINANCIAL>({
    bankAccount: { type: String, required: true },
    retirementAccount: { type: String, required: true },
    currentAssets: { type: String, required: true },
    debt: { type: String, required: true },

    },{
    timestamps: true
})

export const FinancialModel = model<FINANCIAL>("financial", financialSchema);