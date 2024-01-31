
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
        <div className="  ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
        </svg>
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">        
        <li><Link onClick={logout}>Logout</Link></li>
      </ul>
    </div>

    </div>
    </div>
    </>
  )
}

export default Navbar
