import axios from "axios";

const API_URL = "http://localhost:3500";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Barer ${JSON.parse(
    localStorage.getItem("token") ?? ""
  )}`;
  return config;
});

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      const resp = await refreshToken();
      const access_token = resp.data;
   /*    console.log(access_token, "refresh token worked"); */
      if (access_token) {
        localStorage.setItem("token", JSON.stringify(access_token));
      }
      $api.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      return $api(originalRequest);
    }
    return Promise.reject(error);
  }
);

const refreshToken = async () => {
  try {
    const resp = await axios.post("http://localhost:3500/auth/refreshtoken", {
      refreshToken: JSON.parse(localStorage.getItem("refreshtoken") ?? ""),
    });
 /*    console.log("refresh token", resp.data); */
    return resp.data;
  } catch (e) {
    console.log("Error", e);
  }
};

export default $api;
