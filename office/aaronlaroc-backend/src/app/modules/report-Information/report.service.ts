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
     return ({status:"success",Message:"User Update successfully", data:newReport})
    //   res.status(201).json({
    //     success: true,
    //     message: "Report created successfully",
    //     data: newReport,
    //   });

    } catch (error: any) {
        return {status:'failed', data: error};
    //   res.status(500).json({
    //     success: false,
    //     message: "Failed to create report",
    //     error: error.message,
    //   });
 }
  }
