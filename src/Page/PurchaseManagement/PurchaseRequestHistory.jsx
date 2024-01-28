import Title from "../../Title/Title"
import  { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { MdDelete } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios";



function PurchaseRequestHistory() {
  
    const [userData, setUserData] = useState([])
    // useEffect(() => {
    //     fetch('card.json')
    //     .then((res) => res.json())
    //     .then((data) => setUserData(data))
    // },[])

useEffect(() => {
    const user_id = localStorage.getItem('user_id');
    axios.get(`http://inv.xcode.com.bd/api/v1/inventory/purchase/`)
        .then((res) => res.data)
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching data:", error));
}, []);

      // increment Quantity 
  const incrementQuantity = (data) => {
    const updatedTable = userData.map(value => {
      if (value.id === data.id) {
        // Increment the quantity for the specific item
        return { ...value, quantity: value.quantity + 1 }
      }
      return value;
    })
    setUserData(updatedTable);
  };

  // decrement Quantity
  const decrementQuantity = (data) => {
    const updatedTable = userData.map((value) => {
      if (value.id === data.id) {
        if (value.quantity > 1) {
          return { ...value, quantity: value.quantity - 1 };
        } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Sorry, quantity cannot be less than 1!",
                  });
            
        }
      }
      return value;
    });
  
    setUserData(updatedTable);
  };

  return (
    <>
    {/* title section start */}
    <Title pageName={"Purchase Request History"}></Title>
      {/* title section end */}
      {/* table history  */}
      <div >
        <div className="container mx-auto px-12">
       <div className="flex justify-start my-3 ">
       <h2 className="w-34  font-semibold border-b-[1px] border-indigo-500 ">Purchase Request History:</h2> <span className="ms-2"> Branch Name</span>
       </div>
       
        <div className="overflow-x-auto  shadow-lg rounded">
            <table className="table">
                {/* head */}
                <thead className="bg-slate-200	">
                <tr>
                    <th className="text-black">
                    Select
                    {/* <label>
                        <input type="checkbox" className="checkbox checkbox-sm" />
                    </label> */}
                    </th>
                    <th  className="text-black">Item Name</th>
                    <th  className="text-black">Quantity</th>
                    <th  className="text-black">Receive Date</th>
                    <th  className="text-black">Status</th>          
                    <th  className="text-black">Show/Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        userData.map((data, index) => <tr key={data.id}>
                        <td>
                            <label>
                                <input type="checkbox" className="checkbox checkbox-sm" />
                            </label>
                        </td>
                        <td>
                            <div className="flex items-center gap-1">
                                <div>
                                <div className="font-bold">{data.item}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>{data.quantity} </p>
                        </td>
                        <td>
                            {/* {
                                data.manager_status === 1 ? 'Pending' :
                                data.manager_status === 2 ? 'hold' :
                                data.manager_status === 3 ? 'disburse and hold' :
                                data.manager_status === 4 ? 'disburse and in purchase req' :
                                data.manager_status === 5 ? 'disbursed' :
                                'Unknown'
                            } */}
                            <p>{data.status}</p>
                        </td>
                        <td>
                            {/* {
                                data.approve_status === 1 ? 'Pending' :
                                data.approve_status === 2 ? 'Approved' :
                                data.approve_status === 3 ? 'Return' :
                                data.approve_status === 4 ? 'Reject' :
                                'Unknown'
                            } */}
                            <p>dsd {data.approve_status}</p>
                        </td>

                        <td>
                            <form action="" className="flex">
                            <select className="select select-sm select-bordered  xl:w-24 rounded-full mx-1 mb-1 "  name="status"  >
                                <option  selected>Take Action</option>
                                <option  value={'pending'}>Pending</option>
                                <option  value={'purchased'}>Purchased</option>
                            </select>
                            <button className="btn btn-neutral btn-sm ms-2">Save</button>
                            </form>
 
                        </td>
                    </tr>)
                    }

                </tbody>
                {/* foot */}
                <tfoot className="bg-slate-200	">
                <tr>
                    <th  className="text-black">
                    <button className="btn btn-outline btn-sm">Delate</button>
                    </th>
                    <th  className="text-black">Item Name</th>
                    <th  className="text-black">Quantity</th>
                    <th  className="text-black">Receive Date</th>
                    <th  className="text-black">Status</th>          
                    <th  className="text-black">Show/Action</th>
                </tr>
                </tfoot>
                
            </table>

            </div>
            </div>
        </div>
    </>
  )
}

export default PurchaseRequestHistory;
