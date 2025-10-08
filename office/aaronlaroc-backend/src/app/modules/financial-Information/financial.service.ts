
import { User } from "../auth/user.model";
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
    let user_id = req.user?.id;
    let requestBody = req.body;
    requestBody.userID = user_id;

    // Define all required fields for medical data
    const allFields = [
      requestBody.bankAccount,
      requestBody.retirementAccount,
      requestBody.currentAssets,
      requestBody.debt
     
    ];

    // Count how many fields are filled (non-null, non-empty)
    const filledFields = allFields.filter(field => field && field.trim() !== "").length;

    // Calculate percentage completeness (based on number of fields filled)
    const totalFields = allFields.length;
    const completenessPercentage = (filledFields / totalFields) * 100;

    // Update medical data and include completeness percentage
    const updatedMedicalData = await FinancialModel.findOneAndUpdate(
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



























export const shareFinancialDataWithProxyset = async (userId: string) => {
  try {
    // প্রথমে, ব্যবহারকারীর `proxysetId` গুলি বের করা
    const user = await User.findById(userId).select("proxysetId");

    if (!user) {
      return { status: "failed", message: "User not found" };
    }

    // চেক করা হচ্ছে যে `proxysetId` ফিল্ডে কোনো আইডি আছে কিনা
    if (!user.proxysetId || user.proxysetId.length === 0) {
      return { status: "failed", message: "No proxyset users found" };
    }

    // `proxysetId` এর মধ্যে থাকা ব্যবহারকারীদের জন্য FinancialModel এর ডেটা পাওয়া
    const financialData = await FinancialModel.find({
      userID: { $in: user.proxysetId }, // `proxysetId` এর মধ্যে থাকা ব্যবহারকারীদের জন্য
    });

    // যদি কোনো ফাইন্যান্সিয়াল ডেটা না পাওয়া যায়, তাহলে ফেইল মেসেজ দিবো
    if (financialData.length === 0) {
      return { status: "failed", message: "No financial data found" };
    }

    // FinancialModel ডেটা শেয়ার করা
    // আপনি এখানে চাইলে ব্যবহারকারীদের মধ্যে শেয়ার করার কোড লিখতে পারেন (যেমন, ইমেইল পাঠানো বা নোটিফিকেশন)
    const proxysetUsers = await User.find({
      _id: { $in: user.proxysetId }, // proxysetId এর মধ্যে থাকা ব্যবহারকারীদের খুঁজে বের করা
    });

    // আপনার শেয়ারিং লজিক এখানে যুক্ত করুন (যেমন ইমেইল বা নোটিফিকেশন পাঠানো)
    // উদাহরণস্বরূপ, ফাইন্যান্সিয়াল ডেটা শেয়ার করা:
    proxysetUsers.forEach((proxyUser) => {
      // এখানে আপনি নোটিফিকেশন বা ইমেইল পাঠাতে পারেন, যেমন:
      // sendEmail(proxyUser.email, financialData);
      console.log(`Shared financial data with ${proxyUser.email}`);
    });

    // সবশেষে, সফলভাবে ডেটা রিটার্ন করা
    return { status: "success", data: financialData };
  } catch (error) {
    return {status:'failed', data: error};
  }
};






