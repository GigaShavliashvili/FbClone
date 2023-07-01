import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, Link,Outlet } from "react-router-dom";

const AuthCheck: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  useEffect(() => {
   /*  localStorage.setItem("token" , JSON.stringify("token")) */
   try{
    const token = JSON.parse(localStorage.getItem('token')??"")
    if(token){

        setIsLoggedIn(true);
        setIsChecked(true);
    }else{
        throw new Error('Invalid token')
    }
   }catch(err){
    setIsLoggedIn(false);
    setIsChecked(true);
   }
  }, []);

  if (!isChecked) {
    return;
  }
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  } else return <div>
    <Link to="/app/home">Home</Link>
    <Link to="/app/profile">Profile</Link>
    <Outlet/>
  </div>
};

export default AuthCheck;
