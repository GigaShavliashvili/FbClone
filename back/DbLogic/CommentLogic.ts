import { PrismaClient } from "@prisma/client";
import asyncHandler from "express-async-handler";
const prisma = new PrismaClient();
export const commentLogic = {
  addComment: asyncHandler(async (body: any) => {
    console.log(body)
    return await prisma.comment.create({
      data: body,
    });
  }),
};
