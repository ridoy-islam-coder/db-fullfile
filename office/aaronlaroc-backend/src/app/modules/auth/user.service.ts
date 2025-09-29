import { User } from "./user.model";
import bcrypt from "bcryptjs";
 import jwt from "jsonwebtoken";
import { config } from './../../config/index';
import { NextFunction, Request } from "express";
import mongoose from 'mongoose';
// Extend Express Request type to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: {
        _id?: string;
        [key: string]: any;
      };
    }
  }
}


 export const existingUser=async (phoneNumber: string, email: string, password: string) => {
    // Check if user already exists
    const user = await User.findOne({ $or: [{ phoneNumber }, { email }] });
    if (user) {
        throw new Error("User already exists");
    }

    const hsedpassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ phoneNumber, email, password:hsedpassword });
    await newUser.save();

    return newUser;

}



export const LoginInUser = async (email: string, password: string) => {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }

// Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid password");
    }

    const token = jwt.sign(
        { userId: user._id, role: user.role },
        config.jwt_secret as string, { expiresIn: "24h" }
    );

    return {
       user,token
    };
}




export const getprofileService =async (req:Request) => {
  try {

    let user_id=req.user?.id;
    let data=await User.findOne({"_id":user_id})
    return ({status:"success",message:"User profile successfully",data:data})
  } catch (error) {
    return {status:'failed', data: error};
  }
}





export const profileupdateService =async (req:Request) => {
  try {

        let reqBody=req.body;
        let user_id=req.user?.id;
       let data= await User.updateOne({"_id":user_id},reqBody)
        return ({status:"success",Message:"User Update successfully",data:data})
  } catch (error) {
    return {status:'failed', data: error};
  }
}





export const getallUsers = async () => {

  try {

        const users = await User.find();
        return ({status:"success",Message:"Get All User Data successfully",data:users})
  } catch (error) {
    return {status:'failed', data: error};
  }

}





export const Searchbarservice = async (searchTerm:string) => {

  try {
 
    const users = await User.find({
      $or: [
        { email: { $regex: searchTerm, $options: 'i' } },  // Case-insensitive search for email
        { phoneNumber: { $regex: searchTerm, $options: 'i' } },  
      ]
    },{_id: 0,role:0,password:0,createdAt:0,updatedAt:0,__v:0}); // Case-insensitive search for phoneNumber});

    return {
      status: "success",
      message: "Search results successfully fetched",
      data: users
    };
  } catch (error) {
    return {status:'failed', data: error};
  }

}






export const followUserService = async (req: Request) => {
  try {
    const userId = req.user?.id; 
    const followedUserId = req.params.followedUserId;




    if (!userId || !followedUserId || !mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(followedUserId)) {
      return { status: 'failed', message: 'Invalid user or followed user ID' };
    }

    if (userId === followedUserId) {
      return { status: 'failed', message: "You cannot follow yourself" };
    }

    const followedUserObjectId = new mongoose.Types.ObjectId(followedUserId);

  
    const user = await User.findById(userId);
    if (!user) {
      return { status: 'failed', message: 'User not found' };
    }


    const followedUser = await User.findById(followedUserObjectId);
    if (!followedUser) {
      return { status: 'failed', message: "Followed user not found" };
    }

   
    if (user.followers.includes(followedUserObjectId)) {
      return { status: 'failed', message: "You are already following this user" };
    }

 
    user.followers.push(followedUserObjectId);

 
    await user.save();

    return { status: 'success', message: 'User followed successfully', data: user };
  } catch (error) {
      return {status:'failed', data: error};
  }
};




// Unfollow API
export const unfollowUserService = async (req: Request) => {
  try {
    const userId = req.user?.id; 
    const followedUserId = req.params.followedUserId;

 
    if (!userId || !followedUserId || !mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(followedUserId)) {
     
         return {  status: 'failed', message: 'Invalid user or followed user ID'  };
    }

  
    if (userId === followedUserId) {
      
       return { status: 'failed', message: "You cannot unfollow yourself"  };
    }

    const user = await User.findById(userId);
    if (!user) {
            return { status: 'failed', message: 'User not found' };
    }

    const followedUserObjectId = new mongoose.Types.ObjectId(followedUserId);

    const followedUser = await User.findById(followedUserObjectId);
    if (!followedUser) {
      
      return { status: 'failed', message: "Followed user not found" };
    }

    if (!user.followers.includes(followedUserObjectId)) {

       return {  status: 'failed', message: "You are not following this user"  };
    }

    user.followers = user.followers.filter(follower => follower.toString() !== followedUserId);

    await user.save();
   return { status: 'success',  message: 'User unfollowed successfully', data: user };

  } catch (error) {
    console.error(error);
   return {status:'failed', data: error};
  }
};






// Get the count of users the current user is following
export const getFollowingCount = async (req: Request) => {
  try {
    const userId = req.user?.id;  
    if (!userId) {
    
       return { status: 'failed', message: 'User not authenticated'  };
    }

  
    const user = await User.findById(userId);
    if (!user) {
      
       return { status: 'failed',  message: 'User not found'  };
    }

    // ফলো করা ইউজারদের সংখ্যা বের করা হচ্ছে
    const followingCount = user.followers.length;
      return {  status: 'success', message: `You are following ${followingCount} users`,count:followingCount };
  } catch (error) {
    console.error(error);
      return {status:'failed', data: error};
  }
};










// export const ProxysetService = async (req: Request) => {
//   try {
//     const userId = req.user?.id; 
//     const ProxysetUserId = req.params.proxysetId;

  


//     if (!userId || !ProxysetUserId || !mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(ProxysetUserId)) {
//       return { status: 'failed', message: 'Invalid user or followed user ID' };
//     }

//     if (userId === ProxysetUserId) {
//       return { status: 'failed', message: "You cannot follow yourself" };
//     }

//     const ProxysetUserIdObjectId = new mongoose.Types.ObjectId(ProxysetUserId);

  
//     const user = await User.findById(userId);
//     if (!user) {
//       return { status: 'failed', message: 'User not found' };
//     }


//     const followedUser = await User.findById(ProxysetUserIdObjectId);
//     if (!followedUser) {
//       return { status: 'failed', message: "Followed user not found" };
//     }

   
//     if (user.proxysetId.includes(ProxysetUserIdObjectId)) {
//       return { status: 'failed', message: "You are already following this user" };
//     }

 
//     user.proxysetId.push(ProxysetUserIdObjectId);

 
//     await user.save();

//     return { status: 'success', message: 'User followed successfully', data: user };
//   } catch (error) {
//       return {status:'failed', data: error};
//   }
// };




export const ProxysetService = async (req: Request) => {
  try {
    const userId = req.user?.id; 
    const ProxysetUserId = req.params.proxysetId;

    if (!userId || !ProxysetUserId || !mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(ProxysetUserId)) {
      return { status: 'failed', message: 'Invalid user or followed user ID' };
    }

    if (userId === ProxysetUserId) {
      return { status: 'failed', message: "You cannot follow yourself" };
    }

    const ProxysetUserIdObjectId = new mongoose.Types.ObjectId(ProxysetUserId);

    const user = await User.findById(userId);
    if (!user) {
      return { status: 'failed', message: 'User not found' };
    }

    const followedUser = await User.findById(ProxysetUserIdObjectId);
    if (!followedUser) {
      return { status: 'failed', message: "Followed user not found" };
    }

    if (user.proxysetId.length >= 2) {
    
      user.proxysetId[0] = ProxysetUserIdObjectId; 

      await user.save();

      return { status: 'success', message: 'User followed successfully, updated first ProxySet', data: user };
    }

    
    if (user.proxysetId.includes(ProxysetUserIdObjectId)) {
      return { status: 'failed', message: "You are already following this user" };
    }

    user.proxysetId.push(ProxysetUserIdObjectId);

    await user.save();

    return { status: 'success', message: 'User followed successfully', data: user };
  } catch (error) {
      return {status:'failed', data: error};
  }
};








export const getProxysetData = async (userId: string) => {
  try {
    // আপনার প্রাথমিক ব্যবহারকারী ডেটা উদ্ধার
    const user = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "proxysetId", 
          foreignField: "_id", 
          as: "proxysetDetails", 
        },
      },
      {
        $project: {
          _id: 0,
          proxysetDetails: {
            email: 1,
            phoneNumber: 1,
            imgUrl: 1,
            role: 1,
            followers: 1,
          },
        },
      },
    ]);

    if (user.length === 0) {
      return { status: "failed", message: "User not found" };
    }

    return { status: "success", data: user[0] };
  } catch (error) {
    return {status:'failed', data: error};
  }
};
