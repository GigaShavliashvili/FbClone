import { PrismaClient } from "@prisma/client";
import asyncHandler from "express-async-handler";
const prisma = new PrismaClient();
export const GlobalLogic = {
  findOne: asyncHandler(
    async (key: string, value: string | number, select?: string[]) => {
      const selectObj: any = {};
      select?.forEach((key) => {
        selectObj[key] = true;
      });

      return await prisma.user.findUnique({
        where: {
          [key]: value,
        },
        select: Object.keys(selectObj).length ? selectObj : undefined,
      });
    }
  ),
  updateUser: asyncHandler(
    async (
      key: string,
      keyValue: string | number,
      updateKey: string,
      updateValue: string | number | boolean
    ) => {
      return await prisma.user.update({
        where: {
          [key]: keyValue,
        },
        data: {
          [updateKey]: updateValue,
        },
      });
    }
  ),
};
