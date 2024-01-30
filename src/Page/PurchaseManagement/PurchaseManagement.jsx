
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { NavLink } from "react-router-dom";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }
import { NavLink } from "react-router-dom";
import "./style.css";
import { ChevronDownIcon } from "@heroicons/react/20/solid";


const PurchaseManagement = () => {


  return (
    <>
    {/* <div className="container mx-auto ">
            <div className="py-2 px-5 mb-3 bg-slate-100 rounded-lg mt-5 flex justify-center">
                <ul className="flex gap-5 flex-wrap">
                  <li><NavLink to="/purchaseManagement" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Purchase Request</NavLink></li>
                    <li><NavLink to="/purchaseManagement/purchaseHistory" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Purchase Request History</NavLink></li>
                </ul>
            </div>
            <Outlet></Outlet>
        </div> */}
        {/* <Menu as="div" className="relative inline-block text-left ">
      <div >
        <Menu.Button className="inline-flex w-full justify-between  rounded-md  text-sm ">
          Purchase Management
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/purchaseManagement/purchaseRequest"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Purchase Request
                </NavLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/purchaseManagement/purchaseHistory"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Purchase History
                </NavLink>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu> */}
    <div className="collapse p-0 ">
      <input type="checkbox" />
      <div className="collapse-title flex gap-10">
        Purchase Management
        <ChevronDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
      </div>
      <div className="collapse-content p-0 w-full">
        <ul >
            <li><NavLink to="/purchaseManagement/purchaseRequest" className="block">Purchase Request</NavLink></li>
            <li><NavLink to="/purchaseManagement/purchaseRequestHistory" className="block">Purchase Request History</NavLink></li>
            
        </ul>
      </div>
    </div>
    </>
  );
};

export default PurchaseManagement;