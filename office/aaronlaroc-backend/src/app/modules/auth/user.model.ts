import { model, Schema } from "mongoose"
import { IUser, Role } from "./user.interface"

const userSchema =  new Schema<IUser>({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  yearStarted: {
    type: Number,
    required: true
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
    minlength: 6 // You can adjust the minimum password length as needed
  },
  phoneNumber: {
    type: String,
    required: true,
    match: /^\d{10}$/, // Example pattern for 10-digit phone numbers
  },
      imgUrl: {
        type: String,
         default: 'https://i.ibb.co/z5YHLV9/profile.png',
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.USER
    },
}, {
    timestamps: true
})

export const User = model<IUser>("User", userSchema)