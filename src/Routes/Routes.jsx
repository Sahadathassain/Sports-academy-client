import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Loyout/Dashboard";
import Home from "../Pages/Home/Home";

import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/',
        element: <Home></Home>
    }, 
      {
        path: '/register',
        element: <SignUp></SignUp>
      },
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,

  }
]);
export default router;