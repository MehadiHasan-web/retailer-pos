import { Outlet } from "react-router-dom";


const DashBoard = () => {
  return (
    <div className="flex">
      <div></div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;