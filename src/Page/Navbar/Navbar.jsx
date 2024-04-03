
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

        </div>
        <div className="navbar-end flex items-center grow gap-5">

          <ul className="flex items-center gap-3">
            <li className="text-xl opacity-80 cursor-pointer">
              <HiOutlineBell className="text-2xl"></HiOutlineBell>
            </li>
            {/* language change button  */}
            {/* <li className="text-xl opacity-80 cursor-pointer">
              <button className="btn" onClick={() => changeLanguage()}>{lang ? "En" : "Bn"}</button>
            </li> */}
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
