import express from "express"
import { authCheck } from "../middleware/AuthMiddleWare"
import { addPost, getSingleUsersPost } from "../controllers/PostController"
const PostRouter = express.Router()


PostRouter.post("/create",authCheck,addPost)
PostRouter.get("/singleUsersPost", authCheck,getSingleUsersPost)
export default PostRouter