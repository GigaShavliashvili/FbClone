import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { GlobalLogic } from "../DbLogic/GlobalLogic";
import ErrorResponse from "../utils/errorHandler";
import { checkFields } from "../utils/Auth/checkFields";
import AuthLogic from "../DbLogic/AuthLogic";

export const getSingleUser = asyncHandler(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const userinfo = await GlobalLogic.findOne("id", +_req.params.id, [
      "birthDate",
      "firstName",
      "lastName",
      "email",
      "gender",
      "id",
    ]);
    if (userinfo.length) {
      return _res.status(200).send({ success: true, data: userinfo });
    }
    return _next(new ErrorResponse(`somthing went wrong!`, 400));
  }
);

export const addAvatarToUser = asyncHandler(
  async (
    _req: Request<{}, {}, { Id: number; Avatar: string }>,
    _res: Response,
    _next: NextFunction
  ) => {
    const undifinedValues = checkFields(_req.body);
    if (undifinedValues.length) {
      return _res.status(400).json({ msgs: undifinedValues });
    }
    /*     console.log(_req.body.Avatar); */
    const avatar = AuthLogic.addAvatar({
      userId: +_req.body.Id,
      avatar: _req.body.Avatar,
    });
    return _res.status(200).json({ success: true, data: avatar.id });
  }
);
