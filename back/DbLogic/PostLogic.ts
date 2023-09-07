import asyncHandler from "express-async-handler";
import { Post } from "../interface/post";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const PostLogic = {
  createUser: asyncHandler(async (body: Post) => {
    return await prisma.post.create({
      data: {
        authorId: body.authorId,
        title: body.title,
        imagePath: body.imagePath,
      },
    });
  }),
  getSignleUsersPosts: asyncHandler(
    async (params: { id: number; limit?: number; from?: number }) => {
      return await prisma.post.findMany({
        where: {
          authorId: params.id,
        },
        orderBy: {
          created_at: "desc",
        },
        select: {
          id: true,
          title: true,
          comment: {
            select: {    
parentId:true,
id:true,
text:true,
              author: {
                select: {
                  firstName: true,
                  lastName: true,
                  avatar: {
                    select:{
                      avatar:true,
                      userId:true
                    }
                  },
                },
              },
            },
          },
          imagePath: true,
          updated_at: true,
          created_at: true,
        },
        skip: params.from,
        take: params.limit,
      });
    }
  ),
  /*   goupByTest: asyncHandler(async () => {
    return await prisma.post.groupBy({
        by: ['authorId'],
        _count:true
      });
  }), */
};
