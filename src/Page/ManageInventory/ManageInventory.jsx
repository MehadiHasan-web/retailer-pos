import { NavLink } from "react-router-dom";
import "./style.css";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import UserInventory from "./../UserInventory/UserInventory";
import { MdManageHistory } from "react-icons/md";

const ManageInventory = () => {
  // const [isShow,setIsShow] = useState(false)
  // console.log(isShow);
  return (
    <div className="collapse navlink p-0 ">
      <input type="checkbox" />
      <div className="collapse-title flex items-center text-white  lg:p-0 pt-0">
        <MdManageHistory className="text-base mr-2 text-green-500"/>
        Inventory Management
        <ChevronDownIcon className="h-5 w-5 text-gray-400 ml-5" aria-hidden="true" />
      </div>
      <div className="collapse-content p-0 pt-2  h-44  text-white ">
        <ul className="space-y-2 pl-5">
          <li>
            <div className="dropdown block ">
              <div tabIndex={0} role="button" className="flex gap-10 ">
                Manage Inventory
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content  z-40 menu p-2 shadow bg-black rounded-box  w-full  "
              >
                <li>
                  <NavLink to="/manageInventory/category">Category</NavLink>
                </li>
                <li>
                  <NavLink to="/manageInventory/subcategory">
                    Sub Category
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/manageInventory/item">Item</NavLink>
                </li>
                <li>
                  <NavLink to="/manageInventory/subitem">Sub Item</NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/manageInventory/allUserInventory" className="block">
              All User Inventory
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    // <div className="collapse p-0 ">
    //   <input type="checkbox" />
    //   <div className="collapse-title flex gap-10">
    //     Manage Inventory
    //     <ChevronDownIcon
    //         className="h-5 w-5 text-gray-400"
    //         aria-hidden="true"
    //       />
    //   </div>
    //   <div className="collapse-content p-0 w-full">
    //     <ul >
    //         <li><NavLink to="/manageInventory/category" className="block">Category</NavLink></li>
    //         <li><NavLink to="/manageInventory/subcategory" className="block">Sub Category</NavLink></li>
    //         <li><NavLink to="/manageInventory/item" className="block">Item</NavLink></li>
    //         <li><NavLink to="/manageInventory/subitem" className="block">Sub Item</NavLink></li>
    //         <li><NavLink to="/manageInventory/allUserInventory" className="block">All User Inventory</NavLink></li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default ManageInventory;
