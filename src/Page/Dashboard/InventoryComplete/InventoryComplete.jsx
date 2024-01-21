import Title from '../../../Title/Title';
import './InventoryComplete.css';

const InventoryComplete = () => {
  return (
    <>
    {/* title section start */}
    <Title pageName={"Inventory Complete"}></Title>
      {/* title section end */}
      {/* table history  */}
      <div>
        <div className="container mx-auto">
       <div className="flex justify-start my-3 ">
       <h2 className="w-34  font-semibold border-b-[1px] border-indigo-500 ">Inventory History:</h2> <span className="ms-2"> Branch Name</span>
       </div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                  <tr>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Quantity</th>
                      <th>Action</th>
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
                      Zemlak, Daniel and Leannon
                    <br/>
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                    </td>
                    <td>4</td>
                    <th>
                    <button className="btn btn-outline btn-success btn-xs">Complete</button>
                    </th>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
      </div>
    </>
  );
};

export default InventoryComplete;