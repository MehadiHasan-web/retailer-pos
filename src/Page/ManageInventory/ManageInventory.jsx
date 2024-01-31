

import { NavLink } from "react-router-dom";
import "./style.css";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import UserInventory from './../UserInventory/UserInventory';


const ManageInventory = () => {



  return (
    <div className="collapse p-0 ">
      <input type="checkbox" />
      <div className="collapse-title flex gap-10">
        Manage Inventory
        <ChevronDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
      </div>
      <div className="collapse-content p-0 w-full">
        <ul >
            <li><NavLink to="/manageInventory/category" className="block">Category</NavLink></li>
            <li><NavLink to="/manageInventory/subcategory" className="block">Sub Category</NavLink></li>
            <li><NavLink to="/manageInventory/item" className="block">Item</NavLink></li>
            <li><NavLink to="/manageInventory/subitem" className="block">Sub Item</NavLink></li>
            <li><NavLink to="/manageInventory/allUserInventory" className="block">All User Inventory</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default ManageInventory;
