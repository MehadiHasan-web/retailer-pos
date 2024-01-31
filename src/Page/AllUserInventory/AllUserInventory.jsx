import { Link } from "react-router-dom";
import Title from "./../../Title/Title";

const AllUserInventory = () => {
  return (
    <div>
      <Title pageName={"All User Inventory"}></Title>
      {/* title section end */}
      {/* table history  */}
      <div>
        <div className="container mx-auto px-12">
          <div className="flex justify-start my-3 ">
            <h2 className="w-34  font-semibold border-b-[1px] border-indigo-500 ">
              All User Inventory:
            </h2>{" "}
            <span className="ms-2"> Branch Name</span>
          </div>

          <div className="overflow-x-auto  shadow-lg rounded">
            <table className="table">
              {/* head */}
              <thead className="bg-slate-200	">
                <tr>
                  <th className="text-black">#</th>
                  <th className="text-black">User Name</th>
                  <th className="text-black">User Quantity</th>
                  <th className="text-black">Use Details</th>
                  <th className="text-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#</td>
                  <td>Sohan</td>
                  <td>20</td>
                  <td>loremif sum that is sohan</td>
                  <td>
                    <Link to='/userInventory'>...</Link>
                  </td>
                </tr>
              </tbody>
              {/* foot */}
              <tfoot className="bg-slate-200	">
              <tr>
                  <th className="text-black">#</th>
                  <th className="text-black">User Name</th>
                  <th className="text-black">User Quantity</th>
                  <th className="text-black">Use Details</th>
                  <th className="text-black">Actions</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUserInventory;
