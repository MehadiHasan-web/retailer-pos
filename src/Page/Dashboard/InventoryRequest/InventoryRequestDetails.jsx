import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useParams } from "react-router-dom";

const InventoryRequestDetails = () => {
  const { baseURL } = useContext(AuthContext);
  const { id } = useParams();
  const [detailsData, setDetailsData] = useState([]);

  console.log(id);
  useEffect(() => {
    axios
      .get(`${baseURL}/inventory/${id}/`)
      .then((res) => res.data)
      .then((data) => setDetailsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [baseURL, id]);
  console.log(detailsData);

  return (
    <div className="container  mx-auto mb-10 ">
      <div className="bg-white h-screen mx-52 mt-10 p-10 relative">
        <div className="flex justify-between ">
          <h2 className="font-bold text-xl uppercase">Holos Technologies</h2>
          <p>No: #A12099</p>
        </div>
        <h2 className="text-7xl font-black mt-12">INVOICE</h2>
        <p className="font-bold mt-10 text-lg">
          Date : <span className="font-normal">02 june 2024</span>
        </p>
        <div className="flex justify-between mt-8 ">
          <div>
            <h5 className="font-bold mb-1">Customer info:</h5>
            <p>Silver Road</p>
            <p>Chittagong,Bangladesh</p>
            <p>djuk@gmail.com</p>
          </div>
          <div>
            <h5 className="font-bold mb-1">User info:</h5>
            <p>Golden Road</p>
            <p>Cox's Bazar,Bangladesh</p>
            <p>djuk@gmail.com</p>
          </div>
        </div>
        <div className="mt-8">
          <table className="table text-base">
            {/* head */}
            <thead className="bg-slate-200	">
              <tr>
                <th className="text-black">Item</th>
                <th className="text-black text-end">Quantity</th>
                <th className="text-black text-end">Price</th>
                <th className="text-black text-end">Amount</th>
              </tr>
            </thead>
            <tbody>
              {detailsData?.items?.map((tableData, index) => (
                <tr key={index}>
                  <td>{tableData.item.name}</td>
                  <td className=" text-end">3</td>
                  <td className=" text-end">200</td>
                  <td className=" text-end">
                    <p>$ 600</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="border-b-2"></div>
          <div className="flex justify-end mr-4 my-2 font-bold">
            <p className="mr-16">Total</p>
            <span>$1200</span>
          </div>
          <div className="border-b-2"></div>
          <div className="mt-20">
            <p className="font-bold">
              Payment method: <span className="font-normal">Cash</span>
            </p>
            <p className="font-bold">
              Note:{" "}
              <span className="font-normal">Thank you for choosing us!</span>
            </p>
          </div>
          <div className="absolute w-full h-52 bg-slate-400 left-0 bottom-0 border-b-">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryRequestDetails;
