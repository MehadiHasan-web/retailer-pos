import Title from "../../../Title/Title"
import  { useState } from "react";
import DatePicker from "react-datepicker";

function Admin() {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
    <Title pageName={"Inventory Complete"}></Title>
      {/* title section end */}
      {/* table history  */}
        <div >
            <div className="container mx-auto px-12">
                <div className="flex justify-start my-3 ">
                    <h2 className="w-34  font-semibold border-b-[1px] border-indigo-500 ">Inventory History:</h2> <span className="ms-2"> Branch Name</span>
                </div>

                    {/* search bar  */}
                    <div className="py-2 mb-3 bg-slate-100 rounded-lg">
                    <div className="flex justify-center mt-1">
                        <form action="" className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-2  lg:flex md:gap-0 lg:justify-around lg:items-center">
                            {/* category  */}
                            <select className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1 " >
                                <option disabled selected>Category</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            {/* subcategory  */}
                            <select className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1 " >
                                <option disabled selected>Subcategory?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            {/* subcategory  */}
                            {/* date end */}
                            <select className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1  " >
                                <option disabled selected>Subcategory?</option>
                                <option>Han Solo</option>
                                <option>Greedo</option>
                            </select>
                            {/* date  */}
                                <div className="w-full xl:w-44 mx-1 mb-1">
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-full overflow-hidden border input input-sm  rounded-full" />
                                </div>
                            {/* search bar  */}
                            <input type="text" placeholder="Type here" className="input input-bordered input-sm max-w-xs w-full xl:w-44 rounded-full mx-1 mb-1 " />
                            <button type="submit" className="btn btn-outline btn-sm rounded-full mx-3  hover:text-white ">Search</button>
                            <button type="button" className="btn btn-outline btn-sm rounded-full mx-1  hover:text-white ">Clear filter</button>

                        </form>
                    </div>
                    </div>
                    {/* search bar end  */}
            
                <div className="overflow-x-auto  shadow-lg rounded">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-slate-200	">
                        <tr>
                            <th  className="text-black">Name</th>
                            <th  className="text-black">Request Date</th>
                            <th  className="text-black">Perches Date</th>
                            <th  className="text-black">Quantity</th>
                            <th  className="text-black">Status</th>
                            <th  className="text-black">Show/Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>                       
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                    <p>20 january </p>
                                </td>
                                <td>
                                    <p>20 january </p>
                                </td>
                                <td>4</td>
                                <td>Pending</td>
                                <td>
                                <button className="btn btn-outline btn-success btn-sm" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                    </svg>
                                </button>
                                </td>
                            
                            </tr>                
                            {/* row 2 */}
                            <tr>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                    <p>20 january </p>
                                </td>
                                <td>
                                    <p>20 january </p>
                                </td>
                                <td>4</td>
                                <td className="text-red-500">Rejected</td>
                                <td>
                                <button className="btn btn-outline btn-success btn-sm " onClick={()=>document.getElementById('my_modal_4').showModal()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                    </svg>
                                </button>
                                </td>
                            </tr>                
                        </tbody>
                        {/* foot */}
                        <tfoot className="bg-slate-200	">
                        <tr>
                            <th  className="text-black">Name</th>
                            <th  className="text-black">Request Date</th>
                            <th  className="text-black">Perches Date</th>
                            <th  className="text-black">Quantity</th>
                            <th  className="text-black">Status</th>
                            <th  className="text-black">Show/Actions</th>
                        </tr>
                        </tfoot>
                        
                    </table>
                    {/* model  */}                    
                    <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className="flex flex-row">
                            <div className="basis-5/12 ">
                                <h3 className="font-bold text-lg">Hart Hagerty</h3>
                                
                                <div className="w-44  rounded mt-6 ">
                                    <img className="rounded w-full" src="https://th.bing.com/th/id/OIP.9rssJewM8mcVHxy84ucVXgAAAA?rs=1&pid=ImgDetMain" alt="image" />
                                </div>
                                <p className="font-semibold">Request Date : <span>20 january</span></p>
                                <p className="font-semibold">Perches Date: <span>20 january</span></p>
                                <p className="font-semibold">Quantity : <span>4</span></p>
                            </div>
                            <div className="divider divider-horizontal divider-info mt-8"> OR </div>
                            <div className="basis-7/12 ">
                                <h2 className="font-bold">Additional Information</h2>
                                <p  className="text-justify mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quia perspiciatis voluptatem consequuntur magni itaque mollitia esse voluptatibus magnam earum, possimus amet iste eum recusandae rerum quis doloribus exercitationem expedita quisquam saepe! Odit rem reiciendis, nemo accusantium veniam quibusdam </p>
                                <h3 className="mt-3 font-semibold">Attach File</h3>
                            </div>
                        </div>
                        {/* footer button  */}
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                    </dialog>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin
