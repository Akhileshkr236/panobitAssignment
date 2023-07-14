import { RouterProvider } from "react-router-dom";
import "./assets/theme/scss/master.scss";
import { router } from "./routes";
import UserProvider from "./contexts/UsersContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </UserProvider>
  );
}

export default App;
