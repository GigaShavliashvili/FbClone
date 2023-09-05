import { GlobalLogic } from "./../DbLogic/GlobalLogic";
import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import ErrorResponse from "../utils/errorHandler";
import { checkFields } from "../utils/Auth/checkFields";
import AuthLogic from "../DbLogic/AuthLogic";
import fs from "fs";
import path from "path";
import { createAvatar } from "../interface/user";
export const getSingleUser = asyncHandler(
  async (_req: Request, _res: Response, _next: NextFunction) => {
    const userinfo = await GlobalLogic.findOne("id", +_req.params.id, [
      "birthDate",
      "firstName",
      "lastName",
      "email",
      "gender",
      "avatar",
      "id",
    ]);
    if (userinfo.id) {
if(userinfo.avatar){
  const avatarBase64:any = fs.readFileSync(
    `fs/user/${userinfo.id}/images/${userinfo.avatar?.avatar}`,
    "utf8"
  );
    return _res
  .status(200)
  .send({
    success: true,
    data: {
      ...userinfo,
      avatar: avatarBase64??null,
      gender: userinfo.gender.gender,
    },
  });
}else{
  return _res
  .status(200)
  .send({
    success: true,
    data:  {
      ...userinfo,
      gender: userinfo.gender.gender,
    },
  });
}
        
    }
    return _next(new ErrorResponse(`user dont found!`, 404));
  }
);

export const addAvatarToUser = asyncHandler(
  async (
    _req: Request<{}, {}, { Id: number; Avatar: string; isProfile: string }>,
    _res: Response,
    _next: NextFunction
  ) => {
    if (!_req.body.Id || !_req.body.Avatar) {
      return _next(new ErrorResponse(`unsuported formdata!`, 400));
    }
    const isProfile = _req.body.isProfile === "true" ? true : false;
    const folderPath: string = `fs/user/${_req.body.Id}/images/`;
    const filePath: string = `${Date.now()}.txt`;
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }
    fs.writeFile(folderPath + filePath, _req.body.Avatar, async (err) => {
      if (err) {
        return _next(new ErrorResponse(JSON.stringify(err), 400));
      }
      if (_req.body.isProfile) {
        AuthLogic.addAvatar({
          userId: +_req.body.Id,
          avatar: filePath,
          isProfile: isProfile,
        })
          .then(async (res: createAvatar) => {
            const newUser = await GlobalLogic.updateUser(
              "id",
              +_req.body.Id,
              "avatarId",
              res.id
            );
            if (newUser.avatarId) {
              return _res.status(200).json({ success: true, data: res.id });
            } else {
              return _next(new ErrorResponse("user could not update!", 400));
            }
          })
          .catch((err: ErrorResponse) =>
            _next(new ErrorResponse(JSON.stringify(err), 400))
          );
      }
    });
  }
);
