import { Request, Response } from "express";
import { MedicalModel } from "./medical.model";



// export const MedicalUpdateService = async (req:Request) => {
//   try {
//        let user_id = req.user?.id;
//         let requestBody = req.body;
//         requestBody.userID = user_id;
//         await MedicalModel.findOneAndUpdate({userID: user_id}, requestBody, {upsert: true, new: true})
//         return ({status:"success",message:"Financial Update successfully"})

//   } catch (error) {
//     return {status:'failed', data: error};
//   }
// }







export const MedicalUpdateService = async (req: Request) => {
  try {
    let user_id = req.user?.id;
    let requestBody = req.body;
    requestBody.userID = user_id;

    // Define all required fields for medical data
    const allFields = [
      requestBody.healthInsurance,
      requestBody.supplementalInsurance,
      requestBody.medications,
      requestBody.knownAilments
    ];

    // Count how many fields are filled (non-null, non-empty)
    const filledFields = allFields.filter(field => field && field.trim() !== "").length;

    // Calculate percentage completeness (based on number of fields filled)
    const totalFields = allFields.length;
    const completenessPercentage = (filledFields / totalFields) * 100;

    // Update medical data and include completeness percentage
    const updatedMedicalData = await MedicalModel.findOneAndUpdate(
      { userID: user_id },
      { ...requestBody, completenessPercentage },
      { upsert: true, new: true }
    );

    return {
      status: "success",
      message: `Medical data updated successfully ${completenessPercentage.toFixed(2)}%`,
      completenessPercentage: completenessPercentage.toFixed(2),  // Percentage result
      updatedMedicalData
    };
  } catch (error) {
    return { status: 'failed', data: error };
  }
};








export const calculateMedicalDataCompleteness = async (req: Request, res: Response) => {
  try {
    const { healthInsurance, supplementalInsurance, medications, knownAilments } = req.body;

    // Define all required fields
    const allFields = [
      healthInsurance,
      supplementalInsurance,
      medications,
      knownAilments
    ];
    
    // Count how many fields are filled (non-null, non-empty)
    const filledFields = allFields.filter(field => field && field.trim() !== "").length;

    // Calculate percentage completeness (based on number of fields filled)
    const totalFields = allFields.length;
    const completenessPercentage = (filledFields / totalFields) * 100;

    // Return the calculated percentage
    return res.status(200).json({
      status: "success",
      message: `Data completeness: ${completenessPercentage.toFixed(2)}%`,
      completenessPercentage: completenessPercentage.toFixed(2), // Percentage result
      filledFields, // Number of filled fields
      totalFields,  // Total number of fields
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "failed", message: "Server error", data: error });
  }
};









