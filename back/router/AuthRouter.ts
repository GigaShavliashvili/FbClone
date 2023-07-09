import express from "express";
import {
  loginController,
  refreshToken,
  registerController,
} from "../controllers/AuthController";
import { authCheck, checkRefreshToken } from "../middleware/AuthMiddleWare";
const AuthRouter = express.Router();

AuthRouter.route("/login").post(loginController);
AuthRouter.route("/register").post(registerController);
AuthRouter.route("/refreshtoken").post(checkRefreshToken, refreshToken);
AuthRouter.route("/test").get(authCheck, async (req, res) => {
  res.status(200).send({ msg: "refresh token working successfully" });
});

export default AuthRouter;
