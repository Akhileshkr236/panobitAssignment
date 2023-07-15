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

      <div className="profile-wrap">
        <div className="profile-left">
          <div className="profile-header">
            <img src={single?.profilepicture} alt="..." />
            <h3>{single?.name}</h3>
            <div className="profile-field">
              <p className="title">
                Username <span>:</span>
              </p>
              <p className="value">{single?.username}</p>
            </div>
            <div className="profile-field">
              <p className="title">
                e-mail <span>:</span>
              </p>
              <p className="value">{single?.email}</p>
            </div>
            <div className="profile-field">
              <p className="title">
                Phone <span>:</span>
              </p>
              <p className="value">{single?.phone}</p>
            </div>
            <div className="profile-field">
              <p className="title">
                Website <span>:</span>
              </p>
              <p className="value">{single?.website}</p>
            </div>
            <div className="seperator"></div>
            <h4 className="sub-heading">Company</h4>
            <div className="profile-field">
              <p className="title">
                Name <span>:</span>
              </p>
              <p className="value">{single?.name}</p>
            </div>
            <div className="profile-field">
              <p className="title">
                Catchphrase <span>:</span>
              </p>
              <p className="value">{single?.company?.catchPhrase}</p>
            </div>
            <div className="profile-field">
              <p className="title">
                bs <span>:</span>
              </p>
              <p className="value">{single?.company?.bs}</p>
            </div>
          </div>
        </div>
        <div className="profile-right">
          <h4 className="sub-heading">Address :</h4>

          <div>
            <div className="profile-field">
              <p className="title">
                Street <span>:</span>
              </p>
              <p className="value">{single?.address?.street}</p>
            </div>
            <div className="profile-field">
              <p className="title">
                Suite <span>:</span>
              </p>
              <p className="value">{single?.address?.suite}</p>
            </div>
            <div className="profile-field">
              <p className="title">
                City <span>:</span>
              </p>
              <p className="value">{single?.address?.city}</p>
            </div>
            <div className="profile-field">
              <p className="title">
                Zipcode <span>:</span>
              </p>
              <p className="value">{single?.address?.zipcode}</p>
            </div>
          </div>

          {single && (
            <>
              <GeoMap
                lat={parseFloat(single?.address?.geo?.lat)}
                lng={parseFloat(single?.address?.geo?.lng)}
              />
              <div className="d-flex justify-content-end align-items-center mt-2">
                <p className="navigation-text">
                  <span>Lat:</span> {single?.address?.geo?.lat}
                </p>
                <p className="navigation-text ms-3">
                  <span>Lng:</span> {single?.address?.geo?.lng}
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <Chatbox />
    </>
  );
};

export default Profile;
