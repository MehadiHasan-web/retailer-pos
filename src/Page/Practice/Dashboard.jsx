
import { useContext, useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
// import TinyLineChart from "./TinyLineChart";
// import { AuthContext } from './../../Providers/AuthProvider';

const Dashboard = () => {

  // get Dashboard data 
  const [data, setData] = useState([])
  const { accountURL } = useContext(AuthContext)
  const token = localStorage.getItem('token');
  useEffect(() => {
    axios.get(`https://rpos.pythonanywhere.com/api/v1/dashboard/`, {
      headers: { 'Authorization': 'token ' + token }
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [accountURL]);


  return (
    <div className=" p-5">
      <div className="my-5">
        <ul className="sm:flex sm:justify-between sm:items-center">
          <li className="text-lg lg:text-xl"><span className="text-gray-500">Welcome back</span></li>
          <li className="mt-2 sm:mt-0">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-10 h-10 p-1 opacity-70 bg-red-500 -mr-3 rounded-lg text-white"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
          </li>
        </ul>
      </div>
      <div className="">
        <div className="">
          <MemberCard data={data} ></MemberCard>
        </div>
      </div>
     

    </div>
  );
};

export default Dashboard;