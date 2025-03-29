import mongoose from "mongoose";

export async function connectDB() {
  const link = "mongodb://localhost:27017/prueba";

  try {
    await mongoose.connect("mongodb://localhost:27017/prueba");
  } catch (error) {
    console.log(error);
  }
}
