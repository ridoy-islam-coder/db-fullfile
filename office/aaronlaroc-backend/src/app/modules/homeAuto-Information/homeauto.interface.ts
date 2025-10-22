import { Document, Types } from "mongoose";
import { IUser } from "../auth/user.interface";



export const VEHICLE_OWNERSHIP = ["Own", "Lease", "No Vehicle"] as const;
export type TVehicleOwnership = (typeof VEHICLE_OWNERSHIP)[number];

export const HOME_OCCUPANCY = ["Own", "Rent", "Other"] as const;
export type THomeOccupancy = (typeof HOME_OCCUPANCY)[number];

export const POWER_TOYS = ["ATV", "Boat", "Motorcycle"] as const;
export type TPowerToy = (typeof POWER_TOYS)[number];

export const HOME_INSURANCE_TYPE = ["Homeowner", "Renter"] as const;
export type THomeInsuranceType = (typeof HOME_INSURANCE_TYPE)[number];





export interface IHomeVehicle extends Document {
  userID:IUser | Types.ObjectId;

  // Vehicle
  vehicleOwnership?: TVehicleOwnership;   // Own, Lease, or No Vehicle
  vehicleMakeModel?: string;              // Example: "Toyota Corolla 2022"
  hasCarInsurance?: boolean; 
  homeautoPercentage: number;             // Yes/No
  carInsuranceProvider?: string;          // Optional extra detail

  // ATV/Boat/Motorcycle
  hasPowerToys?: boolean;                 // Yes/No
  powerToyTypes?: TPowerToy[];            // Which ones (ATV, Boat, Motorcycle)

  // Home
  homeOccupancy?: THomeOccupancy;         // Own, Rent, Other
  hasHomeInsurance?: boolean;             // Yes/No
  homeInsuranceType?: THomeInsuranceType; // Homeowner or Renter

  createdAt?: Date;
  updatedAt?: Date;
}