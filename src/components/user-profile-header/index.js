import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const UserProfileHeader = ({ userDetail }) => {
  console.log(userDetail);
  return (
    <>
      <div className="user-profile-header">
        <h3>Profile</h3>
        <div>
          <Dropdown className="profile-dropdown">
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
                <p className="name">{userDetail.name}</p>
                <p className="email">{userDetail.email}</p>
              </div>
              <Link to="/users" className="btn btn-danger radius-100">
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
