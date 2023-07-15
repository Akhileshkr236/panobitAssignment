import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import UserProfileHeader from "../components/user-profile-header";
import { useUsers } from "../contexts/UsersContext";
import Chatbox from "../components/chat-box";

const Users = () => {
  const params = useParams();

  const users = useUsers();
  const single = users.find((user) => {
    return user.id === parseInt(params.userId);
  });

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
          <UserProfileHeader userDetail={single} />
          <Outlet />
        </div>

        <Chatbox />
      </div>
    </>
  );
};

export default Users;
