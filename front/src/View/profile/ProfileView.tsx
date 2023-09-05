import React, { useState } from "react";
import { userGlobalStore } from "../../StateMenegment/global.store";
import { convertImageToBase64 } from "../../hooks/ConvertBase64Hook";
import { UserService } from "../../service/User/UserService";

const ProfileView = () => {
  const userinfo = userGlobalStore((state) => state.userinfo);
  const [img, setImg] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      convertImageToBase64(file, (base64) => {
        UserService.addAvatar(userinfo.id, base64).then((res) =>{
          console.log(res)
        })
        setImg(base64);
      });
    }
  };

  return (
    <div>
      <h2>profilePage</h2>
      <p>{userinfo?.firstName + " " + userinfo?.lastName}</p>
      <input
        type="file"
        id="photo"
        name="photo"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
      <img src={img} alt="" />
    </div>
  );
};

export default ProfileView;
