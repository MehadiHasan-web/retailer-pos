import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import PurchaseManagement from "./../PurchaseManagement/PurchaseManagement";
import ManageInventory from "../ManageInventory/ManageInventory";
import { MdDashboard, MdSettingsApplications } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";

const DesktopSidebar = () => {
  const isApprover = localStorage.getItem("is_approver") === "true";
  const is_manager = localStorage.getItem("is_manager") === "true";
  const is_admin = localStorage.getItem("is_admin") === "true";

  const adminAndManager = isApprover || is_manager;

  return (
    <div className="w-full bg-[#1E1E1E] h-full p-2">
      <ul className="mt-5">
        <Link to="/" className="flex justify-center items-center gap-2">
          <li>
            <FaPlusSquare className="text-green-500"></FaPlusSquare>
          </li>
          <li className="lg:text-xl font-semibold text-slate-200">MedKitPOS</li>
        </Link>
      </ul>
      <div className="border-[1px] border-x-slate-50 my-5"></div>
      <ul className="mt-5 space-y-5">
        <li className="text-sm text-gray-500">Title heading</li>
        <li>
          <Link
            className="flex justify-start items-center gap-2"
            to="/dashboard"
          >
            <MdDashboard className="text-green-500"></MdDashboard>
            <span className="lg:text-xs font-semibold text-slate-200">
              Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex justify-start items-center gap-2" to="/">
            <GoHomeFill className="text-green-500"></GoHomeFill>
            <span className="lg:text-xs font-semibold text-slate-200">
              Create Inventory History
            </span>
          </Link>
        </li>
        {is_manager && (
          <li>
            <Link
              className="flex justify-start items-center gap-2"
              to="/inventoryRequest"
            >
              <FaPlusSquare className="text-green-500"></FaPlusSquare>
              <span className="lg:text-xs font-semibold text-slate-200">
                Inventory Request
              </span>
            </Link>
          </li>
        )}
        {is_manager && (
          <li>
            <PurchaseManagement></PurchaseManagement>
          </li>
        )}
        {isApprover && (
          <li>
            <Link
              className="flex justify-start items-center gap-2"
              to="/applications"
            >
              <MdSettingsApplications className="text-green-500"></MdSettingsApplications>
              <span className="lg:text-xs font-semibold text-slate-200">
                Applications
              </span>
            </Link>
          </li>
        )}
        <li>
          <Link
            className="flex justify-start items-center gap-2"
            to="/myInventory"
          >
            <IoPersonCircleSharp className="text-green-500"></IoPersonCircleSharp>
            <span className="lg:text-xs font-semibold text-slate-200">
              My Inventory
            </span>
          </Link>
        </li>
        {adminAndManager && (
          <>
            {is_manager && (
              <li>
                <ManageInventory></ManageInventory>
              </li>
            )}
            {/* <li><InstituteManagement></InstituteManagement></li> */}
          </>
        )}
        {is_admin && (
          <li>
            <Link
              className="flex justify-start items-center gap-2"
              to="/createUser"
            >
              <FaPlusSquare className="text-green-500"></FaPlusSquare>
              <span className="lg:text-sm font-semibold text-slate-200">
                Create User
              </span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DesktopSidebar;
