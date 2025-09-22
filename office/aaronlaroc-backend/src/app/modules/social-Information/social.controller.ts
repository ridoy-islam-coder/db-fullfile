import { Request, Response } from "express";
import { SocialInformationService } from "./social.service";



     export const SocialInformation=async (req:Request,res:Response) => {
    let result = await SocialInformationService(req);
    res.json(result);

    }
