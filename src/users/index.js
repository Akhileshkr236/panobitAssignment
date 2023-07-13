import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import style from "./users.module.css";

const Users = () => {
  const navigation = useLocation();

  return (
    <>
      <div className={style.userDetail}>
        <div className={style.userDetailLeft}>
          <ul>
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
        <div className={style.userDetailRight}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Users;
