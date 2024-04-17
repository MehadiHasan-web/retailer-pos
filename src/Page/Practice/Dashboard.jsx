
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

  console.log(data)


  return (
    <div className=" p-5">
      <div className="">
        <div className="">
          <MemberCard data={data} ></MemberCard>
        </div>
      </div>
     

    </div>
  );
};

export default Dashboard;