import { Outlet } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const DashBoard = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default DashBoard;