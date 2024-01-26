import { Link, NavLink, Outlet } from "react-router-dom";

const ManageInventory = () => {
    return (
        <div className="container mx-auto ">
            <div className="py-2 px-5 mb-3 bg-slate-100 rounded-lg mt-5 flex justify-center">
                <ul className="flex gap-5 flex-wrap">
                    <li><NavLink to="/manageInventory" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Category</NavLink></li>
                    <li><Link to="subcategory " className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Sub-Category </Link></li>
                    <li><Link to="item" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Item</Link></li>
                    <li><Link to="subItem" className="btn hover:btn-outline btn-sm rounded-full mx-3  hover:text-white">Sub-Item</Link></li>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ManageInventory;