import { ResponseSuccess } from "../../GlobalInterface";
import $api from "../../utils/http";


declare global {
	interface FormData {
		entries(): Iterator<[string, string | Blob]>;
	}
}

export const UserService = {

  addAvatar: async (id?: number, avatar?: string) => {
    const formData: any = new FormData();
    formData.append("Id", id);
    formData.append("Avatar", avatar);
    return await $api
      .post("/app/user/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }: { data: ResponseSuccess<number> }) => {
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
