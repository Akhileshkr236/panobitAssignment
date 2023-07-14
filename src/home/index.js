import React from "react";
import { Link } from "react-router-dom";
import { Icons } from "../utils/icons";
import SimpleBar from "simplebar-react";
import { useUsers } from "../contexts/UsersContext";

const Home = () => {
  const usersData = useUsers();

  return (
    <>
      <div className="users-box">
        <img src={Icons.gradientBg} className="gradient-bg" alt={"..."} />
        <div className="card users-card">
          <div className="card-header">
            <h3>Select an account</h3>
          </div>
          <div className="card-body">
            {usersData.length > 0 ? (
              <SimpleBar
                forceVisible="y"
                autoHide={false}
                className="custom-scrollbar"
                style={{ maxHeight: "55vh" }}
              >
                <ul className="list-group list-group-flush user-list">
                  {usersData.map((item) => (
                    <li key={item.id} className="list-group-item">
                      <Link to={"/users/" + item.id + "/profile"} className="">
                        <img
                          src={item.profilepicture}
                          style={{ width: "40px", height: "40px" }}
                          alt="..."
                        />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SimpleBar>
            ) : (
              "Nothing here"
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
