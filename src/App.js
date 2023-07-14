import { RouterProvider } from "react-router-dom";
import "./assets/theme/scss/master.scss";
import { router } from "./routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
