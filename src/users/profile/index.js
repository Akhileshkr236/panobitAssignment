import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserProfileHeader from "../../components/user-profile-header";
import Chatbox from "../../components/chat-box";
import { useUsers } from "../../contexts/UsersContext";
import GeoMap from "../../components/GeoMap.js";

const Profile = () => {
  const params = useParams();

  // console.log(params);
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

  const users = useUsers();
  const single = users.find((user) => {
    return user.id === parseInt(params.userId);
  });

  console.log(users, single);

  return (
    <>
      <UserProfileHeader userDetail={single} />
      {single && (
        <GeoMap
          lat={parseFloat(single?.address?.geo?.lat)}
          lng={parseFloat(single?.address?.geo?.lng)}
        />
      )}
      <Chatbox />
    </>
  );
};

export default Profile;
