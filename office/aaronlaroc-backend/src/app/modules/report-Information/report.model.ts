
// for mongoose model

import { model, Schema, Types } from 'mongoose'
import { REPORT } from './report.interface';





const financialSchema =  new Schema<REPORT>({
    problem: { type: String, required: true },
    details: { type: String, required: true },
    userID: { type: Types.ObjectId,   ref: 'User', required: true},

    },{
    timestamps: true,versionKey: false
})

export const ReportModel = model<REPORT>("report", financialSchema);