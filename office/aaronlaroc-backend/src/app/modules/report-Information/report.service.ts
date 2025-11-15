import { Request, Response } from "express";
import { ReportModel } from "./report.model";






export const ReportService = async (req: Request, res: Response) => {
    try {
      const { problem, details, userID } = req.body;

      const newReport = await ReportModel.create({
        problem,
        details,
        userID,
      });
     return ({status:true,Message:"Report created successfully", data:newReport})
  

    } catch (error: any) {
        return {status:'false', message: "Failed to create report", data: error};
    
 }
  }





  export const ReportCountService = async () => {
  try {
    const count = await ReportModel.countDocuments();

    return {
      status: true,
      message: "Total reports fetched successfully",
      totalReports: count
    };

  } catch (error: any) {

    return {
      status: false,
      message: "Failed to fetch total reports",
      data: error
    };
  }
};