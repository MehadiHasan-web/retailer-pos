import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Page/LogIn/LogIn";
import DashBoard from './../Layout/Dashboard/Dashboard';
import Home from "../Page/Dashboard/Home/Home/Home";
import InventoryHistory from "../Page/History/InventoryHistory";
import InventoryComplete from "../Page/Dashboard/InventoryComplete/InventoryComplete";
import PurchaseRequest from "../Page/Purchase Request/PurchaseRequest";
import MyInventory from "../Page/My Inventory/myInventory";


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
        path : '/purchaseRequest',
        element : <PurchaseRequest></PurchaseRequest>
      },
      {
        path : '/myInventory',
        element : <MyInventory></MyInventory>
      }
    ]
  },
  
]);

export default router;