import Title from "../../Title/Title"


function InventoryHistory() {
  return (
    <>
    {/* title section start */}
    <Title pageName={"Inventory History"}></Title>
      {/* title section end */}
      {/* table history  */}
      <div >
        <div className="container mx-auto">
       <div className="flex justify-start my-3 ">
       <h2 className="w-34  font-semibold border-b-[1px] border-indigo-500 ">Inventory History:</h2> <span className="ms-2"> Branch Name</span>
       </div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    Select
                    {/* <label>
                        <input type="checkbox" className="checkbox checkbox-sm" />
                    </label> */}
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Quantity</th>
                    <th>Action</th>
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
                    Zemlak, Daniel and Leannon
                    <br/>
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
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
                        <div className="font-bold">Brice Swyre</div>
                        <div className="text-sm opacity-50">China</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Carroll Group
                    <br/>
                    <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                    </td>
                    <td>1</td>
                    <th>
                    <button className="btn btn-outline btn-error btn-xs">Cenacle</button>
                    </th>
                </tr>
                {/* row 3 */}
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
                        <div className="font-bold">Marjy Ferencz</div>
                        <div className="text-sm opacity-50">Russia</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Rowe-Schoen
                    <br/>
                    <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                    </td>
                    <td>5</td>
                    <th>
                    <button className="btn btn-outline btn-error btn-xs">Cenacle</button>
                    </th>
                </tr>
                {/* row 4 */}
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox checkbox-sm " />
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
                        <div className="font-bold">Yancy Tear</div>
                        <div className="text-sm opacity-50">Brazil</div>
                        </div>
                    </div>
                    </td>
                    <td>
                    Wyman-Ledner
                    <br/>
                    <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
                    </td>
                    <td>2</td>
                    <th>
                    <button className="btn btn-outline btn-error btn-xs">Cenacle</button>
                    </th>
                </tr>
                </tbody>
                {/* foot */}
                <tfoot>
                <tr>
                    <th>
                    <button className="btn btn-outline btn-sm">Delate</button>
                    </th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Quantity</th>
                    <th>Action</th>
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
