import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { IoIosGitPullRequest } from "react-icons/io";
import { IoStopCircleOutline } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import { GiReturnArrow, GiStockpiles } from "react-icons/gi";
import { MdSupervisorAccount } from "react-icons/md";
import { IoIosDoneAll } from "react-icons/io";
import { BiPurchaseTag } from "react-icons/bi";


const MemberCard = (data) => {

  console.log(data.data.inventorrequest_approve)



  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">

        {/* inventorrequest_approve */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:shadow-slate-400 hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <VscGitPullRequestGoToChanges className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Inventory Request Approve</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.inventorrequest_approve}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* inventorrequest_disburse */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <IoIosGitPullRequest className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Inventory Request Disburse</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.inventorrequest_disburse}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* inventorrequest_partisl_disburse */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl   hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <IoIosGitPullRequest className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Inventory Request partials Disburse</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.inventorrequest_partisl_disburse}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* inventorrequest_hold */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl   hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <IoStopCircleOutline className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Inventory Request Hold</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.inventorrequest_hold}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* inventorrequest_reject */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl   hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <FcCancel className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Inventory Request Reject</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.inventorrequest_reject}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* inventorrequest_return */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl   hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <GiReturnArrow className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Inventory Request Return</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.inventorrequest_return}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* total_account */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl   hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <MdSupervisorAccount className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Account</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_account}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* total_inventory_stock */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl   hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <GiStockpiles className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Inventory Stock</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_inventory_stock}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>


        {/* total_purchased_Completed */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <IoIosDoneAll className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Purchased Completed</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_purchased_Completed}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* total_purchased_pending */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl   hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <IoIosDoneAll className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Purchased Pending</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_purchased_pending}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* total_purchased */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl   hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <BiPurchaseTag className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Purchased </span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_purchased}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* weekly  */}
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">Weekly Report</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {/* inventorrequest_disburse_week */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:shadow-slate-400 hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <IoIosGitPullRequest className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Inventory Request Disburse</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.inventorrequest_disburse_week}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* total_account_week */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:shadow-slate-400 hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <MdSupervisorAccount className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Account</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_account_week}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>


      {/* Monthly  */}
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">Monthly Report</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {/* inventorrequest_disburse_month */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:shadow-slate-400 hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <IoIosGitPullRequest className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Inventory Request Disburse</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.inventorrequest_disburse_month}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* total_account_month */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:shadow-slate-400 hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <MdSupervisorAccount className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Account</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_account_month}</li>
              <li className="flex items-center">
                <span className="text-red-500 text-xs sm:text-sm md:text- lg font-semibold">Lorem, ipsum.</span>
                <span><LuDot className="text-gray-600"></LuDot></span>
                <span className="text-xs sm:text-xs md:text-base text-gray-400">Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default MemberCard;