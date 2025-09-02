import nodemailer from "nodemailer";
import { config } from "../app/config";


export const SendEmail = async (EmailTo: string,  EmailText: string,  EmailSubject: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: config.email_user,
      pass: config.email_pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
        from:'Task manager MERN <rkrafikridoy5887@gmail.com>',
        to:EmailTo,
        subject:EmailText,
        text:EmailSubject
  };

  return transporter.sendMail(mailOptions);
  };