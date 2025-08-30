import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,   
  db_uri: process.env.MongoDB_URI,
  jwt_secret: process.env.JWT_SECRET,
  // jwt_expire_time: process.env.JWT_EXPIRE_TIME,

  email_host: process.env.EMAIL_HOST,
  email_port: process.env.EMAIL_PORT,
  email_security: process.env.EMAIL_SECURITY,
  email_user: process.env.EMAIL_USER,
  email_pass: process.env.EMAIL_PASS,
  email_un_auth: process.env.EMAIL_UN_AUTH,
  WEB_CACHE: process.env.WEB_CACHE,
  max_json_size: process.env.MAX_JSON_SIZE,
  url_encode: process.env.URL_ENCODE,
  request_time: process.env.REQUEST_TIME, 
  request_number: process.env.REQUEST_NUMBER, 

 
};