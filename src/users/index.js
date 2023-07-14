import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Users = () => {
  const navigation = useLocation();

  return (
    <>
      <div className="user-details-box">
        <div className="user-details-left">
          <ul className="user-details-menu">
            <li>
              <NavLink
                to={"/users/" + navigation.pathname.split("/")[2] + "/profile"}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/users/" + navigation.pathname.split("/")[2] + "/posts"}
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/users/" + navigation.pathname.split("/")[2] + "/gallery"}
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/users/" + navigation.pathname.split("/")[2] + "/todo"}
              >
                ToDo
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="user-details-right">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Users;
