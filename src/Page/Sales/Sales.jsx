import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { GiEntryDoor } from "react-icons/gi";

import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaCodePullRequest } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Sales = ({open}) => {
    return (
        <div className="collapse navlink p-0 ">
        <input type="checkbox" />
        <div title="Sales" className={`collapse-title lg:p-0 py-0 flex items-center  ${!open ? "justify-start" : "justify-end"} text-white `}>
          <RiMoneyDollarCircleFill className={`text-2xl text-green-500 ${!open && "mr-2"}`}/>
         {!open && <span>Sales</span>}
          <ChevronDownIcon
            className={`h-5 w-5 text-green-500 ${!open && "ml-5"}`}
            aria-hidden="true"
          />
        </div>
        <div className="collapse-content p-0 w-full text-white  pt-2">
          <ul className="space-y-2 pl-5">
            <li title="Sales Entry">
              <NavLink
                to="sales/sales-entry"
                className="flex items-center"
              >
                <GiEntryDoor className="text-xl text-green-500 mr-2"/>
                {!open && <span>Sales Entry</span>}
              </NavLink>
            </li>
            <li title="Sales Request"> 
              <NavLink
                to="sales/sales-request"
                className="flex items-center"
              ><FaCodePullRequest className="text-xl text-green-500 mr-2"/>
              {!open && <span>Sales Request</span>}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Sales;
