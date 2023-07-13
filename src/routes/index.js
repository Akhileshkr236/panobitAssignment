import { createBrowserRouter } from "react-router-dom";
import Home from "../home";
import Users from "../users";
import Profile from "../users/profile";
import Posts from "../users/posts";
import Gallery from "../users/gallery";
import Todo from "../users/todo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Home />,
  },
  {
    path: "/users/:userId",
    element: <Users />,
    children: [
      {
        path: "/users/:userId/profile",
        element: <Profile />,
      },
      {
        path: "/users/:userId/posts",
        element: <Posts />,
      },
      {
        path: "/users/:userId/gallery",
        element: <Gallery />,
      },
      {
        path: "/users/:userId/todo",
        element: <Todo />,
      },
      {
        path: "*",
        element: <Profile />,
      },
    ],
  },
]);
