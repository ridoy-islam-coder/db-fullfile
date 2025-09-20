
// for mongoose model

import { model, Schema } from 'mongoose'
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

    },{
    timestamps: true
})

export const MedicalModel = model<MEDICAL>("medicals", medicalSchema);