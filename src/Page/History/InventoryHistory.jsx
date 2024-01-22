import Title from "../../Title/Title"
import  { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './InventoryHistory.css'


function InventoryHistory() {

    const [startDate, setStartDate] = useState(new Date());

  return (
    <>
    {/* title section start */}
    <Title pageName={"Inventory History"}></Title>
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
                <form action="" className="md:flex">
                    {/* category  */}
                    <select className="select select-sm select-bordered w-44 max-w-xs rounded-full mx-1 mb-1 " >
                        <option disabled selected>Category</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    {/* subcategory  */}
                    <select className="select select-sm select-bordered w-44 max-w-xs rounded-full mx-1 mb-1 " >
                        <option disabled selected>Subcategory?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    {/* subcategory  */}
                    {/* date end */}
                    <select className="select select-sm select-bordered w-44 max-w-xs rounded-full mx-1 mb-1  " >
                        <option disabled selected>Subcategory?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    {/* date  */}
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-32 overflow-hidden border input input-sm mx-1 mb-1 rounded-full" />
                    {/* search bar  */}
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm max-w-xs w-52 rounded-full mx-1 mb-1 " />
                    <button type="submit" className="btn btn-outline btn-sm rounded-full mx-3  hover:text-white ">Search</button>
                    <button type="button" className="btn btn-outline btn-sm rounded-full mx-1 mb-1  hover:text-white ">Clear filter</button>

                </form>
               </div>
            </div>
            {/* search bar end  */}
       
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
                    <th  className="text-black">Perches Date</th>
                    <th  className="text-black">Receive Date</th>
                    <th  className="text-black">Quantity</th>
                    <th  className="text-black">Action</th>
                </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-sm" />
                        </label>
                        </th>
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
                        <td>
                            <p>20 january </p>
                        </td>
                        <td>4</td>
                        <th>
                        <button className="btn btn-outline btn-error btn-xs">Cenacle</button>
                        </th>
                    </tr>                
                    {/* row 2 */}
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox checkbox-sm" />
                        </label>
                        </th>
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
                        <td>
                            <p>20 january </p>
                        </td>
                        <td>4</td>
                        <th>
                        <button className="btn btn-outline btn-error btn-xs">Cenacle</button>
                        </th>
                    </tr>                
                </tbody>
                {/* foot */}
                <tfoot className="bg-slate-200	">
                <tr>
                    <th  className="text-black">
                    <button className="btn btn-outline btn-sm">Delate</button>
                    </th>
                    <th  className="text-black">Name</th>
                    <th  className="text-black">Request Date</th>
                    <th  className="text-black">Perches Date</th>
                    <th  className="text-black">Receive Date</th>
                    <th  className="text-black">Quantity</th>
                    <th  className="text-black">Action</th>
                </tr>
                </tfoot>
                
            </table>
        </div>
        </div>
      </div>
    </>
  )
}

export default InventoryHistory
