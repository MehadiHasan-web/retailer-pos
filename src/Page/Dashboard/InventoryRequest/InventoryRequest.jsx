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

    // get return data 
    useEffect(() => {
        const token = localStorage.getItem('token');

        axios.get(`https://rpos.pythonanywhere.com/api/v1/sales/`, {
            headers: { 'Authorization': 'token ' + token }
        })
            .then((res) => res.data)
            .then((data) => {
                console.log(data)
                setAdminData(data)
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, [baseURL]);



    const showDataPerPage = (e) => {
        e.preventDefault();
        setPostPerPage(parseInt(e.target.value));
    }

    // Handle search input change
    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };

    // clear search
    const handleClearSearch = (e) => {
    e.preventDefault();
    setSearchText("");
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
                <div className="md:container md:mx-auto md:px-12 px-2">
                    <div className="flex justify-center my-3 ">
                        <h2 className="font-semibold border-b-[1px] border-indigo-500 text-2xl  ">Sales Return</h2>
                    </div>

                    {/* search bar  */}
                    <div className="py-2 mb-3 bg-slate-100 rounded-lg">
                        <div className="flex justify-center mt-1">
                            <form action="" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1 sm:gap-2  lg:flex md:gap-0 lg:justify-around lg:items-center">
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
                                <button onClick={handleClearSearch} type="button" className="btn btn-outline btn-sm rounded-full mx-1  hover:text-white ">Clear filter</button>

                                <Link to={'/scanner'} type="button" className="btn btn-outline btn-sm rounded mx-1  hover:text-white "><BiBarcodeReader className="text-2xl" /></Link>

                            </form>
                        </div>
                    </div>
                    {/* search bar end  */}

                    <div className="overflow-x-auto  shadow-lg rounded">
                        <table className="table table-base">
                            {/* head */}
                            <thead className="bg-slate-200	">
                                <tr>
                                    <th className="text-black">No.</th>
                                    <th className="text-black">Sales ID</th>
                                    <th className="text-black">Customer Name</th>
                                    <th className="text-black">Customer Number</th>
                                    <th className="text-black">Customer Address</th>
                                    <th className="text-black">Date</th>
                                    <th className="text-black">Returned Date</th>
                                    <th className="text-black">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPosts.map((tableData, index) => <tr key={tableData.id} className={`${index % 2 == 1 ? 'bg-slate-200 border-b-[1px] border-slate-300' : 'bg-white border-b-[1px] border-slate-300'}`}>
                                        <td>{++index}</td>
                                        <td>{tableData.id}</td>
                                        <td>
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <div className="font-bold">{tableData.customer?.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{tableData.customer?.phone_number}</p>
                                        </td>
                                        <td>
                                            <p>{tableData.customer?.address}</p>
                                        </td>
                                        <td>
                                            <p>{tableData.created_date}</p>
                                        </td>
                                        <td>  <p>{tableData?.returned_date}</p></td>
                                        <td>  <p>TK. {tableData?.total}</p></td>


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
                                    <th className="text-black">Returned Date</th>
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default InventoryRequest
