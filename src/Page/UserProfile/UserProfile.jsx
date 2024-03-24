import { Link } from "react-router-dom";
import { RiGlobalLine } from "react-icons/ri";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt, FaRegCalendarAlt } from "react-icons/fa";
import './UserProfile.css'


const UserProfile = () => {
  return (
    <div className="mt-5">
      <div className="container mx-auto">
        <div className="flex justify-center flex-col lg:flex-row gap-16 p-4">
          <div className="flex-1 lg:ml-14">
            <div className="p-5 bg-base-100 rounded-md shadow-2xl mb-5">
              <div>
                <div className="bgImgPro w-full h-28 rounded-md"></div>
                <div className="avatar -mt-12 flex justify-center">
                  <div className="w-24 rounded-full shadow-xl">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
              <div className="text-center space-y-1">
                <h6 className="lg:text-sm font-semibold text-gray-500">@Arnoldy</h6>
                <h4 className="lg:text-base font-semibold">Arnoldy Chafe</h4>
                <ul className="flex gap-2 justify-center items-center">
                  <li className="text-sm text-purple-500"><Link to="#">Bandung</Link></li>
                  <li className="text-sm text-gray-400"><Link to="#">Joind March 2023</Link></li>
                </ul>
                {/* <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <li className="text-lg border-[1px] border-gray-400 rounded-md"><Link to="#" className="flex justify-center items-center gap-3 p-1"><IoPersonOutline></IoPersonOutline><span>Follow</span></Link></li>
                  <li className="text-lg border-[1px] border-gray-400 rounded-md"><Link to="#" className="flex justify-center items-center gap-3 p-1"><BiMessageMinus></BiMessageMinus><span>Message</span></Link></li>
                  <li className="text-lg border-[1px] border-gray-400 rounded-md"><Link to="#" className="flex justify-center items-center gap-3 p-1"><HiDotsHorizontal></HiDotsHorizontal><span>More</span></Link></li>
                </ul> */}
                <p className="text-sm my-1">Lorem ipsum dolor sit, <br></br>amet consectetur adipisicing elit. Laboriosam pariatur<br></br> quia error doloribus fugiat dolorem!</p>
              </div>
            </div>
            <div className="p-5 bg-base-100 rounded-md shadow-2xl">
              <h3 className="lg:text-xl font-semibold">Information</h3>
              <ul className="mt-3 space-y-3">
                <li className="flex justify-between items-center text-base">
                  <Link to="#" className="text-gray-400 flex gap-2 items-center"><RiGlobalLine></RiGlobalLine><span>Website</span></Link>
                  <Link to="#">www.Arnoldy.com</Link>
                </li>
                <li className="flex justify-between items-center text-base">
                  <Link to="#" className="text-gray-400 flex gap-2 items-center"><HiOutlineMailOpen></HiOutlineMailOpen><span>Email</span></Link>
                  <Link to="#">hello@gmail.com</Link>
                </li>
                <li className="flex justify-between items-center text-base">
                  <Link to="#" className="text-gray-400 flex gap-2 items-center"><FaPhoneAlt></FaPhoneAlt><span>Phone</span></Link>
                  <Link to="#">+39409093</Link>
                </li>
                <li className="flex justify-between items-center text-base">
                  <Link to="#" className="text-gray-400 flex gap-2 items-center"><FaRegCalendarAlt></FaRegCalendarAlt><span>Joined</span></Link>
                  <Link to="#">20 March 2023</Link>
                </li>
              </ul>
              <div className="divider"></div>
              <ul className="flex flex-wrap gap-5">
                <li className="text-base border-[1px] border-slate-200 p-2 rounded-md bg-slate-100 text-center font-semibold"><Link to="#">UI Design</Link></li>
                <li className="text-base border-[1px] border-slate-200 p-2 rounded-md bg-slate-100 text-center font-semibold"><Link to="#">UX Design</Link></li>
                <li className="text-base border-[1px] border-slate-200 p-2 rounded-md bg-slate-100 text-center font-semibold"><Link to="#">Design System</Link></li>
                <li className="text-base border-[1px] border-slate-200 p-2 rounded-md bg-slate-100 text-center font-semibold"><Link to="#">Product</Link></li>
                <li className="text-base border-[1px] border-slate-200 p-2 rounded-md bg-slate-100 text-center font-semibold"><Link to="#">Successful</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex-1 mx-auto">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;