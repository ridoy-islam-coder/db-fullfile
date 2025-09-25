import { Request, Response } from "express";
import { HomeAutoService } from "./homeauto.service";



 export const HomeAutoUpdate=async (req:Request,res:Response) => {
    let result = await HomeAutoService(req);
    res.json(result);

    }