
import { useContext, useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import PieChartWithPadding from "./PieChartWithPadding";
import ProgressBars from "./ProgressBars";
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
      <div className="">
        <div className="">
          <MemberCard data={data} ></MemberCard>
        </div>
      </div>
      <div className="md:flex md:justify-between md:items-center gap-5 mt-5">
        <div className="md:flex-1 hidden">
          <ProgressBars></ProgressBars>
        </div>
        <div className="md:flex-2 my-5 md:my-0 hidden">
          <PieChartWithPadding></PieChartWithPadding>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;