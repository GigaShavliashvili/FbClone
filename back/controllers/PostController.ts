import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Post } from "../interface/post";
import ErrorResponse from "../utils/errorHandler";
import { PostLogic } from "../DbLogic/PostLogic";
export const addPost = asyncHandler(
  async (_req: Request<{}, {}, Post>, _res: Response, _next: NextFunction) => {
    if (!_req.body.title && !_req.body.image) {
      return _next(new ErrorResponse("post is empty", 404));
    }
    const newPost = await PostLogic.createUser({
      ..._req.body,
      authorId: +_req.body.authorId,
    });
    console.log(newPost, "post");
    if (newPost.id) {
      return _res.status(200).json({ success: true, data: newPost.id });
    } else {
      return _next(new ErrorResponse("post could not be created!", 500));
    }
  }
);
export const getSingleUsersPost = asyncHandler(async (_req: Request<{}, {}, {}, {id:string, limit?:string, from?:string}>, _res: Response, _next: NextFunction) =>{
if( _req.query.id){
  const from = _req.query.from ? +_req.query.from : 0
  const limit = _req.query.limit ? +_req.query.limit : 30
  const usersPosts = await PostLogic.getSignleUsersPosts({id:+_req.query.id, limit, from})
/*   const groupTest = await PostLogic.goupByTest() */
  return _res.status(200).json({success:true, data:usersPosts })
}else {
 return _next(new ErrorResponse("user id is required!", 400))
}
})