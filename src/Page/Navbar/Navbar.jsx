
import { Link } from 'react-router-dom';
import Sidebar from './../Sidebar/Sidebar';
function Navbar() {
  return (
    <>
    <div className="navbar bg-base-100 shadow-sm sticky top-0">
    <div className="navbar-start">
        {/* sidebar  */}
        <Sidebar></Sidebar>
    </div>
    <div className="navbar-center" >
        <Link to="/home" className="btn btn-ghost text-xl">Holos-techies</Link>
    </div>
    <div className="navbar-end" >
        <button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>

        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><Link to="/">Logout</Link></li>
      </ul>
    </div>

    </div>
    </div>
    </>
  )
}

export default Navbar
