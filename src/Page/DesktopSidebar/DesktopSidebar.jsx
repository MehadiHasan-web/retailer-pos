import { FaPlusSquare, FaPowerOff } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import ManageInventory from "../ManageInventory/ManageInventory";
import { MdDashboard } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
// import { GoHomeFill } from "react-icons/go";
import { FaSquareCaretRight, FaSquareCaretLeft } from "react-icons/fa6";
import { MdInventory } from "react-icons/md";
// import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiExpense } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
// import Sales from "../Sales/Sales";
import { RiMoneyDollarCircleFill } from "react-icons/ri";


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
            <li className="lg:text-xl font-semibold text-slate-200">Ara Creation</li>
          </Link>
        }
      </ul>
      <div className="border-[1px] border-x-slate-50 my-5"></div>
      <div className="overflow-auto touch-auto h-screen pb-40">

        <ul className="mt-5 space-y-5  ">

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
          {/* <li>
            {
              open ? <Link to="/" className="flex justify-center items-center">
                <GoHomeFill className="text-green-500 text-2xl"></GoHomeFill></Link> : <Link className="flex justify-start items-center gap-2" to="/">
                <GoHomeFill className="text-green-500"></GoHomeFill>
                <span className=" font-semibold text-slate-200">
                  Request for Sales
                </span>
              </Link>
            }
          </li> */}
          <li >
            {
              open ? <Link to="sales/sales-request" className="flex justify-center items-center"><RiMoneyDollarCircleFill className="text-green-500 text-2xl"></RiMoneyDollarCircleFill></Link> : <Link className="flex justify-start items-center gap-2" to="sales/sales-request"><RiMoneyDollarCircleFill className="text-green-500 text-2xl"></RiMoneyDollarCircleFill>
                <span className=" font-semibold text-slate-200">Sales</span></Link>
            }
          </li>
          {/* {is_manager && (
            <li className="flex justify-center items-center">
              <Sales open={open}></Sales>
            </li>
          )} */}
          <li>
            {
              open ? <Link to="/sales-return" className="flex justify-center items-center">
                <MdInventory className="text-green-500 text-2xl"></MdInventory></Link> : <Link className="flex justify-start items-center gap-2"
                  to="/sales-return">
                <MdInventory className="text-green-500"></MdInventory>
                <span className=" font-semibold text-slate-200">
                  Sales Return
                </span>
              </Link>
            }
          </li>
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


          {/* {is_admin && (
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
          )} */}
          <li>
            {
              open ? <Link to="/expenses" className="flex justify-center items-center">
                <GiExpense className="text-green-500 text-2xl"></GiExpense></Link> : <Link
                  className="flex justify-start items-center gap-2"
                  to="/expenses"
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
              open ? <Link to="/management" className="flex justify-center items-center">
                <IoPersonCircleSharp className="text-green-500 text-2xl"></IoPersonCircleSharp></Link> : <Link
                  className="flex justify-start items-center gap-2"
                  to="/management"
                >
                <IoPersonCircleSharp className="text-green-500"></IoPersonCircleSharp>
                <span className=" font-semibold text-slate-200">
                  Management
                </span>
              </Link>
            }
          </li>
          <li>
            {
              open ? <Link to="/management2" className="flex justify-center items-center">
                <IoPersonCircleSharp className="text-green-500 text-2xl"></IoPersonCircleSharp></Link> : <Link
                  className="flex justify-start items-center gap-2"
                  to="/management"
                >
                <IoPersonCircleSharp className="text-green-500"></IoPersonCircleSharp>
                <span className=" font-semibold text-slate-200">
                  Management2
                </span>
              </Link>
            }
          </li>
          <li>
            {
              open ? <Link to="/settings" className="flex justify-center items-center">
                <IoMdSettings className="text-green-500 text-2xl"></IoMdSettings></Link> : <Link
                  className="flex justify-start items-center gap-2"
                  to="/settings"
                >
                <IoMdSettings className="text-green-500"></IoMdSettings>
                <span className=" font-semibold text-slate-200">
                  Settings
                </span>
              </Link>
            }
          </li>
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
