import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './../../Page/Navbar/Navbar';
import DesktopSidebar from "../../Page/DesktopSidebar/DesktopSidebar";
import { useState } from 'react';

AOS.init();

const DashBoard = () => {

  const [open, setOpen] = useState(true);
  console.log(open)

  return (
    <div>
      {/* main content section start */}
      <div className="flex">
        <div className={`${open ? 'lg:w-[4%]' : 'lg:w-[13%]'} hidden lg:block relative`}>
          <DesktopSidebar open={open} setOpen={setOpen}></DesktopSidebar>
        </div>
        <div className={`w-full ${open ? 'lg:w-[94%]' : 'lg:w-[87%]'} bg-slate-100`}>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
      {/* main content section end */}
    </div>
  );
};

export default DashBoard;