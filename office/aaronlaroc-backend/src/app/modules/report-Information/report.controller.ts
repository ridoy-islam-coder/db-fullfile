import { Request, Response } from "express";
import { ReportCountService, ReportService } from "./report.service";





export const ReportController=async (req:Request,res:Response) => {
  
    let result = await ReportService(req,res);
    res.json(result);

}


export const ReportCountController = async (req: Request, res: Response) => {
  const result = await ReportCountService();
  res.json(result);
};