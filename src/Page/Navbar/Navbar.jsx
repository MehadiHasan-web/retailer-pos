
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './../Sidebar/Sidebar';
function Navbar() {

  const navigate =useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }


  return (
    <>
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
    <div className="navbar-start ">
        {/* sidebar  */}
        <Sidebar></Sidebar>
    </div>
    <div className="navbar-center" >
        <Link to="/" className="btn btn-ghost text-xl">NTRCA Store Inventory Management Software</Link>
    </div>
    <div className="navbar-end" >

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
        <li><Link onClick={logout}>Logout</Link></li>
      </ul>
    </div>

    </div>
    </div>
    </>
  )
}

export default Navbar
