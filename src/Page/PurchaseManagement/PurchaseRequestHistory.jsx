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
    axios.get(`http://inv.xcode.com.bd/api/v1/inventory/myinventoryrequest/${user_id}/`)
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
                    <th  className="text-black">Name</th>
                    <th  className="text-black">Request Date</th>
                    <th  className="text-black">Receive Date</th>
                    <th  className="text-black">Manager Status</th>                    
                    <th  className="text-black">Approver Status</th>
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
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">{data.user.username}</div>
                                <div className="text-sm opacity-50">{data.user.designation}</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <p>20 january </p>
                        </td>
                        <td>
                            <p>20 january </p>
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
                            <p>{data.manager_status}</p>
                        </td>
                        <td>
                            {/* {
                                data.approve_status === 1 ? 'Pending' :
                                data.approve_status === 2 ? 'Approved' :
                                data.approve_status === 3 ? 'Return' :
                                data.approve_status === 4 ? 'Reject' :
                                'Unknown'
                            } */}
                            <p>{data.approve_status}</p>
                        </td>

                        <td>
                        <button className="btn btn-outline btn-success btn-sm" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                        </button>
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
                    <th  className="text-black">Name</th>
                    <th  className="text-black">Request Date</th>
                    <th  className="text-black">Receive Date</th>
                    <th  className="text-black">Manager Status</th>
                    <th  className="text-black">Approver Status</th>    
                    <th  className="text-black">Show/Action</th>
                </tr>
                </tfoot>
                
            </table>
            {/* modal section start */}
            <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-[90%] max-w-5xl">
                        <div className="flex md:flex-row flex-col">
                            <div className="w-full md:w-[45%] order-1">
                                <h3 className="font-bold text-lg">Hart Hagerty</h3>
                                
                                <div className="w-full  rounded mt-6 ">
                                    {/* table start */}
                                    <table className="w-full overflow-y-scroll rounded-md mb-2">
                                    {/* head */}
                                    <thead className='bg-cyan-100 text-dark text-slate-100 h-6  shadow-lg'>                  
                                        <th className='text-slate-600 text-sm'>SL</th>
                                        <th className='text-slate-600 text-sm'>Product Name</th>
                                        <th className='text-slate-600 text-sm'>Quantity</th>
                                        <th className='text-slate-600 text-sm'>Inc/Dec</th>
                                        <th className='text-slate-600 text-sm'>Delete</th>
                                    </thead>
                                    <tbody className='bg-slate-100'>
                                        {/* row 1 */}
                                        {
                                            userData.map((data) => {
                                                <tr className='h-7 hover:bg-slate-300'>
                                        <td className='text-center text-sm'>
                                        01
                                        </td>
                                        <td className='text-center text-sm'>
                                        product name
                                        <div className="flex justify-center items-center gap-1">
                                            <span className="text-xs">1/1/24</span>
                                            <span className="text-success text-xs">pending</span>
                                        </div>
                                        </td>
                                        <td className='text-center text-sm'>
                                        {data.quantity}
                                        </td>
                                        <td className='text-center text-sm'>
                                        <div className='flex justify-around items-center'>
                                            <button ><FiPlus onClick={() => incrementQuantity(data)}className='bg-green-500 text-white text-xl p-[1px] rounded'></FiPlus></button>
                                            <button><FiMinus onClick={() => decrementQuantity(data)}className='bg-red-500 text-white text-xl p-[1px] rounded'></FiMinus></button>
                                            </div>
                                        </td>
                                        <td className=''>
                                            <MdDelete className='mx-auto bg-red-500 text-white text-xl p-[1px] rounded'></MdDelete>
                                            
                                        </td>
                                        </tr>
                                            })
                                        }
                                    </tbody>
                                    </table>
                                    {/* table end */}
                                </div>
                                <p className="font-semibold">Request Date : <span>20 january</span></p>
                                <p className="font-semibold">Quantity : <span>4</span></p>
                            </div>
                            <div className="md:divider md:divider-horizontal md:divider-info mt-8 order-2 hidden mb:block"> OR </div>
                            <div className="w-full md:w-[55%] order-3">
                                <h2 className="font-bold">Additional Information</h2>
                                <form>
                                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-sm w-full mt-2" ></textarea>
                                    <h3 className="mt-3 font-semibold">Attach File</h3>
                                    <div className="flex gap-3">
                                    <input type="file" className="file-input file-input-bordered file-input-md w-3/6" />
                                    <button type="submit" className="btn btn-md btn-success btn-outline">Update</button>
                                    </div>
                                </form>
                                <div className=" mt-4">
                                    <div>
                                        <button className="btn btn-success btn-md">Download File</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* footer button  */}
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                        <h1 className="text-center">This is Title</h1>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores sint quas aut autem doloribus excepturi.</p>
                    </div>
                    </dialog>
            {/* modal section end */}
            </div>
            </div>
        </div>
    </>
  )
}

export default PurchaseRequestHistory;
