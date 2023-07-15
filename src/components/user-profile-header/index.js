import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useLocation } from "react-router-dom";
import { useUsers } from "../../contexts/UsersContext";

const UserProfileHeader = ({ userDetail }) => {
  console.log(userDetail);

  const users = useUsers();
  const router = useLocation();

  const [randomUser, setRandomUser] = useState([]);

  useEffect(() => {
    if (users.length > 0) {
      let randomUserArr = [];
      for (let i = 0; i < 2; i++) {
        let randomUserId = Math.floor(Math.random() * 10);
        let res = users.find((item) => {
          return randomUserId === parseInt(item?.id);
        });
        randomUserArr.push(res);
      }
      setRandomUser(randomUserArr);
    }
  }, []);

  return (
    <>
      <div className="user-profile-header">
        <h3>
          {router.pathname.includes("profile") && "Profile"}
          {router.pathname.includes("post") && "Posts"}
          {router.pathname.includes("gallery") && "Gallery"}
          {router.pathname.includes("todo") && "ToDo"}
        </h3>
        <div>
          <Dropdown className="profile-dropdown">
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <img
                src={userDetail?.profilepicture}
                style={{ maxWidth: "100px" }}
                alt="..."
              />
              <p>{userDetail?.name}</p>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div>
                <img
                  src={userDetail?.profilepicture}
                  style={{ maxWidth: "100px" }}
                  alt="..."
                />
                <p className="name">{userDetail?.name}</p>
                <p className="email mb-2">{userDetail?.email}</p>

                {randomUser?.map((item) => (
                  <div key={item.id}>
                    <div className="seperator my-2"></div>
                    <div className="has-icon-left">
                      <img src={item?.profilepicture} alt="..." />
                      <p className="">{item?.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/users" className="btn btn-danger radius-100 mt-3">
                Sign Out
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default UserProfileHeader;
