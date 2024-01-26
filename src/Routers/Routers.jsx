import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Page/LogIn/LogIn";
import DashBoard from './../Layout/Dashboard/Dashboard';
import Home from "../Page/Dashboard/Home/Home/Home";
import InventoryHistory from "../Page/History/InventoryHistory";
import InventoryComplete from "../Page/Dashboard/InventoryComplete/InventoryComplete";
import Admin from './../Page/Dashboard/Admin/Admin';
import MyInventory from './../Page/My Inventory/MyInventory';
import PurchaseRequest from './../Page/Purchase Request/PurchaseRequest';
import ManageInventory from "../Page/ManageInventory/ManageInventory";
import CategoryFrom from "../Page/Forms/CategoryFrom";
import SubCategory from "../Page/Forms/SubCategory";
import ItemFrom from "../Page/Forms/ItemFrom";
import SubItemFrom from "../Page/Forms/SubItemFrom";


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
      },
      {
        path : '/myInventory',
        element : <MyInventory></MyInventory>
      },
      {
        path : '/purchaseRequest',
        element : <PurchaseRequest></PurchaseRequest>
      },
      {
        path:"/manageInventory",
        element:<ManageInventory></ManageInventory>,
        children:[
          {
            path:"/manageInventory",
            element:<CategoryFrom></CategoryFrom>

          },
          {
            path:"/manageInventory/subcategory",
            element:<SubCategory></SubCategory>

          },
          {
            path:"/manageInventory/item",
            element:<ItemFrom></ItemFrom>

          },
          {
            path:"/manageInventory/subItem",
            element:<SubItemFrom></SubItemFrom>

          },
          
        ]
      }
    ]
  },
  
]);

export default router;