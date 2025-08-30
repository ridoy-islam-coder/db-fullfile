


// import jwt from "jsonwebtoken";
// import { config } from "../app/config";



// export const TokenEncode = (role: string, user_id: string) => {
    
//     const KEY =config.jwt_secret as string;
//     const JWT_EXPIRE_TIME = config.jwt_expire_time ?? "1h"; 
//     const EXPIRE = { expiresIn: JWT_EXPIRE_TIME as jwt.SignOptions["expiresIn"] };
//     const PAYLOAD = { role: role, user_id: user_id };
//     return jwt.sign(PAYLOAD, KEY, EXPIRE);
// };




// interface JwtPayload {
//   role: string;
//   user_id: string;
//   iat?: number;
//   exp?: number;
// }

// export const TokenDecode = (token: string): JwtPayload | null => {
//     try {
//         return jwt.verify(token, config.jwt_secret as string) as JwtPayload;
//     } catch (e) {
//         return null;
//     }
// }