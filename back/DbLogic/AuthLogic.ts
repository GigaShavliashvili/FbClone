import { PrismaClient } from "@prisma/client";
import { RegisterBody } from "../interface/user";
import asyncHandler from "express-async-handler";
import { HashPassword } from "../utils/Auth/createToken";
const prisma = new PrismaClient();
const AuthLogic = {
  createUser: asyncHandler(async (body: RegisterBody) => {
    return await prisma.user.create({
      data: { ...body, password: HashPassword(body.password) },
    });
  }),

  addAvatar: asyncHandler(async (body: { userId: number; avatar: string,isProfile:boolean }) => {
    return await prisma.avatar.create({
      data: body,
    });
  }),
};

export default AuthLogic;
