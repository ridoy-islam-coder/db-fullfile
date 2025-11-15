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




export const GetAllReportsService = async () => {
  try {
    const reports = await ReportModel.find().populate("userID", "firstName lastName email imgUrl ");

    return {
      status: true,
      message: "All reports fetched successfully",
      data: reports
    };

  } catch (error: any) {

    return {
      status: false,
      message: "Failed to fetch reports",
      data: error
    };
  }
};