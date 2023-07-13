import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {Icons} from "../utils/icons";

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
      <div className={style.usersBox}>
        <img src={Icons.gradientBg} alt={'...'}/>
        <div className={`card ${style.usersCard}`}>
          <div className="card-header">
            <h3>Select an account</h3>
          </div>
          <div className="card-body">
            {users.length > 0 ? (
              <ul
                className={`list-group list-group-flush ${style.maxCardHeight}`}
              >
                {users.map((item) => (
                  <li key={item.id} className="list-group-item">
                    <Link to={"/users/" + item.id + "/profile"}>
                      <img
                        src={item.profilepicture}
                        style={{ width: "30px", height: "30px" }}
                        alt="..."
                      />
                      <p>{item.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
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
