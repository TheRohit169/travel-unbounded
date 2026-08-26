import mongoose from 'mongoose';

let cached = globalThis.mongoose;

if (!cached) {
  cached = globalThis.mongoose = {
    conn: null,
    promise: null,
  };
}

export default async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGODB_URI?.trim();

  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable.');
  }

  if (!MONGODB_URI.startsWith('mongodb://') && !MONGODB_URI.startsWith('mongodb+srv://')) {
    throw new Error(
      'Invalid MONGODB_URI. It must start with mongodb:// or mongodb+srv://'
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;

  return cached.conn;
}