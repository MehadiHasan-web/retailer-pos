import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Page/LogIn/LogIn";
import DashBoard from './../Layout/Dashboard/Dashboard';
import Home from "../Page/Dashboard/Home/Home/Home";
import InventoryHistory from "../Page/History/InventoryHistory";
import InventoryComplete from "../Page/Dashboard/InventoryComplete/InventoryComplete";
import Admin from './../Page/Dashboard/Admin/Admin';
import MyInventory from './../Page/My Inventory/MyInventory';
import PurchaseRequest from './../Page/Purchase Request/PurchaseRequest';
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([

  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: '/',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/history',
        element: <InventoryHistory></InventoryHistory>
      },
      {
        path: '/inventoryComplete',
        element: <InventoryComplete></InventoryComplete>
      },
      {
        path: '/admin',
        element: <Admin></Admin>
      },
      {
        path: '/myInventory',
        element: <MyInventory></MyInventory>
      },
      {
        path: '/purchaseRequest',
        element: <PurchaseRequest></PurchaseRequest>
      }
    ]
  },

]);

export default router;