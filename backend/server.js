import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./config/db";

dotenv.config();

ConnectDB();

const app = express();
const PORT = process.env.PORT || 5001;

//Midlewares
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server running on port: ", PORT);
});
