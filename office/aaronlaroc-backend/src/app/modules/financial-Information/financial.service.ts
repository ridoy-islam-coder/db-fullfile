
import { User } from "../auth/user.model";
import { HomeAutoModel } from "../homeAuto-Information/homeauto.model";
import { MedicalModel } from "../medical-Information/medical.model";
import { SocialInfoModel } from "../social-Information/social.model";
import { FinancialModel } from "./financial.model";
import { Request } from "express";





// export const FinancialCreateService = async (req:Request) => {
//   try {
//        let user_id = req.user?.id;
//         let requestBody = req.body;
//         requestBody.userID = user_id;
//         await FinancialModel.create(requestBody)
//         return ({status:"success",message:"Financial Create successfully"})

//   } catch (error) {
//     return {status:'failed', data: error};
//   }
// }













































export const FinancialUpdateService = async (req: Request) => {
  try {
    const user_id = req.user?.id;
    const requestBody = req.body;
    requestBody.userID = user_id;

    // Required fields for completeness check
    const allFields = [
      requestBody.bankAccount,
      requestBody.retirementAccount,
      requestBody.currentAssets,
      requestBody.debt,
    ];

    // Count filled fields
    const filledFields = allFields.filter(
      (field) => typeof field === "string" && field.trim() !== ""
    ).length;

    const totalFields = allFields.length;
    const completenessPercentage = (filledFields / totalFields) * 100;

    const updatedFinancialData = await FinancialModel.findOneAndUpdate(
      { userID: user_id },
      { 
        ...requestBody, 
        financialPercentage: completenessPercentage  // ✅ fixed
      },
      { upsert: true, new: true }
    );

    return {
      status: "success",
      message: `Financial data updated successfully (${completenessPercentage.toFixed(2)}%)`,
      financialPercentage: completenessPercentage.toFixed(2),
      updatedFinancialData,
    };
  } catch (error: any) {
    return { status: "failed", message: error.message };
  }
};
































// export const shareFinancialDataWithProxyset = async (userId: string) => {
//   try {

//     const user = await User.findById(userId).select("proxysetId");

//     if (!user) {
//       return { status: "failed", message: "User not found" };
//     }


//     if (!user.proxysetId || user.proxysetId.length === 0) {
//       return { status: "failed", message: "No proxyset users found" };
//     }

    
//     const financialData = await FinancialModel.find({
//       userID: { $in: user.proxysetId }, 
//     });

   
//     if (financialData.length === 0) {
//       return { status: "failed", message: "No financial data found" };
//     }

//     const proxysetUsers = await User.find({
//       _id: { $in: user.proxysetId },
//     });


//     proxysetUsers.forEach((proxyUser) => {
   
//       console.log(`Shared financial data with ${proxyUser.email}`);
//     });


//     return { status: "success", data: financialData };
//   } catch (error) {
//     return {status:'failed', data: error};
//   }
// };






// export const shareUserDataWithProxyset = async (userId: string) => {
//   try {

//     // ১. মূল user পাওয়া
//     const user = await User.findById(userId).select("proxysetId");
//     if (!user) {
//       return { status: "failed", message: "User not found" };
//     }

//     if (!user.proxysetId || user.proxysetId.length === 0) {
//       return { status: "failed", message: "No proxyset users found" };
//     }

//     // ২. Financial data fetch
//     const financialData = await FinancialModel.find({
//       userID: { $in: user.proxysetId },
//     });

//     // ৩. Medical data fetch
//     const medicalData = await MedicalModel.find({
//       userID: { $in: user.proxysetId },
//     });
    
//      // ৩. Home Auto data fetch
//     const HomeAutoData = await HomeAutoModel.find({
//       userID: { $in: user.proxysetId },
//     });

//         // ৩. SocialInfoData data fetch
//     const SocialInfoData = await SocialInfoModel.find({
//       userID: { $in: user.proxysetId },
//     });


//     if (financialData.length === 0 && medicalData.length === 0 && HomeAutoData.length === 0 && SocialInfoData.length === 0 ) {
//       return { status: "failed", message: "No data found" };
//     }

//     // ৪. Proxyset users info
//     const proxysetUsers = await User.find({
//       _id: { $in: user.proxysetId },
//     }).select("email firstName lastName");

//     proxysetUsers.forEach((proxyUser) => {
//       console.log(`Shared data with ${proxyUser.email}`);
//     });

//     // ৫. Return combined data
//     return {
//       status: "success",
//       financialData,
//       medicalData,
//       HomeAutoData,
//       SocialInfoData,
//       proxysetUsers
//     };

//   } catch (error) {
//     return { status: "failed", data: error };
//   }
// };




export const shareUserDataWithProxyset = async (userId: string) => {
  try {
    // ১. মূল user fetch + প্রয়োজনীয় fields
    const user = await User.findById(userId).select(
      "email firstName lastName proxysetId city dateOfBirth phoneNumber yearStarted company state"
    );
    if (!user) {
      return { status: "failed", message: "User not found" };
    }

    // ২. Proxyset check
    if (!user.proxysetId || user.proxysetId.length === 0) {
      return { status: "failed", message: "No proxyset users found" };
    }

    // ৩. Proxyset-related data fetch (exclude createdAt, updatedAt)
    const financialData = await FinancialModel.find(
      { userID: { $in: user.proxysetId } },
      "-createdAt -updatedAt -__v"
    );

    const medicalData = await MedicalModel.find(
      { userID: { $in: user.proxysetId } },
      "-createdAt -updatedAt -__v"
    );

    const HomeAutoData = await HomeAutoModel.find(
      { userID: { $in: user.proxysetId } },
      "-createdAt -updatedAt -__v"
    );

    const SocialInfoData = await SocialInfoModel.find(
      { userID: { $in: user.proxysetId } },
      "-createdAt -updatedAt -__v"
    );

    if (
      financialData.length === 0 &&
      medicalData.length === 0 &&
      HomeAutoData.length === 0 &&
      SocialInfoData.length === 0
    ) {
      return { status: "failed", message: "No data found" };
    }

    // ৪. Proxyset users info (exclude timestamps)
    const proxysetUsers = await User.find(
      { _id: { $in: user.proxysetId } }
    ).select("email firstName lastName");

    proxysetUsers.forEach((proxyUser) => {
      console.log(`Shared data with ${proxyUser.email}`);
    });

    // ৫. Return combined data including caller user details
    return {
      status: "success",
      callerUser: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        city: user.city,
        dateOfBirth: user.dateOfBirth,
        phoneNumber: user.phoneNumber,
        yearStarted: user.yearStarted,
        company: user.company,
        state: user.state
      },
      financialData,
      medicalData,
      HomeAutoData,
      SocialInfoData,
      proxysetUsers
    };
  } catch (error) {
    return { status: "failed", data: error };
  }
};
