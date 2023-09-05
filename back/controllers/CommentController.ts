import { NextFunction, Request, Response } from 'express';
import asyncHandler from "express-async-handler";
import { commentLogic } from '../DbLogic/CommentLogic';
import ErrorResponse from '../utils/errorHandler';
export const addCommentController = asyncHandler(async(_req:Request, _res:Response,_next:NextFunction)=>{
    console.log(_req.body)
 const newComment = await commentLogic.addComment({
    ..._req.body
 })
 if(newComment.id){
    return _res.status(200).json({success:true, data:newComment})

 }else{
    return _next(new ErrorResponse("somthing failed!", 404))
 }
})