import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Icons } from "../utils/icons";
import SimpleBar from "simplebar-react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    await axios
      .get(process.env.REACT_APP_BASE_URL + "users.json")
      .then(function (response) {
        console.log(response.data.users);
        //setting users to users state
        setUsers(response.data.users);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <>
      <div className="users-box">
        <img src={Icons.gradientBg} className="gradient-bg" alt={"..."} />
        <div className="card users-card">
          <div className="card-header">
            <h3>Select an account</h3>
          </div>
          <div className="card-body">
            {users.length > 0 ? (
              <SimpleBar
                forceVisible="y"
                autoHide={false}
                className="custom-scrollbar"
                style={{ maxHeight: "55vh" }}
              >
                <ul className="list-group list-group-flush user-list">
                  {users.map((item) => (
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
