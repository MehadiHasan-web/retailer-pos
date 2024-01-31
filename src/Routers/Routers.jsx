import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Page/LogIn/LogIn";
import DashBoard from './../Layout/Dashboard/Dashboard';
import Home from "../Page/Dashboard/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";
import BranchName from './../Page/InstituteManagementForm/BranchName';
import InstituteName from './../Page/InstituteManagementForm/InstituteName';
import DepartmentName from './../Page/InstituteManagementForm/DepartmentName';
import CategoryFrom from './../Page/Forms/CategoryFrom';
import SubCategory from './../Page/Forms/SubCategory';
import ItemFrom from './../Page/Forms/ItemFrom';
import SubItemFrom from './../Page/Forms/SubItemFrom';
import CreateUser from "../Page/CreateUser/CreateUser";
import Dashboard from "../Page/Dashboards/Dashboard";
import InventoryRequest from "../Page/Dashboard/InventoryRequest/InventoryRequest";
import PurchaseManagement from "../Page/PurchaseManagement/PurchaseManagement";
import Appointments from "../Page/Dashboard/Appointments/Appointments";
import PurchaseRequestHistory from "../Page/PurchaseManagement/PurchaseRequestHistory";
import PurchaseRequest from "../Page/PurchaseManagement/PurchaseRequest";
import MyInventory from './../Page/My Inventory/MyInventory';


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
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/inventoryRequest',
        element: <InventoryRequest></InventoryRequest>
      },
      {
        path: '/appointments',
        element: <Appointments></Appointments>
      },
      {
        path: '/myInventory',
        element: <MyInventory></MyInventory>
      },
      {
        path : '/purchaseManagement/purchaseRequest',
        element : <PurchaseRequest></PurchaseRequest>
      },
      {
        path : '/purchaseManagement/purchaseRequestHistory',
        element : <PurchaseRequestHistory></PurchaseRequestHistory>
      },
      {
        path: "/manageInventory/subcategory",
        element: <SubCategory></SubCategory>

      },
      {
        path: "/manageInventory/category",
        element: <CategoryFrom></CategoryFrom>

      },
      
      {
        path: "/manageInventory/item",
        element: <ItemFrom></ItemFrom>

      },
      {
        path: "/manageInventory/subItem",
        element: <SubItemFrom></SubItemFrom>

      },
      {
        path : '/instituteManagement/instituteName',
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
      {
        path : '/createUser',
        element : <CreateUser></CreateUser>
      }
    ]
  },

]);

export default router;