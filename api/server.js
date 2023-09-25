import express, { json } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = express();

config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw error;
  }
};

//middlewares

app.use(express.json()); //sem este middleware a aplicação não aceitará JSON 

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(8080, () => {
  connect();
  console.log(`DB Connected. \nServer Running at: http://localhost:8080`);
});
