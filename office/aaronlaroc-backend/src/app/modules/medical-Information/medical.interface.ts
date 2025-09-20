import { Document } from "mongoose";

export interface MEDICAL extends Document{
     healthInsurance: string;
     supplementalInsurance: string;
     medications: string;
     knownAilments: string;
    createdAt: Date;
    updatedAt: Date;
}
