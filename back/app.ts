import express from "express";
import cors from "cors";
import AuthRouter from "./router/AuthRouter";
import errorHandler from "./middleware/Error";
import dotenv from "dotenv";
import AppRouter from "./router/AppRouter";
import PostRouter from "./router/PostRouter";
const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cors({ origin:"*" /* "http://localhost:3000" */, credentials: true }));
app.use("/auth", AuthRouter);
app.use("/app", AppRouter);
app.use("/app/post", PostRouter);
app.use(errorHandler);

export default app;
