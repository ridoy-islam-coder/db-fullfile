import { Request, Response } from "express";
import { MedicalUpdateService } from "./medical.service";


     export const UpdateMedical=async (req:Request,res:Response) => {
    let result = await MedicalUpdateService(req);
    res.json(result);

    }
