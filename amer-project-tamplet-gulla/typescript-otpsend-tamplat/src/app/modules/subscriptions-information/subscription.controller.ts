import {  Request, Response } from "express";
import { SubscriptionDetailModel, subscriptionplanModel } from "./subscriptions.model";

declare global {
  namespace Express {
    interface Request {
      user?: { id: string };
    }
  }
}


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





export const addpalndatails = async (req:Request,res:Response) => {
  try {
    const {plan_id}=req.body;

    const plan = await subscriptionplanModel.findOne({_id:plan_id});
    if(!plan){
      return res.status(404).json({success:false, message: "Plan not found"});
    }

      const user_id = req.user?.id;
  

   const haveBuyedAnyPlan=await  SubscriptionDetailModel.countDocuments({user_id})

       var subs_msg='';
    if(haveBuyedAnyPlan == 0 && plan.have_trial === true){
    subs_msg=`you have availed a trial period of ${plan.trial_days} days. After the trial period, you will be charged $${plan.amount} for the ${plan.name} plan.`;
    }
    else{
      subs_msg=`we will charge you $${plan.amount} for the ${plan.name} plan.`;
    }
   
    res.status(200).json({ success: true, message: subs_msg, data: plan});
  } catch (error) {
    res.status(400).json({success:false, message: "Internal server error", error });
  }
}