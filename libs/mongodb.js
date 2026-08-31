// import mongoose from "mongoose";

// const connectMongoDB = async () => {
//       try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//         });
//         console.log("Connected to MongoDB.");
//       } catch (error) {
//         console.log(error);
//       }
//   }
  
//   export default connectMongoDB;

// libs/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectMongoDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log("Connected to MongoDB.");
        return mongoose;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectMongoDB;