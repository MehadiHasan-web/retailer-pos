import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Page/LogIn/LogIn";
import DashBoard from './../Layout/Dashboard/Dashboard';
import Home from "../Page/Dashboard/Home/Home/Home";
import InventoryHistory from "../Page/History/InventoryHistory";
import InventoryComplete from "../Page/Dashboard/InventoryComplete/InventoryComplete";
import Admin from "../Page/Dashboard/Admin/Admin";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn></LogIn>,
  },
  {
    path : '/',
    element : <DashBoard></DashBoard>,
    children :[
      {
        path : '/home',
        element : <Home></Home>
      },
      {
        path : '/history',
        element: <InventoryHistory></InventoryHistory>
      },
      {
        path : '/inventoryComplete',
        element : <InventoryComplete></InventoryComplete>
      },
      {
        path : '/admin',
        element : <Admin></Admin>
      }
    ]
  },
  
]);

export default router;