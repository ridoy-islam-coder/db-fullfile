
// for mongoose model

import { model, Schema, Types } from 'mongoose'
import { MEDICAL } from './medical.interface';



const medicalSchema =  new Schema<MEDICAL>({
     healthInsurance: {
      type: String,
      required: false,
    },
    supplementalInsurance: {
      type: String,
      required: false,
    },
    medications: {
      type: String,
      required: false,
    },
    knownAilments: {
      type: String,
      required: false,
    },
    userID: { type: Types.ObjectId,   ref: 'User', required: true},

    },{
    timestamps: true
})

export const MedicalModel = model<MEDICAL>("medicals", medicalSchema);