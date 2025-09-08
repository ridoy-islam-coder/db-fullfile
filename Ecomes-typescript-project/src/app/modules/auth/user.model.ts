import { model, Schema } from "mongoose"
import { IUser, Role } from "./user.interface"

const userSchema =  new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
      phone: {
        type: Number,
        minlength: 11,
    },
    imgUrl: {
        type: String,
         default: 'https://i.ibb.co/z5YHLV9/profile.png',
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
     otp:{type:String,default:"0"},

    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.USER
    },
}, {
    timestamps: true
})

export const User = model<IUser>("User", userSchema)

// Token Blacklist Schema for invalidated tokens
const tokenBlacklistSchema = new Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '7d' // Token expires after 7 days
    }
});

export const TokenBlacklist = model("TokenBlacklist", tokenBlacklistSchema);

