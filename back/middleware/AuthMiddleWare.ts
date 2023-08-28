import jwt from "jsonwebtoken";
import { Response } from "express";
import { NextFunction } from "express-serve-static-core";

async function authCheck(_req: any, _res: any, _next: any) {
  const token = _req.get("Authorization").split(" ")[1];
/*   console.log(token); */
  jwt.verify(token, `${process.env.SECRET_KEY}`, (err: any, user: any) => {
    if (err) {
      _res.status(403).json(err);
      console.log(err);
    } else if (user) {
/*       console.log(user); */
      _next();
    }
  });
}

async function checkRefreshToken(
  _req: any,
  _res: Response,
  _next: NextFunction
) {
  const refreshToken = _req.body.refreshToken;
  if (!refreshToken) {
    _res.status(401).json({ msg: "refresh token dont found" });
  } else {
    jwt.verify(
      refreshToken,
      `${process.env.REFRESH_SECRET_KEY}`,
      (err: any, user: any) => {
        if (err) _res.status(403).json({ msg: "invalid refresh token" });
        _req.user = user;
        _next();
      }
    );
  }
}
export { checkRefreshToken, authCheck };
