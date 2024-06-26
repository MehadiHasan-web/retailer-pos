import { Link, useNavigate } from "react-router-dom";
// import ManageInventory from "../ManageInventory/ManageInventory";
// import PurchaseManagement from "../PurchaseManagement/PurchaseManagement";
import { FaPlusSquare, FaPowerOff } from "react-icons/fa";
import {
  MdDashboard, MdInventory,
} from "react-icons/md";
// import { GoHomeFill } from "react-icons/go";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiExpense } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  const isApprover = localStorage.getItem("is_approver") === "true";
  const is_manager = localStorage.getItem("is_manager") === "true";
  const is_admin = localStorage.getItem("is_admin") === "true";

  const adminAndManager = isApprover || is_manager;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <>
      <div className="drawer z-30 ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content z-30">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost btn-circle drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side z-30">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#1E1E1E] text-base-content z-30">
            <ul className="flex justify-center items-center gap-2 mt-5 ">
              <Link to="/" className="flex justify-center items-center gap-2">
                <span>
                  <FaPlusSquare className="text-green-500"></FaPlusSquare>
                </span>
                <span className="lg:text-xl font-semibold text-slate-200">
                  Ara Creation
                </span>
              </Link>
              <li className="bg-slate">
                <input
                  id="my-drawer"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label
                    htmlFor="my-drawer"
                    className="btn btn-outline btn-circle drawer-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </label>
                </div>
              </li>
            </ul>
            <div className="border-[1px] border-x-slate-50 my-5"></div>
            <ul className="mt-5 space-y-5 relative">
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
              {/* <li >
                <Link className="flex justify-start items-center gap-2" to="/"><GoHomeFill className="text-green-500"></GoHomeFill>
                  <span className="lg:text-xs font-semibold text-slate-200">Create Inventory History</span></Link>
              </li> */}
              <li>
                <Link
                  className="flex justify-start items-center gap-2"
                  to="sales/sales-request"
                >
                  <RiMoneyDollarCircleFill className="text-green-500 text-2xl"></RiMoneyDollarCircleFill>
                  <span className=" font-semibold text-slate-200">Sales</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex justify-start items-center gap-2"
                  to="/sales-return"
                >
                  <MdInventory className="text-green-500"></MdInventory>
                  <span className=" font-semibold text-slate-200">
                    Sales Return
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex justify-start items-center gap-2"
                  to="/expenses"
                >
                  <GiExpense className="text-green-500"></GiExpense>
                  <span className=" font-semibold text-slate-200">
                    Expenses
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex justify-start items-center gap-2"
                  to="/management"
                >
                  <IoPersonCircleSharp className="text-green-500"></IoPersonCircleSharp>
                  <span className=" font-semibold text-slate-200">
                    Management
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex justify-start items-center gap-2"
                  to="/settings"
                >
                  <IoMdSettings className="text-green-500"></IoMdSettings>
                  <span className=" font-semibold text-slate-200">
                    Settings
                  </span>
                </Link>
              </li>
              {/* {
                is_manager && <li>
                  <Link className="flex justify-start items-center gap-2" to="/inventoryRequest"><FaPlusSquare className="text-green-500"></FaPlusSquare>
                    <span className="lg:text-xs font-semibold text-slate-200">Inventory Request</span></Link>
                </li >
              } */}
              {/* {
                is_manager && <li><PurchaseManagement></PurchaseManagement></li>
              }
              {
                isApprover && <li>
                  <Link className="flex justify-start items-center gap-2" to="/applications"><MdSettingsApplications className="text-green-500"></MdSettingsApplications>
                    <span className="lg:text-xs font-semibold text-slate-200">Applications</span></Link>
                </li>
              } */}
              {/* <li>
                <Link className="flex justify-start items-center gap-2" to="/myInventory"><IoPersonCircleSharp className="text-green-500"></IoPersonCircleSharp>
                  <span className="lg:text-xs font-semibold text-slate-200">My Inventory</span></Link>
              </li> */}
              {/* {
                is_admin && <li>
                  <Link className="flex justify-start items-center gap-2" to="/createUser"><FaPlusSquare className="text-green-500"></FaPlusSquare>
                    <span className="lg:text-xs font-semibold text-slate-200">Create User</span></Link>
                </li>
              } */}
              {adminAndManager && (
                <>
                  {/* {
                    is_manager && <li><ManageInventory></ManageInventory></li>
                  } */}
                  {/* <li><InstituteManagement></InstituteManagement></li> */}
                </>
              )}
            </ul>
            <li className="absolute bottom-0 text-white left-[35%] mb-5 flex gap-2 items-center lg:text-xs">
              {" "}
              <Link onClick={logout}>
                <FaPowerOff className="text-green-500" /> Logout{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
