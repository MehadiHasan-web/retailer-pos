import { FaLongArrowAltRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import logo from "../../../../../public/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../../../../Providers/AuthProvider';
import axios from "axios";
import { Link } from "react-router-dom";

const WaitingList = () => {

  const [waitingCart, setWaitingCart] = useState([]);
  const {baseURL} = useContext(AuthContext);
  
  useEffect(() => {
  
    const user_id = localStorage.getItem('user_id');
    axios.get(`${baseURL}/myinventoryrequest/${user_id}/`)
        .then((res) => res.data)
        .then((data) => {
          const pendingData = data.reverse().filter((value) => value.approve_status === 'pending')
          setWaitingCart(pendingData)
        })
        .catch((error) => console.error("Error fetching data:", error));
}, [baseURL])


  return (
    <div>
      <div className="my-5">
            <ul className="flex justify-between items-center">
              <li className="text-2xl font-semibold">Waiting List</li>
              <li className="text-lg font-bold text-green-500 border-b-green-500 border-b-2">
                <Link to="/dashboard">See all</Link>
              </li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
              {
                waitingCart.slice(0,3).map((data, index) => <div key={index} className="card card-side bg-base-100 shadow-xl">
                <figure className="p-3">
                  <img src={logo} alt="Movie" className="rounded w-20 h-20" />
                </figure>
                <div className="card-body p-2">
                  <ul className="bg-black p-1 rounded-lg flex justify-between items-center">
                    <li>
                      <GoDotFill className="text-green-500 text-sm"></GoDotFill>
                    </li>
                    <li>
                      <span className="text-white text-sm">#{data.id}</span>
                    </li>
                  </ul>
                  <ul>
                    <li className="flex gap-5 items-center">
                      <span>
                        <IoPerson className="text-sm"></IoPerson>
                      </span>
                      <span className="text-lg font-semibold">{data.approver.username}</span>
                    </li>
                    <li className="flex gap-5 items-center">
                      <span>
                        <FaLongArrowAltRight className="text-sm"></FaLongArrowAltRight>
                      </span>
                      <span className="text-base text-gray-500">{data.items.length} Items</span>
                    </li>
                  </ul>
                </div>
              </div>)
              }
            </div>
          </div>
    </div>
  );
};

export default WaitingList;