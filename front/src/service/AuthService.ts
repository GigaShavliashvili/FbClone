import axios from "axios";
import { ResponseSuccess } from "../GlobalInterface";

export interface RegisterBody {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  birthDate?: string;
  gender?: string;
}

export const AuthServices = {
  register: async (body: RegisterBody) => {
    return await axios
      .post("http://localhost:3500/auth/register", body)
      .then(
        ({
          data,
        }: {
          data: ResponseSuccess<{
            success: boolean;
            data: { token: string; refreshtoken: string };
          }>;
        }) => {
          return data;
        }
      )
      .catch((error) => console.error(error));
  },
};
