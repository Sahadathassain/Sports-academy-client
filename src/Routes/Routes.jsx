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
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import Payment from "../Pages/Dashboard/Payment";
import Instructors from "../Pages/Instructors/Instructors";

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
      },
      
      {
        path:'/Instructors',
        element:<Instructors></Instructors>,
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path:'addclass',
        element:<AddClasses></AddClasses>
      },
      {
        path:'myclass',
        element:<MyClasses></MyClasses>,
      },
      {
        path:'payment',
        element:<Payment></Payment>,
      },
      {
        path:'enrolled-classes',
        element:<MyEnrolledClasses/>,
      },
      {
        path:'selected-classes',
        element:<MySelectedClasses></MySelectedClasses>,
      },
      {
        path:'manage-classes',
        element:<ManageClasses></ManageClasses>,
      },
      {
        path:'manage-users',
        element:<ManageUsers></ManageUsers>,
      },
    ]
  }
]);

export default router;