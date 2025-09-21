import { Request, Response } from "express";
import { FinancialCreateService, FinancialUpdateService } from "./financial.service";






    export const CreateFinancial=async (req:Request,res:Response) => {
    let result = await FinancialCreateService(req);
    res.json(result);

    }


   