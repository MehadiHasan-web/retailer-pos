import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './../../Page/Navbar/Navbar';
import DesktopSidebar from "../../Page/DesktopSidebar/DesktopSidebar";
AOS.init();

const DashBoard = () => {
  return (
    <div>
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      {/* main content section start */}
      <div className="flex mt-2">
        <div className="w-[13%] hidden md:block">
          <DesktopSidebar></DesktopSidebar>
        </div>
        <div className="w-full md:w-[87%]">
          <Outlet></Outlet>
        </div>
      </div>
      {/* main content section end */}
    </div>
  );
};

export default DashBoard;