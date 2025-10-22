


// for mongoose model

import { model, Schema, Types } from 'mongoose'

import { HOME_INSURANCE_TYPE, HOME_OCCUPANCY, IHomeVehicle, POWER_TOYS, VEHICLE_OWNERSHIP } from './homeauto.interface';




const homeautoSchema =  new Schema<IHomeVehicle>({
     // Vehicle
    vehicleOwnership: {
      type: String,
      enum: VEHICLE_OWNERSHIP,
      default: undefined,
    },
    vehicleMakeModel: {
      type: String,
      trim: true,
      default: undefined,
    },
    hasCarInsurance: {
      type: Boolean,
      default: undefined,
    },
    carInsuranceProvider: {
      type: String,
      trim: true,
      default: undefined,
    },

    // ATV / Boat / Motorcycle
    hasPowerToys: {
      type: Boolean,
      default: undefined,
    },
    powerToyTypes: {
      type: [String],
      enum: POWER_TOYS,
      default: undefined,
    },

    // Home
    homeOccupancy: {
      type: String,
      enum: HOME_OCCUPANCY,
      default: undefined,
    },
    hasHomeInsurance: {
      type: Boolean,
      default: undefined,
    },
    homeInsuranceType: {
      type: String,
      enum: HOME_INSURANCE_TYPE,
      default: undefined,
    },
    homeautoPercentage: { type: Number },
    userID: { type: Types.ObjectId,   ref: 'User', required: true},

    },{
    timestamps: true, versionKey: false
})

export const HomeAutoModel = model<IHomeVehicle>("homeauto", homeautoSchema);