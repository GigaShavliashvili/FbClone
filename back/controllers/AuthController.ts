import {
  ComparePasswords,
  createRefreshToken,
  createToken,
  decodeToken,
} from "./../utils/Auth/createToken";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import ErrorResponse from "../utils/errorHandler";
import { NextFunction } from "express-serve-static-core";
import { RegisterBody } from "../interface/user";
import AuthLogic from "../DbLogic/AuthLogic";
import { checkFields } from "../utils/Auth/checkFields";

export const loginController = asyncHandler(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const undifinedValues = checkFields(_req.body);

    if (undifinedValues.length) {
      return _res.status(400).json({ msgs: undifinedValues }); /* _next(
        new ErrorResponse(
          `${Object.keys(_req.body)[undifinedValues[0]]} is undifined`,
          400
        )
      ); */
    }
    const exestUser = await AuthLogic.findOne("email", _req.body.email);
    if (exestUser.length) {
      console.info(exestUser[0], "authcontroler 29");
      const comparePass = await ComparePasswords(
        _req.body.password,
        exestUser[0].password
      );
      if (comparePass) {
        delete exestUser[0]["password"];
        const token = createToken(exestUser[0]);
        const refreshtoken = createRefreshToken(exestUser[0]);
        return _res.status(200).json({
          success: true,
          data: {
            token,
            refreshtoken,
          },
        });
      } else {
        return _res.status(404).json({ msg: "password  is incorrect!" });
      }
    } else {
      _res.status(404).json({ msg: `${_req.body.email} dont not found!` });
    }
  }
);

export const registerController = asyncHandler(
  async (
    _req: Request<{}, {}, RegisterBody>,
    _res: Response,
    _next: NextFunction
  ) => {
    console.log(_req.body);
    const undifinedValues = checkFields(_req.body);
    if (undifinedValues.length) {
      return _res.status(400).json({ msgs: undifinedValues }); /* _next(
        new ErrorResponse(
          `${Object.keys(_req.body)[undifinedValues[0]]} is undifined`,
          400
        )
      ); */
    } else {
      const exestUser = await AuthLogic.findOne("email", _req.body.email);
      console.log(exestUser);
      if (!exestUser.length) {
        const newUser = await AuthLogic.createUser(_req.body);
        console.info(newUser);
        return _res.status(200).json({ success: true, data: newUser.id });
      } else {
        return _res.status(400).json({ msg: "this email already exists" });
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
