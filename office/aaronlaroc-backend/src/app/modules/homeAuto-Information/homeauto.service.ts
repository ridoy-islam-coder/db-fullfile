import { Request } from "express";
import { HomeAutoModel } from "./homeauto.model";




// export const HomeAutoService = async (req:Request) => {
//   try {
//        let user_id = req.user?.id;
//         let requestBody = req.body;
//         requestBody.userID = user_id;
//         await HomeAutoModel.findOneAndUpdate({userID: user_id}, requestBody, {upsert: true, new: true})
//         return ({status:"success",message:"HomeAuto Update successfully"})

//   } catch (error) {
//     return {status:'failed', data: error};
//   }
// }







// export const HomeAutoService = async (req: Request) => {
//   try {
//     let user_id = req.user?.id;
//     let requestBody = req.body;
//     requestBody.userID = user_id;

//     // Define all required fields for medical data
//     const allFields = [
//       requestBody.vehicleOwnership,
//       requestBody.vehicleMakeModel,
//       requestBody.hasCarInsurance,
//       requestBody.carInsuranceProvider,
//       requestBody.hasPowerToys,
//       requestBody.powerToyTypes,
//       requestBody.homeOccupancy,
//       requestBody.hasHomeInsurance,
//       requestBody.homeInsuranceType
//     ];

//     // Count how many fields are filled (non-null, non-empty)
//     const filledFields = allFields.filter(field => field && field.trim() !== "").length;

//     // Calculate percentage completeness (based on number of fields filled)
//     const totalFields = allFields.length;
//     const completenessPercentage = (filledFields / totalFields) * 100;

//     // Update medical data and include completeness percentage
//     const updatedMedicalData = await HomeAutoModel.findOneAndUpdate(
//       { userID: user_id },
//       { ...requestBody, completenessPercentage },
//       { upsert: true, new: true }
//     );

//     return {
//       status: "success",
//       message: `Medical data updated successfully ${completenessPercentage.toFixed(2)}%`,
//       completenessPercentage: completenessPercentage.toFixed(2),  // Percentage result
//       updatedMedicalData
//     };
//   } catch (error) {
//     return { status: 'failed', data: error };
//   }
// };





export const HomeAutoService = async (req: Request) => {
  try {
    let user_id = req.user?.id;
    let requestBody = req.body;
    requestBody.userID = user_id;

    // Define all required fields for home auto data
    const allFields = [
      requestBody.vehicleOwnership,
      requestBody.vehicleMakeModel,
      requestBody.hasCarInsurance,
      requestBody.carInsuranceProvider,
      requestBody.hasPowerToys,
      requestBody.powerToyTypes,
      requestBody.homeOccupancy,
      requestBody.hasHomeInsurance,
      requestBody.homeInsuranceType
    ];

    // Count how many fields are filled (non-null, non-empty)
    const filledFields = allFields.filter(field => {
      // Check if field is a string and has value (if it's a string, use trim)
      if (typeof field === 'string') {
        return field.trim() !== "";  // Trim string fields to check if they are empty
      } else {
        // If not a string, just check if the field is truthy
        return field !== undefined && field !== null && field !== "";
      }
    }).length;

    // Calculate percentage completeness (based on number of fields filled)
    const totalFields = allFields.length;
    const completenessPercentage = (filledFields / totalFields) * 100;

    // Update home auto data and include completeness percentage
    const updatedMedicalData = await HomeAutoModel.findOneAndUpdate(
      { userID: user_id },
      { ...requestBody, completenessPercentage },
      { upsert: true, new: true }
    );

    return {
      status: "success",
      message: `HomeAuto data updated successfully ${completenessPercentage.toFixed(2)}%`,
      completenessPercentage: completenessPercentage.toFixed(2),  // Percentage result
      updatedMedicalData
    };
  } catch (error) {
    console.error('Error:', error);  // Log the error to debug
    return { status: 'failed', data: error };
  }
};