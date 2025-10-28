import mongoose from "mongoose";

const MONGODB_URL = process.env.MongoDB_URI as string;

if (!MONGODB_URL) {
  throw new Error("Please define the MONGODB_URL environment variable inside .env");
}


type CachedMongoose ={
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}


const cached = (globalThis as unknown as { mongoose: CachedMongoose }).mongoose || {conn: null, promise: null};


export async function connectToDB(): Promise<typeof mongoose> {
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }
    if (cached.promise) {
        cached.conn = await cached.promise;
        return cached.conn;
    }

console.log("Creating new connection to MongoDB");

cached.promise = mongoose.connect(MONGODB_URL, {
    bufferCommands: false,
} as mongoose.ConnectOptions).then((m: typeof mongoose) => {
    cached.conn = m;
    cached.promise = null;
    return m;
}).catch((error: Error) => {
    console.error("Error connecting to MongoDB:", error);
    cached.promise = null;
    throw error;
});


cached.conn = await cached.promise;
(globalThis as unknown as { mongoose: CachedMongoose }).mongoose=cached;
return cached.conn;

}






