import express from "express";
import { connectDB } from "./config/dbConfig";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use("/api/auth", routerUsers);

mongoose
  .connect("mongodb://localhost:27017/prueba")
  .then(() => console.log("mongoDB conectado"))
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
