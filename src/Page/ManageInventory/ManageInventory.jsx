// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { NavLink } from "react-router-dom";

import { NavLink } from "react-router-dom";
import "./style.css";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

const ManageInventory = () => {
  return (
    // <Menu as="div" className="relative inline-block text-left">
    //   <div>
    //     <Menu.Button className="inline-flex w-full justify-between  rounded-md  text-sm ">
    //       Manage Inventory
    //       <ChevronDownIcon
    //         className="h-5 w-5 text-gray-400"
    //         aria-hidden="true"
    //       />
    //     </Menu.Button>
    //   </div>

    //   <Transition
    //     as={Fragment}
    //     enter="transition ease-out duration-100"
    //     enterFrom="transform scale-95"
    //     enterTo="transform scale-100"
    //     leave="transition ease-in duration-75"
    //     leaveFrom="transform  scale-100"
    //     leaveTo="transform  scale-95"
    //   >
    //     <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //       <div className="py-1">
    //         <Menu.Item>
    //           {({ active }) => (
    //             <NavLink
    //               to="/manageInventory/category"
    //               className={classNames(
    //                 active ? "bg-gray-100 text-gray-900" : "text-gray-700",
    //                 "block px-4 py-2 text-sm"
    //               )}
    //             >
    //               Category
    //             </NavLink>
    //           )}
    //         </Menu.Item>
    //         <Menu.Item>
    //           {({ active }) => (
    //             <NavLink
    //               to="/manageInventory/subcategory"
    //               className={classNames(
    //                 active ? "bg-gray-100 text-gray-900" : "text-gray-700",
    //                 "block px-4 py-2 text-sm"
    //               )}
    //             >
    //               Sub Category
    //             </NavLink>
    //           )}
    //         </Menu.Item>
    //         <Menu.Item>
    //           {({ active }) => (
    //             <NavLink
    //               to="/manageInventory/item"
    //               className={classNames(
    //                 active ? "bg-gray-100 text-gray-900" : "text-gray-700",
    //                 "block px-4 py-2 text-sm"
    //               )}
    //             >
    //               Item
    //             </NavLink>
    //           )}
    //         </Menu.Item>
    //         <Menu.Item>
    //           {({ active }) => (
    //             <NavLink
    //               to="/manageInventory/subitem"
    //               className={classNames(
    //                 active ? "bg-gray-100 text-gray-900" : "text-gray-700",
    //                 "block px-4 py-2 text-sm"
    //               )}
    //             >
    //               Sub Item
    //             </NavLink>
    //           )}
    //         </Menu.Item>
    //       </div>
    //     </Menu.Items>
    //   </Transition>
    // </Menu>
    // <div className="collapse p-0">
    //   <input type="checkbox" />
    //   <div className="collapse-title pb-0">
    //    Manage Inventory
    //   </div>
    //   <div className="collapse-content flex flex-col space-y-3 ">
    //     <NavLink to="/manageInventory/category" className="block">Category</NavLink>
    //     <NavLink to="/manageInventory/subcategory">Sub Category</NavLink>
    //     <NavLink to="/manageInventory/item">Item</NavLink>
    //     <NavLink to="/manageInventory/subitem">Sub Item</NavLink>
    //   </div>
    // </div>
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
        </ul>
      </div>
    </div>
  );
};

export default ManageInventory;
