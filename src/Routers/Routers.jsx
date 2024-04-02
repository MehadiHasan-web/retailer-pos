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
import InventoryRequest from "../Page/Dashboard/InventoryRequest/InventoryRequest";
import Appointments from "../Page/Dashboard/Appointments/Appointments";
// import PurchaseRequestHistory from "../Page/PurchaseManagement/PurchaseRequestHistory";
// import PurchaseRequest from "../Page/PurchaseManagement/PurchaseRequest";
import MyInventory from './../Page/My Inventory/MyInventory';
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import AllUserInventory from "../Page/AllUserInventory/AllUserInventory";
import UserInventory from "../Page/UserInventory/UserInventory";
import HomeExtra from './../Page/Dashboard/Home/Home/HomeExtra';
// import Practice from "../Page/Practice/Practice";
import Dashboard from "../Page/Practice/Dashboard";
import MyInventoryRequest from "../Page/MyInventoryRequest/MyInventoryRequest";
import UserProfile from "../Page/UserProfile/UserProfile";
import InventoryRequestDetails from "../Page/Dashboard/InventoryRequest/InventoryRequestDetails";
import Invoice from "../Page/Invoice/Invoice";
import SalesRequest from "../Page/SalesRequest/SalesRequest";
import Expenses from "../Page/Expenses/Expenses";
import Scanner from "../Page/Scanner";
import AddInventoryProduct from "../Page/AddInventoryProduct";
import SalesReturn from './../Page/SalesReturn/SalesReturn';
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
        path: `/inventoryRequest/:id`,
        element: <PrivateRoute><InventoryRequestDetails></InventoryRequestDetails></PrivateRoute>

      },
      {
        path: '/applications',
        element: <PrivateRoute><Appointments></Appointments></PrivateRoute>
      },
      {
        path: '/myInventory',
        element: <PrivateRoute><MyInventory></MyInventory></PrivateRoute>
      },
      {
        path: '/my-inventory-request',
        element: <PrivateRoute><MyInventoryRequest></MyInventoryRequest></PrivateRoute>
      },
      {
        path: 'sales/sales-request/sales-entry',
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: 'sales/sales-request',
        element: <PrivateRoute><SalesRequest /></PrivateRoute>
      },
      {
        path: `sales/sales-request/:id`,
        element: <PrivateRoute><Invoice></Invoice></PrivateRoute>

      },
      {
        path: "/manageInventory/subcategory",
        element: <PrivateRoute><SubCategory></SubCategory></PrivateRoute>
      },
      {
        path: "/manageInventory/category",
        element: <PrivateRoute><CategoryFrom></CategoryFrom></PrivateRoute>

      },

      {
        path: "/manageInventory/item",
        element: <PrivateRoute><ItemFrom></ItemFrom></PrivateRoute>

      },
      {
        path: "/manageInventory/subItem",
        element: <PrivateRoute><SubItemFrom></SubItemFrom></PrivateRoute>

      },
      {
        path: '/manageInventory/allUserInventory',
        element: <PrivateRoute><AllUserInventory></AllUserInventory></PrivateRoute>
      },
      {
        path: '/instituteManagement/instituteName',
        element: <PrivateRoute><InstituteName></InstituteName></PrivateRoute>
      },
      {
        path: '/instituteManagement/branchName',
        element: <PrivateRoute><BranchName></BranchName></PrivateRoute>
      },
      {
        path: '/instituteManagement/departmentName',
        element: <PrivateRoute><DepartmentName></DepartmentName></PrivateRoute>
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
        path: '/homeExtra',
        element: <PrivateRoute><HomeExtra></HomeExtra></PrivateRoute>
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