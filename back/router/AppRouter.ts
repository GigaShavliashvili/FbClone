import express from "express";
import { authCheck } from "../middleware/AuthMiddleWare";
import { addAvatarToUser, getSingleUser } from "../controllers/UserControler";
import multer from "multer"

const upload = multer()

const AppRouter = express.Router();

AppRouter.route("/user/:id").get(authCheck, getSingleUser);
AppRouter.route("/user/avatar").post(upload.array('files'), addAvatarToUser);

export default AppRouter;
