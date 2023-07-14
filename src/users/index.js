import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const Users = () => {
  const params = useParams();

  return (
    <>
      <div className="user-details-box">
        <div className="user-details-left">
          <ul className="user-details-menu">
            <li>
              <NavLink to={"/users/" + params.userId + "/profile"}>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to={"/users/" + params.userId + "/posts"}>Posts</NavLink>
            </li>
            <li>
              <NavLink to={"/users/" + params.userId + "/gallery"}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to={"/users/" + params.userId + "/todo"}>ToDo</NavLink>
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
