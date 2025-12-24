import mongoose from "mongoose";

let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (cached.conn) {
        return cached.conn;
    }

    if (!MONGODB_URI) {
        console.warn("MONGODB_URI is missing. This is expected during build time if not provided, but will fail at runtime.");
        return null;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;

