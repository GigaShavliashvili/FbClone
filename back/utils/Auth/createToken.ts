import { createTokenBody} from "../../interface/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const salt = bcrypt.genSaltSync(12);
export const HashPassword = (password: string) =>
  bcrypt.hashSync(password, salt);

export const ComparePasswords = async (
  password: string,
  hashed_password: string
) => {
  return await bcrypt.compare(password, hashed_password);
};
export const createToken = (user: createTokenBody) =>
  jwt.sign(user, `${process.env.SECRET_KEY}`, { expiresIn: "30s" });

export const createRefreshToken = (user: createTokenBody) =>
  jwt.sign(user,  `${process.env.REFRESH_SECRET_KEY}`, { expiresIn: "8h" });

  export const decodeToken = (token:string) => jwt.decode(token)