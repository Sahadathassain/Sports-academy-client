import { createBrowserRouter } from "react-router-dom";
import Main from "../Loyout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import Home from "../Pages/Home/Home";

import ErrorPage from "../ErrorPage/ErrorPage";
import DashBoard from "../Loyout/DashBorad";
import AddClasses from "../Pages/Dashboard/AddClasses";
import AllClass from "../Pages/AllClass/AllClass";
import MyClasses from "../Pages/Dashboard/MyClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },{
        path:'/allclass',
        element:<AllClass></AllClass>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path:'/dashboard/addclass',
        element:<AddClasses></AddClasses>
      },
      {
        path:'/dashboard/myclass',
        element:<MyClasses></MyClasses>,
      }
    ]
  }
]);
export default router;