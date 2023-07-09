import { NextFunction, Request, Response } from 'express';
import asyncHandler from "express-async-handler";


export const getSingleUser = asyncHandler(async (_req: Request, _res: Response, _next: NextFunction) => {
    console.log(_req)
    _res.status(200).send(_req)
})