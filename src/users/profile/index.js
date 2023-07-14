import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserProfileHeader from "../../components/user-profile-header";
import Chatbox from "../../components/chat-box";

const Profile = () => {
  const params = useParams();

  console.log(params);
  const [singleUser, setSingleUser] = useState([]);
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserData = async () => {
    await axios
      .get(process.env.REACT_APP_BASE_URL + "users.json")
      .then(function (response) {
        const newUser = response.data.users.filter((item) => {
          // eslint-disable-next-line eqeqeq
          return item.id == params.userId;
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
