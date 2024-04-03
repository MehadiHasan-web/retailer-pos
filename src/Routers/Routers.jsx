import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Page/LogIn/LogIn";
import DashBoard from './../Layout/Dashboard/Dashboard';
import Home from "../Page/Dashboard/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";
import CreateUser from "../Page/CreateUser/CreateUser";
import InventoryRequest from "../Page/Dashboard/InventoryRequest/InventoryRequest";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import UserInventory from "../Page/UserInventory/UserInventory";
import Dashboard from "../Page/Practice/Dashboard";
import UserProfile from "../Page/UserProfile/UserProfile";
import Invoice from "../Page/Invoice/Invoice";
import SalesRequest from "../Page/SalesRequest/SalesRequest";
import Expenses from "../Page/Expenses/Expenses";
import Scanner from "../Page/Scanner";
import AddInventoryProduct from "../Page/AddInventoryProduct";
import NotAllow from "../Page/NotAllow/NotAllow";


const router = createBrowserRouter([

  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: '/',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      },
      {
        path: '/sales-return',
        element: <PrivateRoute><InventoryRequest></InventoryRequest></PrivateRoute>
      },
      {
        path: '/sales-return/:id',
        element: <PrivateRoute><Invoice></Invoice></PrivateRoute>
      },
      {
        path: '/sales/sales-request/sales-entry',
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: '/sales/sales-request',
        element: <PrivateRoute><SalesRequest /></PrivateRoute>
      },
      {
        path: `sales/sales-request/:id`,
        element: <PrivateRoute><Invoice></Invoice></PrivateRoute>

      },

      {
        path: '/createUser',
        element: <PrivateRoute><CreateUser></CreateUser></PrivateRoute>
      },

      {
        path: '/management',
        element: <PrivateRoute><UserInventory></UserInventory></PrivateRoute>
      },

      {
        path: '/expenses',
        element: <PrivateRoute><Expenses></Expenses></PrivateRoute>
      },
      {
        path: '/user-profile',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path: '/scanner',
        element: <PrivateRoute> <Scanner></Scanner> </PrivateRoute>
      },
      {
        path: '/management/add-inventory',
        element: <PrivateRoute><AddInventoryProduct /></PrivateRoute>
      },
      {
        path: '/notAllow',
        element: <NotAllow></NotAllow>
      }
      // {
      //   path : '/practice',
      //   element : <Practice></Practice>
      // }
    ]
  },

]);

export default router;