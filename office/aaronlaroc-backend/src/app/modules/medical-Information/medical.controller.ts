import { Request, Response } from "express";
import { getEmergencyContactCompletion, MedicalUpdateService } from "./medical.service";


     export const UpdateMedical=async (req:Request,res:Response) => {
    let result = await MedicalUpdateService(req);
    res.json(result);

    }


    export const getEmergencyContact=async (req:Request,res:Response) => {
    let result = await getEmergencyContactCompletion(req);
    res.json(result);

    }
