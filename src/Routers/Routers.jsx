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
import InstituteManagement from './../Page/InstituteManagement/InstituteManagement';
import BranchName from './../Page/InstituteManagementForm/BranchName';
import InstituteName from './../Page/InstituteManagementForm/InstituteName';
import DepartmentName from './../Page/InstituteManagementForm/DepartmentName';
import ManageInventory from './../Page/ManageInventory/ManageInventory';
import CategoryFrom from './../Page/Forms/CategoryFrom';
import SubCategory from './../Page/Forms/SubCategory';
import ItemFrom from './../Page/Forms/ItemFrom';
import SubItemFrom from './../Page/Forms/SubItemFrom';
import CreateUser from "../Page/CreateUser/CreateUser";


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
      },
      {
        path: "/manageInventory",
        element: <ManageInventory></ManageInventory>,
        children: [
          {
            path: "/manageInventory",
            element: <CategoryFrom></CategoryFrom>

          },
          {
            path: "/manageInventory/subcategory",
            element: <SubCategory></SubCategory>

          },
          {
            path: "/manageInventory/item",
            element: <ItemFrom></ItemFrom>

          },
          {
            path: "/manageInventory/subItem",
            element: <SubItemFrom></SubItemFrom>

          },

        ]
      },
      {
        path: '/instituteManagement',
        element: <InstituteManagement></InstituteManagement>,
        children: [
          {
            path : '/instituteManagement',
            element : <InstituteName></InstituteName>
          },
          {
            path : '/instituteManagement/branchName',
            element : <BranchName></BranchName>
          },
          {
            path: '/instituteManagement/departmentName',
            element: <DepartmentName></DepartmentName>
          },
        ]
      },
      {
        path : '/createUser',
        element : <CreateUser></CreateUser>
      }
    ]
  },

]);

export default router;