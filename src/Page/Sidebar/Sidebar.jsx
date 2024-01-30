import { Link } from "react-router-dom"
import ManageInventory from "../ManageInventory/ManageInventory";
import PurchaseManagement from "../PurchaseManagement/PurchaseManagement";
import InstituteManagement from "../InstituteManagement/InstituteManagement";



const Sidebar = () => {

  const isApprover = localStorage.getItem('is_approver') === 'true';
  const is_manager = localStorage.getItem('is_manager') === 'true';

  const adminAndManager = isApprover || is_manager;

  return (
    <>
      <div className="drawer" >
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-ghost btn-circle drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
        </div>
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

            <h2 className="text-center mb-8">Title heading</h2>

             <li><Link to="/dashboard">Dashboard</Link></li>
             <li><Link to="/">Create Inventory History</Link></li>

            {
              is_manager && <li><Link to="/inventoryRequest">Inventory Request</Link></li>
            }
            {
              is_manager && <li><PurchaseManagement></PurchaseManagement></li>
            }
            {
              isApprover && <li><Link to="/appointments">Appointments</Link></li>
            }
            <li><Link to="/myInventory">My Inventory</Link></li>
            {
              adminAndManager &&
              <>
                {
                  is_manager && <li><ManageInventory></ManageInventory></li>
                }
                  {/* <li><InstituteManagement></InstituteManagement></li> */}
              </>
            }
            {/* <li><Link to="/createUser">Create User</Link></li> */}

          </ul>

        </div>
      </div>

    </>
  )
}

export default Sidebar
