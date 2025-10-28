import mongoose from "mongoose";

const MONGODB_URL = process.env.MongoDB_URI as string;

if (!MONGODB_URL) {
  throw new Error("Please define the MONGODB_URL environment variable inside .env");
}