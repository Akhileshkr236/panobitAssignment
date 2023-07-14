import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import UserProfileHeader from "../../components/user-profile-header";
import Chatbox from "../../components/chat-box";

const Profile = () => {
  const router = useLocation();

  const [singleUser, setSingleUser] = useState([]);
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserData = async () => {
    await axios
      .get(process.env.REACT_APP_BASE_URL + "users.json")
      .then(function (response) {
        let allUsers = response.data.users;
        let splitedArr = router.pathname.split("/");
        const newUser = allUsers.filter((item) => {
          // eslint-disable-next-line eqeqeq
          return item.id == splitedArr[2];
        });
        setSingleUser(newUser[0]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <>
      <UserProfileHeader userDetail={singleUser} />

      <Chatbox />
    </>
  );
};

export default Profile;
