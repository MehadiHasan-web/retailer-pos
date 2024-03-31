import Title from "../../../Title/Title"
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from './../../../Providers/AuthProvider';

import { BiBarcodeReader } from "react-icons/bi";
import { Link } from "react-router-dom";
function InventoryRequest() {
    const [startDate, setStartDate] = useState(new Date());
    const [adminData, setAdminData] = useState([])
    const [modalData, setModalData] = useState({});
    const { baseURL } = useContext(AuthContext)
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(20);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex)

    let page = [];
    for (let i = 1; i <= Math.ceil(filteredData.length / postPerPage); i++) {
        page.push(i)
    }

    const nextPage = () => {
        if (currentPage < page.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    console.log(modalData)
    const isApprover = localStorage.getItem('is_approver') === 'true';
    const is_manager = localStorage.getItem('is_manager') === 'true';


    useEffect(() => {
        const user_id = localStorage.getItem('user_id');
        console.log(user_id);

        axios.get(`${baseURL}/inventory/?user_id=${7}`)
            .then((res) => res.data)
            .then((data) => setAdminData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [baseURL]);




    const takeAction = async (event) => {
        event.preventDefault();
        const form = event.target;
        // const reject_msg = form.reject_msg.value;
        // const approve_status =  form.approve_status.value;
        // const manager_status =  form.manager_status.value;        
        const approve_status = isApprover ? form.approve_status.value : (is_manager ? form.manager_status.value : null);

        let data = {};

        if (is_manager) {
            data.manager_status = form.manager_status.value;
        } else {
            data.approve_status = approve_status;
        }


        const response = await axios.put(`${baseURL}/inventory/${modalData.id}/`, data);

        if (response.status === 200) {
            toast.success("Successfully created");
        } else {
            toast.error("Try again")
        }
    }

    const showDataPerPage = (e) => {
        e.preventDefault();
        setPostPerPage(parseInt(e.target.value));
    }

    // Handle search input change
    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };

    useEffect(() => {
        let filteredResults = adminData;
        // Applying the search filter
        if (searchText.trim() !== "") {
            filteredResults = filteredResults.filter((item) =>
                item.user.username.toLowerCase().includes(searchText.toLowerCase()) ||
                item.id.toString().toLowerCase().includes(searchText.toLowerCase()) ||
                item.manager_status.toLowerCase().includes(searchText.toLowerCase()) ||
                item.approve_status.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        setFilteredData(filteredResults);
    }, [adminData, searchText]);



    return (
        <div>
            <Title pageName={"Inventory Complete"}></Title>
            {/* title section end */}
            {/* table history  */}
            <div >
                <div className="container mx-auto px-12">
                    <div className="flex justify-center my-3 ">
                        <h2 className="font-semibold border-b-[1px] border-indigo-500 text-2xl  ">Sales Return</h2>
                    </div>

                    {/* search bar  */}
                    <div className="py-2 mb-3 bg-slate-100 rounded-lg">
                        <div className="flex justify-center mt-1">
                            <form action="" className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-2  lg:flex md:gap-0 lg:justify-around lg:items-center">
                                <select className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1   shadow hover:shadow-lg"
                                    onChange={showDataPerPage}>
                                    <option value={20} className="font-bold">Show 20</option>
                                    <option value={30} className="font-bold">Show 30</option>
                                    <option value={40} className="font-bold">Show 40</option>
                                    <option value={50} className="font-bold">Show 50</option>
                                    <option value={100} className="font-bold">Show 100</option>
                                </select>
                                <div className="w-full xl:w-44 mx-1 mb-1">
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="w-full overflow-hidden border input input-sm  rounded-full" />
                                </div>
                                {/* search bar  */}
                                <input value={searchText} onChange={handleSearchInputChange} type="text" placeholder="Type here" className="input input-bordered input-sm max-w-xs w-full xl:w-44 rounded-full mx-1 mb-1  shadow hover:shadow-lg" />
                                <button type="submit" className="btn btn-outline btn-sm rounded-full mx-3  hover:text-white ">Search</button>
                                <button type="button" className="btn btn-outline btn-sm rounded-full mx-1  hover:text-white ">Clear filter</button>

                                <Link to={'/scanner'} type="button" className="btn btn-outline btn-sm rounded mx-1  hover:text-white "><BiBarcodeReader className="text-2xl" /></Link>

                            </form>
                        </div>
                    </div>
                    {/* search bar end  */}

                    <div className="overflow-x-auto  shadow-lg rounded">
                        <table className="table text-base">
                            {/* head */}
                            <thead className="bg-slate-200	">
                                <tr>
                                    <th className="text-black">No.</th>
                                    <th className="text-black">Sales ID</th>
                                    <th className="text-black">Customer Name</th>
                                    <th className="text-black">Customer Number</th>
                                    <th className="text-black">Customer Address</th>
                                    <th className="text-black">Date</th>
                                    <th className="text-black">Return Date</th>
                                    <th className="text-black">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPosts.map((tableData, index) => <tr key={tableData.id}>
                                        <td>{++index}</td>
                                        <td>{tableData.id}</td>
                                        <td>
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <div className="font-bold">{tableData.user.username}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>018303030303 </p>
                                        </td>
                                        <td>
                                            <p>Billa Road,Bogura </p>
                                        </td>
                                        <td>
                                            <p>20 january </p>
                                        </td>
                                        <td>  <p>4 march</p></td>
                                        <td>  <p>$ 700</p></td>


                                    </tr>)
                                }
                            </tbody>
                            {/* foot */}
                            <tfoot className="bg-slate-200	">
                                <tr>
                                    <th className="text-black">No.</th>
                                    <th className="text-black">Sales ID</th>
                                    <th className="text-black">Customer Name</th>
                                    <th className="text-black">Customer Number</th>
                                    <th className="text-black">Customer Address</th>
                                    <th className="text-black">Date</th>
                                    <th className="text-black">Return Date</th>
                                    <th className="text-black">Total Price</th>
                                </tr>
                            </tfoot>

                        </table>
                        {/* pagination section start */}
                        <div className="mx-auto text-center">
                            <div className="join ">
                                <button className="join-item btn" onClick={prevPage}>«</button>
                                {page.map((page, index) => (
                                    <button key={index} className="join-item btn" onClick={() => setCurrentPage(page)}>{page}</button>
                                ))}
                                <button className="join-item btn" onClick={nextPage}>»</button>
                            </div>
                        </div>
                        {/* pagination section end */}
                        {/* model  */}
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-11/12 max-w-[80%]">
                                <div className="flex flex-col md:flex-row">
                                    <div className="w-full md:w-[60%] order-1">
                                        <h3 className="font-bold text-lg">{modalData?.user?.username}</h3>
                                        <div className="w-full  rounded mt-6 ">
                                            {/* table start */}
                                            <table className="w-full overflow-y-scroll rounded-md mb-2">
                                                {/* head */}
                                                <thead className='bg-cyan-100 text-dark text-slate-100 h-6  shadow-lg'>
                                                    <th className='text-slate-600 text-sm'>SL</th>
                                                    <th className='text-slate-600 text-sm'>Product Name</th>
                                                    <th className='text-slate-600 text-sm'>Quantity</th>
                                                </thead>
                                                <tbody className='bg-slate-100'>
                                                    {/* row 1 */}
                                                    {
                                                        modalData?.items?.map((data, index) => <tr key={index} className='h-7 hover:bg-slate-300 mb-2'>
                                                            <td className='text-center text-sm'>
                                                                {index + 1}
                                                            </td>
                                                            <td className=' text-sm text-center'>
                                                                <h3 className="font-semibold"> {data.item.name}</h3>
                                                            </td>
                                                            <td className='text-center text-sm'>
                                                                {data.quantity}
                                                            </td>
                                                        </tr>)
                                                    }
                                                </tbody>
                                            </table>
                                            {/* table end */}
                                        </div>
                                        <div className="mb-4">
                                            <h2 className="font-bold">Additional Information</h2>
                                            <p className="text-justify mt-2">{modalData?.note}</p>
                                            <button className="btn btn-success btn-md mt-4">Download File</button>
                                        </div>
                                        <p className="font-semibold">Request Date : <span>20 january</span></p>
                                    </div>
                                    <div className="md:divider md:divider-horizontal md:divider-info mt-8 order-2 hidden mb:block"> OR </div>
                                    <div className="w-full md:w-[40%] order-3">


                                        {isApprover ? (
                                            <React.Fragment>
                                                <h3 className="mt-3 font-semibold">Approver Actions</h3>
                                            </React.Fragment>
                                        ) : (is_manager ? (
                                            <React.Fragment>
                                                <h3 className="mt-3 font-semibold">Managerial Actions</h3>
                                            </React.Fragment>
                                        ) : null)}
                                        <form onSubmit={takeAction}>
                                            <textarea className="textarea textarea-bordered my-3 w-full" placeholder="Return Message" name="reject_msg"></textarea>
                                            {isApprover ? (
                                                <React.Fragment>
                                                    <select className="select select-bordered w-full" name="approve_status">
                                                        <option selected>Take Actions</option>
                                                        <option value={'Approved'}>Approve</option>
                                                        <option value={'Returned'}>Return</option>
                                                        <option value={'Rejected'}>Reject</option>
                                                    </select>
                                                </React.Fragment>
                                            ) : (is_manager ? (
                                                <React.Fragment>
                                                    <select className="select select-bordered w-full" name="manager_status">
                                                        <option value={'Partial Disbursed'}>Partial Disburse</option>
                                                        <option value={'Disbursed'}>Disburse</option>
                                                        <option value={'Hold'}>Hold</option>
                                                    </select>
                                                </React.Fragment>
                                            ) : null)}
                                            <button className="btn btn-neutral mt-4">Submit</button>
                                        </form>
                                    </div>
                                </div>
                                {/* footer button  */}
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                    <ToastContainer position="bottom-right" />
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryRequest
