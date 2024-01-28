
import { NavLink, Outlet } from 'react-router-dom';


const PurchaseManagement = () => {



  return (
    <>
    <div className="container mx-auto ">
            <div className="py-2 px-5 mb-3 bg-slate-100 rounded-lg mt-5 flex justify-center">
                <ul className="flex gap-5 flex-wrap">
                  <li><NavLink to="/purchaseManagement" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Purchase Request</NavLink></li>
                    <li><NavLink to="/purchaseManagement/purchaseHistory" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Purchase Request History</NavLink></li>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    </>
  );
};

export default PurchaseManagement;