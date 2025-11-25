import mongoose, { Schema, type Document } from "mongoose"

export interface IPayment extends Document {
  user_id: mongoose.Types.ObjectId
  customer_id: string
  card_id: string
  name: string
  card_no: string
  brend: string
  month: string
  year: number
 
  createdAt: Date
  updatedAt: Date
}


export interface IPlan extends Document {
 
  name: string
  stripe_price_id: string
  trial_days: number
  have_trial: boolean
  amount: number
  type: number
  createdAt: Date
  updatedAt: Date
}




export interface ISubscription extends Document {
  user_id: mongoose.Types.ObjectId
  stripe_Subscription_id: string
  stripe_Subscription_schedule_id: string
  stripe_customer_id: string
  subscription_plan_price_id: mongoose.Types.ObjectId
  plan_amount: number
  plan_amount_currency: string
 plan_interval: string
 plan_interval_count: number
  plan_period_start: Date
  plan_period_end: Date
  trial_end: Date
  status: "active" | "canceled"
  cancel: boolean
  created: Date
  canceled_at: Date | null
  createdAt: Date
  updatedAt: Date
}


export interface IPanding extends Document {
  user_id: mongoose.Types.ObjectId
  customer_id: string
  card_id: string
  charge_id: string
  amount: number
  createdAt: Date
  updatedAt: Date
}





const subscriptionSchema = new Schema<ISubscription>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
   
    },
    stripe_Subscription_id: {
      type: String,
      required: false,
    //   unique: true,
    },
    stripe_Subscription_schedule_id: {
      type: String,
      required: false,
    },
     stripe_customer_id: {
      type: String,
      required: true,
    },
     subscription_plan_price_id: {
      type:  Schema.Types.ObjectId,
      ref: "subscriptionplan",
    },

     plan_amount: {
      type: Number,
        required: true,
    },
    plan_amount_currency: {
      type: String,
        required: true,
    },
     plan_interval: {
      type: String,
        required: false,
    },
     plan_interval_count: {
      type: Number,
        required: false,
    },
    created:{
        type: Date,
        required: true,
    },
    plan_period_start:{
        type: Date,
        required: true,
    },
     plan_period_end:{
        type: Date,
        required: true,
    },
    trial_end:{
        type: Date,
        default:null
    },
    status:{
      type: String,
      enum: ["active", "canceled" ],
    required: true,
    },
    cancel:{
        type: Boolean,
        default:false
    },
     canceled_at:{
        type: Date,
        default:null
    }

  },
  { timestamps: true },
);




const subscriptionplanMoSchema = new Schema<IPlan>(
  {
  
    name: {
      type: String,
      required: true,
    },

   stripe_price_id: {
      type: String,
      required: true,
    },
    trial_days: {
      type: Number,
      required: true,
    },
    have_trial: {
      type: Boolean,
      default: false,
    },
   amount: {
      type: Number,
      required: true,
   },
   type:{
    type: Number,
    required: true,
   }
  },
  { timestamps: true },
)




const cardDetailSchema = new Schema<IPayment>(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    customer_id: {
      type: String,
      required: true,
      
    },
    card_id: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    card_no: {
      type: String,
      required: false,
    },
     brend: {
      type: String,
      required: false,
    },
     month: {
      type: String,
      required: false,
    },
      year: {
      type: Number,
      required: false,
    },
  
  },
  { timestamps: true },
);




const pandingFeesModelSchema = new Schema<IPanding>(
  {
  
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
   
    },
      charge_id: {
      type: String,
      required: true,
      
    },
    customer_id: {
      type: String,
      required: true,
      
    },
    amount: {
      type: Number,
      required: true,
      
    },
   
  },
  { timestamps: true },
)











export const SubscriptionDetailModel = mongoose.model<ISubscription>("SubscriptionDetail", subscriptionSchema);
export const subscriptionplanModel = mongoose.model<IPlan>("subscriptionplan", subscriptionplanMoSchema);
export const cardDetailModel = mongoose.model<IPayment>("cardDetail", cardDetailSchema);
export const pandingFeesModel = mongoose.model<IPanding>("pandingFees", pandingFeesModelSchema);