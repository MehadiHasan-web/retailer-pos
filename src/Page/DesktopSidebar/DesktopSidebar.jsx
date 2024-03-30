import { FaPlusSquare, FaPowerOff, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import PurchaseManagement from "./../PurchaseManagement/PurchaseManagement";
import ManageInventory from "../ManageInventory/ManageInventory";
import { MdDashboard, MdManageHistory, MdSettingsApplications } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { FaSquareCaretRight, FaSquareCaretLeft } from "react-icons/fa6";
import { MdOutlineInventory, MdInventory } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiExpense } from "react-icons/gi";


// eslint-disable-next-line react/prop-types
const DesktopSidebar = ({ open, setOpen }) => {
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
    <div
      className="w-full bg-[#1E1E1E] sticky top-0 p-2 "
      style={{ height: "100vh" }}
    >
      <div className="w-full relative mb-9">
        {
          open ? <FaSquareCaretRight className="text-green-500 text-2xl absolute right-0 left-0 w-full" onClick={() => setOpen(!open)}></FaSquareCaretRight> : <FaSquareCaretLeft className="text-green-500 text-2xl absolute right-0" onClick={() => setOpen(!open)}></FaSquareCaretLeft>
        }


      </div>
      <ul className="mt-5">
        {
          open ? <Link to="/" className="flex justify-center items-center">
            <li>
              <FaPlusSquare className="text-green-500 text-2xl"></FaPlusSquare>
            </li>
          </Link> : <Link to="/" className="flex justify-center items-center gap-2">
            <li>
              <FaPlusSquare className="text-green-500"></FaPlusSquare>
            </li>
            <li className="lg:text-xl font-semibold text-slate-200">Holos Technologies</li>
          </Link>
        }
      </ul>
      <div className="border-[1px] border-x-slate-50 my-5"></div>
      <div className="overflow-auto touch-auto h-screen pb-40">

        <ul className="mt-5 space-y-5  ">
          {
            open ? '' : <li className="text-sm text-gray-500">Title heading</li>
          }
          <li>
            {
              open ? <Link
                to="/dashboard" className="flex justify-center items-center"
              >
                <MdDashboard className="text-green-500 text-2xl"></MdDashboard>
              </Link> : <Link
                className="flex justify-start items-center gap-2"
                to="/dashboard"
              >
                <MdDashboard className="text-green-500"></MdDashboard>
                <span className=" font-semibold text-slate-200">
                  Dashboard
                </span>
              </Link>
            }
          </li>
          <li>
            {
              open ? <Link to="/" className="flex justify-center items-center">
                <GoHomeFill className="text-green-500 text-2xl"></GoHomeFill></Link> : <Link className="flex justify-start items-center gap-2" to="/">
                <GoHomeFill className="text-green-500"></GoHomeFill>
                <span className=" font-semibold text-slate-200">
                  Request for Sales
                </span>
              </Link>
            }
          </li>
          <li >
            {
              open ? <Link to="/my-inventory-request" className="flex justify-center items-center"><MdOutlineInventory className="text-green-500 text-2xl"></MdOutlineInventory></Link> : <Link className="flex justify-start items-center gap-2" to="/my-inventory-request"><MdOutlineInventory className="text-green-500"></MdOutlineInventory>
                <span className=" font-semibold text-slate-200">My Sales Requests</span></Link>
            }
          </li>
          {is_manager && (
            <li>
              {
                open ? <Link to="/inventoryRequest" className="flex justify-center items-center">
                  <MdInventory className="text-green-500 text-2xl"></MdInventory></Link> : <Link className="flex justify-start items-center gap-2"
                    to="/inventoryRequest">
                  <MdInventory className="text-green-500"></MdInventory>
                  <span className=" font-semibold text-slate-200">
                    Sales Request
                  </span>
                </Link>
              }
            </li>
          )}
          {/* {is_manager && (
            <li className="flex justify-center items-center">
              {
                open ? <RiMoneyDollarCircleFill className="text-2xl text-green-500 flex justify-center items-center"/> :
              <PurchaseManagement></PurchaseManagement>
              }
            </li>
          )} */}
          {/* {isApprover && (
            <li >
              {
                open ? <Link to="/applications" className="flex justify-center items-center">
                  <MdSettingsApplications className="text-green-500 text-2xl"></MdSettingsApplications></Link> : <Link
                    className="flex justify-start items-center gap-2"
                    to="/applications"
                  >
                  <MdSettingsApplications className="text-green-500"></MdSettingsApplications>
                  <span className=" font-semibold text-slate-200">
                    Applications
                  </span>
                </Link>
              }
            </li>
          )} */}
          <li>
            {
              open ? <Link to="/myInventory" className="flex justify-center items-center">
                <IoPersonCircleSharp className="text-green-500 text-2xl"></IoPersonCircleSharp></Link> : <Link
                  className="flex justify-start items-center gap-2"
                  to="/myInventory"
                >
                <IoPersonCircleSharp className="text-green-500"></IoPersonCircleSharp>
                <span className=" font-semibold text-slate-200">
                  My Inventory
                </span>
              </Link>
            }
          </li>

          {is_admin && (
            <li>
              {
                open ? <Link to="/createUser" className="flex justify-center items-center">
                  <FaUser className="text-green-500 text-2xl"></FaUser></Link> : <Link
                    className="flex justify-start items-center gap-2"
                    to="/createUser"
                  >
                  <FaUser className="text-green-500"></FaUser>
                  <span className=" font-semibold text-slate-200">
                    Create User
                  </span>
                </Link>
              }
            </li>
          )}
          <li>
            {
              open ? <Link to="/expensh" className="flex justify-center items-center">
                <GiExpense className="text-green-500 text-2xl"></GiExpense></Link> : <Link
                  className="flex justify-start items-center gap-2"
                  to="/expensh"
                >
                <GiExpense className="text-green-500"></GiExpense>
                <span className=" font-semibold text-slate-200">
                  Expenses
                </span>
              </Link>
            }
          </li>
          <li>
            {
              open ? <Link to="/user-profile" className="flex justify-center items-center">
                <FaPlusSquare className="text-green-500 text-2xl"></FaPlusSquare></Link> : <Link
                  className="flex justify-start items-center gap-2"
                  to="/user-profile"
                >
                <FaPlusSquare className="text-green-500"></FaPlusSquare>
                <span className=" font-semibold text-slate-200">
                  User Profile
                </span>
              </Link>
            }
          </li>
          {/* <li>
            <Link
              className="flex justify-start items-center gap-2"
              to="/practice"
            >
              <IoPersonCircleSharp className="text-green-500"></IoPersonCircleSharp>
              <span className=" font-semibold text-slate-200">
                Practice
              </span>
            </Link>
          </li> */}
          {adminAndManager && (
            <>
              {is_manager && (
                <li className="flex justify-center items-center">
                  {
                    open ? <MdManageHistory className="text-2xl mr-2 text-green-500 link" /> : <ManageInventory></ManageInventory>
                  }

                </li>
              )}
              {/* <li><InstituteManagement></InstituteManagement></li> */}
            </>
          )}
        </ul>
      </div>
      {
        open ? <button className="absolute bottom-0 text-white left-[20%] xl:left[25%] mb-5 ">
          {" "}
          <Link onClick={logout} className="flex gap-2 items-center">
            <FaPowerOff className="text-green-500 text-xl" />
          </Link>
        </button> : <button className="absolute bottom-0 text-white left-[30%] xl:left[25%] mb-5 ">
          {" "}
          <Link onClick={logout} className="flex gap-2 items-center">
            <FaPowerOff className="text-green-500" /> Logout{" "}
          </Link>
        </button>
      }
    </div>
  );
};

export default DesktopSidebar;
