import {  Request, Response } from "express";
import { subscriptionplanModel } from "./subscriptions.model";


export  const creatsubscriptionplan = async (req:Request,res:Response) => {
  try {
    const {name,stripe_price_id,trial_days,have_trial,amount,type}=req.body;

    const subscriptionplan = new subscriptionplanModel({  
      name,
      stripe_price_id,
      trial_days,
      have_trial,
      amount,
      type
    });
    await subscriptionplan.save();
    res.status(200).json({ success: true, message: "Subscription plan created successfully", data: subscriptionplan});
  } catch (error) {
    res.status(400).json({success:false, message: "Internal server error", error });
  }
}










export const getsubscriptionplan = async (req:Request,res:Response) => {
  try {
    const subscriptionplan = await subscriptionplanModel.find();
    res.status(200).json({ success: true, message: "Subscription plan fetched successfully", data: subscriptionplan});
  } catch (error) {
    res.status(400).json({success:false, message: "Internal server error", error });
  }
}
