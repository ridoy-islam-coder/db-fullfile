import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,   
  db_uri: process.env.MongoDB_URI,
  jwt_secret: process.env.JWT_SECRET,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY 
 
};