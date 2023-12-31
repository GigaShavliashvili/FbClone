import React, { useEffect, useState } from "react";
import { Navigate,  Link, Outlet } from "react-router-dom";
import $api from "./http";
import jwtDecode from "jwt-decode";
import { userGlobalStore } from "../StateMenegment/global.store";
/* export type token = {
  "/identity/claims/id": string;
  "/identity/claims/firstName": string;
  "/identity/claims/lastName": string;
  "/identity/claims/email": string;
  "/identity/claims/birthDate": string;
  "/identity/claims/gender": string;

  exp: string;
  iss: string;
  aud: string;
}; */

const AuthCheck: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const setUserData =  userGlobalStore((state) => state.setData)
  useEffect(() => {
    try {
      const token = JSON.parse(localStorage.getItem("token") ?? "");
      if (token) {
        const decodedToken: any = jwtDecode(token);
        $api
          .get("/app/user/" + decodedToken.id)
          .then((res) => {
            setUserData(res.data.data[0])
            setIsLoggedIn(true);
            setIsChecked(true);
          })
          .catch((err) => {
            setIsLoggedIn(false);
            setIsChecked(true);
          });
      } else {
        throw new Error("Invalid token");
      }
    } catch (err) {
      setIsLoggedIn(false);
      setIsChecked(true);
    }
  }, []);

  if (!isChecked) {
    return;
  }
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  } else
    return (
      <div>
        <Link to="/app/home">Home</Link>
        <Link to="/app/profile">Profile</Link>
        <Outlet />
      </div>
    );
};

export default AuthCheck;
