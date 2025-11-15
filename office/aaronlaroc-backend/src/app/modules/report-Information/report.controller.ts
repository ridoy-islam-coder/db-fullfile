import { Request, Response } from "express";
import { ReportService } from "./report.service";





export const ReportController=async (req:Request,res:Response) => {
  
    let result = await ReportService(req,res);
    res.json(result);

}


