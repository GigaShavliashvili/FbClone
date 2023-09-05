import React from "react";
import { userGlobalStore } from "../../StateMenegment/global.store";

const HomeView = () => {
  const userinfo = userGlobalStore((state) => state.userinfo);
  return (
    <div>
      <h2>homePage</h2>
      <p>{userinfo?.firstName + " " + userinfo?.lastName}</p>
    </div>
  );
};

export default HomeView;
