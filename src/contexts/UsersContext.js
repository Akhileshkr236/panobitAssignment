import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (function fetchUsers() {
      axios
        .get(process.env.REACT_APP_BASE_URL + "users.json")
        .then(function (response) {
          //setting users to users state
          setUsers(response.data.users);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    })();
  }, []);

  return (
    <>
      <UserContext.Provider value={users}>
        {props.children}
      </UserContext.Provider>
    </>
  );
};

export const useUsers = () => {
  return useContext(UserContext);
};

export default UserProvider;
