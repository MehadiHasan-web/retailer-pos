import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';


const InstituteManagement = () => {
  return (
    <div className="container mx-auto ">
            <div className="py-2 px-5 mb-3 bg-slate-100 rounded-lg mt-5 flex justify-center">
                <ul className="flex gap-5 flex-wrap">
                  <li><NavLink to="/instituteManagement" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Institute Name</NavLink></li>
                    <li><NavLink to="/instituteManagement/branchName" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Branch Name</NavLink></li>
                    <li><NavLink to="/instituteManagement/departmentName" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Department Name</NavLink></li>
                </ul>
            </div>
            <Outlet></Outlet>
            <ToastContainer/>
        </div>
  );
};

export default InstituteManagement;