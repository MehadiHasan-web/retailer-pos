import { Link } from "react-router-dom"



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

            <li><Link to="/history">Inventory History</Link></li>
            <li><Link to="/inventoryComplete">Inventory Complete</Link></li>
            {
              adminAndManager && <li><Link to="/admin">Admin</Link></li>
            }
            <li><Link to="/purchaseRequest">Purchase Request</Link></li>
            <li><Link to="/myInventory">My Inventory</Link></li>
            {
              adminAndManager &&
              <>
                <li><Link to="/manageInventory">Manage Inventory</Link></li>
                <li><Link to="/instituteManagement">Institute Management</Link></li>
              </>
            }

          </ul>

        </div>
      </div>

    </>
  )
}

export default Sidebar
