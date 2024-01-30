import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const InstituteManagement = () => {
  return (
    // <div className="container mx-auto ">
    //         <div className="py-2 px-5 mb-3 bg-slate-100 rounded-lg mt-5 flex justify-center">
    //             <ul className="flex gap-5 flex-wrap">
    //               <li><NavLink to="/instituteManagement" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Institute Name</NavLink></li>
    //                 <li><NavLink to="/instituteManagement/branchName" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Branch Name</NavLink></li>
    //                 <li><NavLink to="/instituteManagement/departmentName" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Department Name</NavLink></li>
    //             </ul>
    //         </div>
    //         <Outlet></Outlet>
    //         <ToastContainer/>
    //     </div>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-between  rounded-md  text-sm ">
          Manage Inventory
          <ChevronDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform scale-95"
        enterTo="transform scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform  scale-100"
        leaveTo="transform  scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/manageInventory/category"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Category
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/manageInventory/subcategory"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Sub Category
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/manageInventory/item"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Item
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/manageInventory/subitem"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Sub Item
                </NavLink>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default InstituteManagement;