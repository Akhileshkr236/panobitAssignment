import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const UserProfileHeader = ({ userDetail }) => {
  console.log(userDetail);
  return (
    <>
      <div>
        <h2>Profile</h2>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <img
                src={userDetail.profilepicture}
                style={{ maxWidth: "100px" }}
                alt="..."
              />
              <p>{userDetail.name}</p>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div>
                <img
                  src={userDetail.profilepicture}
                  style={{ maxWidth: "100px" }}
                  alt="..."
                />
                <p>{userDetail.name}</p>
                <p>{userDetail.email}</p>
              </div>
              <Link to="/users">SignOut</Link>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default UserProfileHeader;
