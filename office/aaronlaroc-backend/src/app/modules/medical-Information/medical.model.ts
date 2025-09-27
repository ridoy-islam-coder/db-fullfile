
// for mongoose model

import { model, Schema, Types } from 'mongoose'
import { MEDICAL } from './medical.interface';



const medicalSchema =  new Schema<MEDICAL>({
     healthInsurance: {
      type: String,
     
    },
    supplementalInsurance: {
      type: String,
     
    },
    medications: {
      type: String,
     
    },
    knownAilments: {
      type: String,
     
    },
    userID: { type: Types.ObjectId,   ref: 'User', required: true},

    },{
    timestamps: true , versionKey: false
})

export const MedicalModel = model<MEDICAL>("medicals", medicalSchema);