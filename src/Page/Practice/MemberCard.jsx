import { useEffect } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuDot } from "react-icons/lu";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { SiAwesomewm } from "react-icons/si";
import { GiReturnArrow, } from "react-icons/gi";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { MdCrisisAlert } from "react-icons/md";

const MemberCard = (data) => {
  console.log(data)

  useEffect(() => {
    Aos.init();
  }, []);
  const unitAlert = data.data.unit_alerts;


  return (
    <>
      {/* today  */}
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 mb-4">Today</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">

        {/* total_amount_sold.today */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:shadow-slate-400 hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer" data-aos="flip-left">
          <div className="">
            <VscGitPullRequestGoToChanges className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24 text-green-500" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"></li>
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Unit Sold</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_unit_sold?.today}</li>
              <li className="flex items-center">
                <span><LuDot className="text-gray-600"></LuDot></span>
              </li>
            </ul>
          </div>
        </div>

        {/* total_amount_sold */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400" data-aos="flip-left">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <SiAwesomewm className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Amount Sold</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_amount_sold?.today}</li>

            </ul>
          </div>
        </div>

        {/* total_sales_return */}
        <Link to="/sales-return">
          <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl   hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400" data-aos="flip-left">
            <div className="">
              {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
              <GiReturnArrow className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
            </div>
            <div className="w-full">
              <ul className="space-y-2">
                <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Sales Return</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
                <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_sales_return?.today}</li>

              </ul>
            </div>
          </div>
        </Link>

      </div>

      {/* yesterday  */}
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 mb-4">Yesterday</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">

        {/* total_unit_sold.today */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:shadow-slate-400 hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer" data-aos="flip-left">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <VscGitPullRequestGoToChanges className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Unit Sold</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_unit_sold?.yesterday}</li>
              <li className="flex items-center">
                <span><LuDot className="text-gray-600"></LuDot></span>
              </li>
            </ul>
          </div>
        </div>

        {/* total_amount_sold */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400" data-aos="flip-left">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <SiAwesomewm className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Amount Sold</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_amount_sold?.yesterday}</li>
            </ul>
          </div>
        </div>

        {/* total_sales_return */}
        <Link to="/sales-return">
          <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl   hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400" data-aos="flip-left">
            <div className="">
              {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
              <GiReturnArrow className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
            </div>
            <div className="w-full">
              <ul className="space-y-2">
                <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Sales Return</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
                <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_sales_return?.yesterday}</li>

              </ul>
            </div>
          </div>
        </Link>

      </div>

      {/* weekly  */}
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 mb-4">Weekly</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {/* total_amount_sold.week */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:shadow-slate-400 hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer" data-aos="flip-left">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <VscGitPullRequestGoToChanges className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Unit Sold</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_unit_sold?.week}</li>
              <li className="flex items-center">
                <span><LuDot className="text-gray-600"></LuDot></span>
              </li>
            </ul>
          </div>
        </div>

        {/* total_amount_sold */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400" data-aos="flip-left">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <SiAwesomewm className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Amount Sold</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_amount_sold?.week}</li>
            </ul>
          </div>
        </div>
        {/* total_sales_return */}
        <Link to="/sales-return">
          <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl   hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400" data-aos="flip-left">
            <div className="">
              {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
              <GiReturnArrow className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
            </div>
            <div className="w-full">
              <ul className="space-y-2">
                <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Sales Return</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
                <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_sales_return?.week}</li>

              </ul>
            </div>
          </div>
        </Link>

      </div>

      {/* month  */}
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 mb-4">Monthly</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        {/* total_unit_sold.month */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:shadow-slate-400 hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer" data-aos="flip-left">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <VscGitPullRequestGoToChanges className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Unit Sold</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_unit_sold?.month}</li>
              <li className="flex items-center">
                <span><LuDot className="text-gray-600"></LuDot></span>
              </li>
            </ul>
          </div>
        </div>

        {/* total_amount_sold */}
        <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400" data-aos="flip-left">
          <div className="">
            {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
            <SiAwesomewm className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
          </div>
          <div className="w-full">
            <ul className="space-y-2">
              <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Amount Sold</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
              <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_amount_sold?.month}</li>
            </ul>
          </div>
        </div>

        {/* total_sales_return */}
        <Link to="/sales-return">
          <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl   hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer hover:shadow-slate-400" data-aos="flip-left">
            <div className="">
              {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
              <GiReturnArrow className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
            </div>
            <div className="w-full">
              <ul className="space-y-2">
                <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Total Sales Return</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
                <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{data.data.total_sales_return?.month}</li>

              </ul>
            </div>
          </div>
        </Link>

      </div>

      {/* unite alert  */}
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 mb-4">Unit Alerts</h1>
      <div className="border-2 border-green-500 p-4 rounded">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-5">
          {unitAlert?.map((item, index) => (
            <div className="flex gap-5 items-center bg-white shadow-lg shadow-slate-300 w-full h-32 md:h-40 px-3 mb-5 rounded-xl  hover:shadow-slate-400 hover:border-solid hover:border-[3px] hover:border-red-100 hover:cursor-pointer" data-aos="flip-left" key={index}>
              <div className="">
                {/* <img className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" ></img> */}
                <MdCrisisAlert className="w-16 h-16 sm:h-14 sm:w-14 md:h-20 md:w-20 lg:h-20 lg:w-24" />
              </div>
              <div className="w-full">
                <ul className="space-y-2">
                  <li className="flex justify-between items-center"><span className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg font-semibold">{item?.itemName}</span><AiOutlineExclamationCircle className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500"></AiOutlineExclamationCircle></li>
                  <li className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-gray-500 font-semibold">{item?.unit}</li>
                  <li className="flex items-center">
                    <span><LuDot className="text-gray-600"></LuDot></span>
                  </li>
                </ul>
              </div>
            </div>
          ))}


        </div>

      </div>

    </>
  );
};

export default MemberCard;