import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './../../Page/Navbar/Navbar';
AOS.init();

const DashBoard = () => {
  return (
    <div>
      {/* navbar section start */}
      <Navbar></Navbar>
      {/* navbar section end */}
      {/* main content section start */}
      <Outlet></Outlet>
      {/* main content section end */}
    </div>
  );
};

export default DashBoard;