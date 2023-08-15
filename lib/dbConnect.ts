import mongoose from "mongoose";
import Restaurant from "../models/Restaurant";

const URL = process.env.API_URL as string;

const connectDB = async () => {
  console.log("MongoDB connecting...");
  await mongoose
    .connect(URL)
    .then(() => console.log("MongoDB connected"))
    .catch((e) => {
      return Promise.reject(e);
    });
};

export default connectDB;
