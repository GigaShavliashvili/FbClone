import asyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const GlobalLogic = {
  findOne: asyncHandler(
    async (key: string, value: string | number, select?: string[]) => {
      const selectObj: any = {};
      select?.forEach((key) => {
        selectObj[key] = true;
      });
      return await prisma.user.findMany({
        where: {
          [key]: value,
        },
        select: Object.keys(selectObj).length ? selectObj : undefined,
      });
    }
  ),
};
