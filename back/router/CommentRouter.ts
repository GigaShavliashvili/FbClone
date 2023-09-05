import express from "express";
import { authCheck } from "../middleware/AuthMiddleWare";
import {  addCommentController } from "../controllers/CommentController";
const CommentRouter = express.Router();
CommentRouter.post("/addComment", authCheck, addCommentController );
export default CommentRouter;
