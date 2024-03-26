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
import PurchaseRequestHistory from "../Page/PurchaseManagement/PurchaseRequestHistory";
import PurchaseRequest from "../Page/PurchaseManagement/PurchaseRequest";
import MyInventory from './../Page/My Inventory/MyInventory';
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import AllUserInventory from "../Page/AllUserInventory/AllUserInventory";
import UserInventory from "../Page/UserInventory/UserInventory";
import HomeExtra from './../Page/Dashboard/Home/Home/HomeExtra';
// import Practice from "../Page/Practice/Practice";
import Dashboard from "../Page/Practice/Dashboard";
import MyInventoryRequest from "../Page/MyInventoryRequest/MyInventoryRequest";
import UserProfile from "../Page/UserProfile/UserProfile";
import Expensh from "../Page/Expensh/Expensh";


const router = createBrowserRouter([

  {
    path: "/login",
    element: <LogIn></LogIn>,
  },
  {
    path: '/',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    errorElement : <ErrorPage></ErrorPage>,
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
        path: '/applications',
        element: <Appointments></Appointments>
      },
      {
        path: '/myInventory',
        element: <MyInventory></MyInventory>
      },
      {
        path: '/my-inventory-request',
        element: <MyInventoryRequest></MyInventoryRequest>
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
        path : '/manageInventory/allUserInventory',
        element : <AllUserInventory></AllUserInventory>
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
      },
      
      {
        path : '/userInventory',
        element : <UserInventory></UserInventory>
      },
      {
        path : '/homeExtra',
        element : <HomeExtra></HomeExtra>
      },
      {
        path : '/expensh',
        element : <Expensh></Expensh>
      },
      {
        path : '/user-profile',
        element : <UserProfile></UserProfile>
      },
      // {
      //   path : '/practice',
      //   element : <Practice></Practice>
      // }
    ]
  },

]);

export default router;