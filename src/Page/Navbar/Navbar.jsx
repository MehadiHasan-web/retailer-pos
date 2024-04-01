
import Sidebar from "./../Sidebar/Sidebar";
import { HiOutlineBell } from "react-icons/hi2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

function Navbar() {
  const userToken = localStorage.getItem('token')
  // const userDesignation = localStorage.getItem('designation')

  const { searchFun, changeLanguage, lang, user } = useContext(AuthContext)

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10 justify-between">
        <div className="navbar-start block lg:hidden">
          {/* sidebar  */}
          <Sidebar></Sidebar>
        </div>
        <div className="navbar-center">
          {/* <label className="input focus-within:outline-none focus-visible:border-none w-32 md:w-64 lg:w-96 rounded-2xl flex items-center gap-2 mx-5 bg-slate-200 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-7 h-7 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className=" bg-slate-200 text-black w-full "
              placeholder="search medicine"
              onChange={(evt) => { searchFun(evt.target.value); }}
            />
          </label> */}

          {/* <Link to="/" className="btn btn-ghost text-xl">NTRCA Store </Link> */}
        </div>
        <div className="navbar-end flex items-center grow gap-5">
          {/* <div className="dropdown dropdown-end">
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
    </div> */}
          <ul className="flex items-center gap-3">
            {/* <li className="hidden md:block"><div className="timeline-end timeline-box flex items-center gap-2 font-semibold"><SlNote></SlNote><span className='text-sm hidden lg:block'>User Voucher</span></div></li> */}
            {/* <li>
              <div className="timeline-end timeline-box flex items-center gap-2 font-semibold">
                <TbScan className="text-xl"></TbScan>
                <span className="text-sm hidden lg:bl">Scan Prescription</span>
              </div>
            </li> */}
            <li className="text-xl opacity-80 cursor-pointer">
              <HiOutlineBell className="text-2xl"></HiOutlineBell>
            </li>
            <li className="text-xl opacity-80 cursor-pointer">
              <button className="btn" onClick={() => changeLanguage()}>{lang ? "En" : "Bn"}</button>
            </li>
          </ul>
          <div className="avatar">
            <div className="w-10 rounded-full">
              {
                userToken ? <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" /> : ""
              }

            </div>
          </div>
          <ul>
            <li className="font-bold">{user?.name}</li>
            <li className="text-sm">{user?.user_type}</li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
