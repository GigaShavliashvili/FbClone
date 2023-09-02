import {
  ComparePasswords,
  createRefreshToken,
  createToken,
} from "./../utils/Auth/createToken";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import ErrorResponse from "../utils/errorHandler";
import { NextFunction } from "express-serve-static-core";
import { RegisterBody } from "../interface/user";
import AuthLogic from "../DbLogic/AuthLogic";
import { checkFields } from "../utils/Auth/checkFields";
import { GlobalLogic } from "../DbLogic/GlobalLogic";

export const loginController = asyncHandler(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const undifinedValues = checkFields(_req.body);

    if (undifinedValues.length) {
      return _res.status(400).json({ msgs: undifinedValues });
    }
    const exestUser = await GlobalLogic.findOne("email", _req.body.email);
    if (exestUser) {
      console.info(exestUser, "authcontroler 29");
      const comparePass = await ComparePasswords(
        _req.body.password,
        exestUser.password
      );
      if (comparePass) {
        delete exestUser["password"];
        const token = createToken(exestUser);
        const refreshtoken = createRefreshToken(exestUser);
        return _res.status(200).json({
          success: true,
          data: {
            token,
            refreshtoken,
          },
        });
      } else {
        return _next(
          new ErrorResponse(
            `password is incorrect1`,
            400
          )
        );
      }
    } else {
     return _next(
        new ErrorResponse(
          `${_req.body.email} font found!`,
          400
        )
      );
    }
  }
);

export const registerController = asyncHandler(
  async (
    _req: Request<{}, {}, RegisterBody>,
    _res: Response,
    _next: NextFunction
  ) => {
    const undifinedValues = checkFields(_req.body);
    if (undifinedValues.length) {
      return _res.status(400).json({ msgs: undifinedValues }); 
    } else {
      const exestUser = await GlobalLogic.findOne("email", _req.body.email);
      if (!exestUser) {
        const newUser = await AuthLogic.createUser(_req.body);
        return _res.status(200).json({ success: true, data: newUser.id });
      } else {
        return _next(
          new ErrorResponse(
            `this email already exists`,
            400
          )
        );
      }
    }
  }
);

export const refreshToken = asyncHandler(async (_req: any, _res: Response) => {
  const user = _req.user;
  delete user.exp;
  delete user.iat;
  if (user) {
    const accessToken = createToken(user);
    return _res.status(200).json({ success: true, data: accessToken });
  }
});
