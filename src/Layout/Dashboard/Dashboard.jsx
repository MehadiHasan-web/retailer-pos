import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './../../Page/Navbar/Navbar';
import DesktopSidebar from "../../Page/DesktopSidebar/DesktopSidebar";
AOS.init();

const DashBoard = () => {
  return (
    <div>
      {/* main content section start */}
      <div className="flex mt-2">
        <div className="lg:w-[13%] hidden  lg:block">
          <DesktopSidebar></DesktopSidebar>
        </div>
        <div className="w-full lg:w-[87%]">
        <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
      </div>
      {/* main content section end */}
    </div>
  );
};

export default DashBoard;