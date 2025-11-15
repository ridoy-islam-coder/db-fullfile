import { model, Schema, Types } from "mongoose"
import { IUser, Role } from "./user.interface"

const userSchema =  new Schema<IUser>({
  firstName: {
    type: String,
  
  
  },
  lastName: {
    type: String,
  
  },
  dateOfBirth: {
    type: Date,
  
  },
  city: {
    type: String,

  },
  state: {
    type: String,
  
  },
  company: {
    type: String,
   
  },
  yearStarted: {
    type: Number,
   
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensures email is unique
    match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Simple email validation regex
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // You can adjust the minimum password length as needed
   
  },
  phoneNumber: {
    type: String,
    required: true,
    // match: /^\d{10}$/, 
    // Example pattern for 10-digit phone numbers
  },
   otp:{type:String},
      imgUrl: {
        type: String,
         default: 'https://i.ibb.co/z5YHLV9/profile.png',
    },
     followers: [{ type: Types.ObjectId, ref: "User" }], 
     proxysetId: [{ type: Types.ObjectId, ref: "User" }],
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.USER
    },
  
}, {
    timestamps: true,versionKey:false
})

// // Virtual
// userSchema.virtual('fullName').get(function () {
//   return `${this.firstName || ""} ${this.lastName || ""}`.trim();
// });

// // Enable virtuals in JSON
// userSchema.set("toJSON", { virtuals: true });
// userSchema.set("toObject", { virtuals: true });


export const User = model<IUser>("User", userSchema)