<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./../Sidebar/Sidebar";
import { SlNote } from "react-icons/sl";
import { HiOutlineBell } from "react-icons/hi2";
function Navbar() {
  const navigate = useNavigate();
=======

import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './../Sidebar/Sidebar';
import { TbScan } from "react-icons/tb";
import { SlNote } from "react-icons/sl";
import { HiOutlineBell } from "react-icons/hi2";
function Navbar() {

  const navigate = useNavigate()
>>>>>>> eac55357cda622495a004410ec3e5068bec5b2c9

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10 ">
<<<<<<< HEAD
        <div className="navbar-start  lg:hidden">
          {/* sidebar  */}
          <Sidebar></Sidebar>
        </div>
        <div className="navbar-center ">
          {/* <ul>
            <li className="lg:text-xl font-semibold">Apotek Pelita Sehat</li>
            <li className="lg:text-xs text-gray-500">Tuesday, 13 June 2024</li>
          </ul> */}
          <label className="input focus-within:outline-none focus-visible:border-none w-28 lg:w-full rounded-2xl flex items-center gap-2 mx-5 bg-slate-200 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-5 h-5 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className=" bg-slate-200 text-black w-28 lg:w-full"
              placeholder="search medicine"
            />
          </label>

          {/* <Link to="/" className="btn btn-ghost text-xl">NTRCA Store </Link> */}
        </div>
        <div className="navbar-end flex items-center gap-4 justify-end grow">
=======
        <div className="navbar-start block md:hidden">
          {/* sidebar  */}
          <Sidebar></Sidebar>
        </div>
        <div className="navbar-center" >
          <ul>
            <li className='lg:text-xl font-semibold'>Apotek Pelita Sehat</li>
            <li className='lg:text-xs text-gray-500'>Tuesday, 13 June 2024</li>
          </ul>
          <label className="input focus-within:outline-none focus-visible:border-none w-96 rounded-2xl flex items-center gap-2 mx-5 bg-slate-200 ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            <input type="text" className="grow bg-slate-200 text-black" placeholder="search medicine" />
          </label>
          <ul className='flex items-center gap-3'>
            <li><div className="timeline-end timeline-box flex items-center gap-2 font-semibold"><SlNote></SlNote><span className='text-sm'>User Voucher</span></div></li>
            <li><div className="timeline-end timeline-box flex items-center gap-2 font-semibold"><TbScan></TbScan><span className='text-sm'>Scan Prescription</span></div></li>
            <li><div className="timeline-end timeline-box flex items-center gap-2">
              <div className="avatar online placeholder">
                <div className=" text-neutral-content">
                  <HiOutlineBell className='text-xl'></HiOutlineBell>
                </div>
              </div>
            </div></li>

          </ul>
          {/* <Link to="/" className="btn btn-ghost text-xl">NTRCA Store </Link> */}
        </div>
        <div className="navbar-end flex items-center" >

>>>>>>> eac55357cda622495a004410ec3e5068bec5b2c9
          {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="  ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
        </svg>
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">        
        <li><Link onClick={logout}>Logout</Link></li>
      </ul>
    </div> */}
<<<<<<< HEAD
          <ul className="flex items-center gap-3">
            <li className="hidden lg:block" >
              <div className="timeline-end timeline-box flex items-center gap-2 font-semibold ">
                <SlNote></SlNote>
                <span className="text-sm ">User Voucher</span>
              </div>
            </li>
            <li>
              <div className="timeline-end timeline-box flex items-center gap-2">
                <div className="avatar online placeholder">
                  <div className=" text-neutral-content">
                    <HiOutlineBell className="text-xl"></HiOutlineBell>
                  </div>
                </div>
              </div>
            </li>
          </ul>
=======
>>>>>>> eac55357cda622495a004410ec3e5068bec5b2c9
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
<<<<<<< HEAD

          <ul className="menu lg:menu-horizontal rounded-box hidden lg:block ">
=======
          <ul className="menu lg:menu-horizontal rounded-box">
>>>>>>> eac55357cda622495a004410ec3e5068bec5b2c9
            <li>
              <details open>
                <summary>
                  <ul>
<<<<<<< HEAD
                    <li className="font-bold">Mohammad Nabi</li>
=======
                    <li className='font-bold'>Mohammad Nabi</li>
>>>>>>> eac55357cda622495a004410ec3e5068bec5b2c9
                    <li>pharmacist</li>
                  </ul>
                </summary>
                <ul>
<<<<<<< HEAD
                  <li>
                    <Link onClick={logout}>Logout</Link>
                  </li>
=======
                  <li><Link onClick={logout}>Logout</Link></li>
>>>>>>> eac55357cda622495a004410ec3e5068bec5b2c9
                </ul>
              </details>
            </li>
          </ul>
<<<<<<< HEAD
=======

>>>>>>> eac55357cda622495a004410ec3e5068bec5b2c9
        </div>
      </div>
    </>
  );
}

export default Navbar;
