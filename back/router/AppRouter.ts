import express from "express";
import { authCheck } from "../middleware/AuthMiddleWare";
import { getSingleUser } from "../controllers/UserControler";
const AppRouter = express.Router();

AppRouter.route("/user/:id").get(authCheck, getSingleUser);

export default AppRouter;
