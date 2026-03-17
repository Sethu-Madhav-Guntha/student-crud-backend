import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import userRouter from "./src/routes/user.route.js";

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT;

app.use("/api/users", userRouter);

app.listen(port, () => {
    console.log(`App is Listening at Port: ${port}`);
});