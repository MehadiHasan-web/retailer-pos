import Title from "../../../Title/Title"
import React, { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from './../../../Providers/AuthProvider';
import productJson from './../../../../public/products.json'
import Barcode from 'react-barcode';


function InventoryRequest() {
    const [endDate, setEndDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [adminData, setAdminData] = useState([])
    const [modalData, setModalData] = useState({});
    const [selectedOption, setSelectedOption] = useState(1); // 1 == all data, 2==approve, 3==pending
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(20);
    const [searchText, setSearchText] = useState("");
    const { baseURL } = useContext(AuthContext)
    const [products, setProduct] = useState([]);

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


    const isApprover = localStorage.getItem('is_approver') === 'true';
    const is_manager = localStorage.getItem('is_manager') === 'true';

    // get json products 
    useEffect(() => {
        setProduct(productJson);
    }, []);



    useEffect(() => {
        const user_id = localStorage.getItem('user_id');
        console.log(user_id);

        axios.get(`${baseURL}/inventory/?user_id=${user_id}`)
            .then((res) => res.data)
            .then((data) => setAdminData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [baseURL]);

    const openModal = async (data) => {
        console.log(data);
        try {
            const response = await axios.get(`${baseURL}/inventory/${data}/`);
            setModalData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);

        }
    };

    // increment Quantity 
    const incrementQuantity = (data) => {
        const updatedTable = adminData.map(value => {
            if (value.id === data.id) {
                // Increment the quantity for the specific item
                return { ...value, quantity: value.quantity + 1 }
            }
            return value;
        })
        setAdminData(updatedTable);
    };


    // decrement Quantity
    const decrementQuantity = (data) => {
        const updatedTable = adminData.map((value) => {
            if (value.id === data.id) {
                if (value.quantity > 1) {
                    return { ...value, quantity: value.quantity - 1 };
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Sorry, quantity cannot be less than 1!",
                    });
                }
            }
            return value;
        });

        setAdminData(updatedTable);
    };

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

    useEffect(() => {
        let filteredResults = adminData;

        if (selectedOption === 2) {
            filteredResults = filteredResults.filter((item) => item.approve_status === "Approved");
        } else if (selectedOption === 3) {
            filteredResults = filteredResults.filter((item) => item.approve_status === "pending");
        }

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
    }, [selectedOption, adminData, searchText]);

    // handle Select
    const handleSelectChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        const newSelectedOption = parseInt(e.target.value);
        setSelectedOption(newSelectedOption);
    }

    // Handle search input change
    const handleSearchInputChange = (e) => {
        setSearchText(e.target.value);
    };

    // clear search
    const handleClearSearch = (e) => {
        e.preventDefault();
        setSearchText("");
    }

    // search by datePicker
    const handleDateChange = () => {
        var endDateObject = new Date(endDate);
        var startDateObject = new Date(startDate);
        console.log(endDateObject)

        // Extract start year, month, and day from the Date object
        var startYear = startDateObject.getFullYear();
        var startMonth = ('0' + (startDateObject.getMonth() + 1)).slice(-2);
        var startDay = ('0' + startDateObject.getDate()).slice(-2);
        var startFormattedDate = startYear + '-' + startMonth + '-' + startDay;

        // Extract end year, month, and day from the Date object
        var endYear = endDateObject.getFullYear();
        var endMonth = ('0' + (endDateObject.getMonth() + 1)).slice(-2);
        var endDay = ('0' + endDateObject.getDate()).slice(-2);
        var endFormattedDate = endYear + '-' + endMonth + '-' + endDay;


        // shorting code 
        var resultProductData = products.filter(function (item) {
            var productDate = new Date(item.create_date);
            var itemYear = productDate.getFullYear();
            var itemMonth = ('0' + (productDate.getMonth() + 1)).slice(-2);
            var itemDay = ('0' + productDate.getDate()).slice(-2);
            var itemFormattedDate = itemYear + '-' + itemMonth + '-' + itemDay;
            console.log('item date: ' + itemFormattedDate)
            return itemFormattedDate >= startFormattedDate && itemFormattedDate <= endFormattedDate;
        });

        console.log(resultProductData)
    }
    // show data PerPage
    const showDataPerPage = (e) => {
        e.preventDefault();
        setPostPerPage(parseInt(e.target.value));
    }


    return (
        <div>

            {/* test barcode  */}
            <div className="text-center">
                <Barcode value="Mehadi Hasan" className="shadow rounded" />
            </div>


            <Title pageName={"Inventory Complete"}></Title>
            {/* title section end */}
            {/* table history  */}
            <div >
                <div className="container mx-auto px-12">
                    <div className="flex justify-start my-3 ">
                        <h2 className="w-34  font-semibold border-b-[1px] border-indigo-500  mx-auto text-lg">Inventory History:</h2>
                    </div>

                    {/* search bar  */}
                    <div className="py-2 mb-3 bg-slate-100 rounded-lg">
                        <div className="flex justify-center mt-1">
                            <form action="" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2  lg:flex md:gap-0 lg:justify-around lg:items-center">
                                {/* input Pagination number  */}
                                <select className="select select-sm select-bordered w-full xl:w-44  max-w-xs rounded-full mx-1 mb-1  shadow hover:shadow-lg"
                                    onChange={showDataPerPage}>
                                    <option value={20} className="font-bold">Show 20</option>
                                    <option value={30} className="font-bold">Show 30</option>
                                    <option value={40} className="font-bold">Show 40</option>
                                    <option value={50} className="font-bold">Show 50</option>
                                    <option value={100} className="font-bold">Show 100</option>
                                </select>
                                {/* date end */}
                                <select className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1   shadow hover:shadow-lg"
                                    onChange={handleSelectChange}>
                                    <option value={1}>All Application</option>
                                    <option value={2}>Complete Application</option>
                                    <option value={3}>Pending Application</option>
                                </select>
                                {/*Start date  */}
                                <div className="w-full xl:w-44 mx-1 mb-1 ">
                                    <DatePicker selected={startDate} onChange={(date) => { setStartDate(date); handleDateChange() }} className="w-full overflow-hidden border input input-sm  rounded-full   shadow hover:shadow-lg" />
                                </div>
                                <p>To</p>
                                {/*End date  */}
                                <div className="w-full xl:w-44 mx-1 mb-1">
                                    <DatePicker selected={endDate} onChange={(date) => { setEndDate(date); handleDateChange() }} className="w-full overflow-hidden border input input-sm  rounded-full  shadow hover:shadow-lg" />
                                </div>
                                {/* search bar  */}
                                <input value={searchText} onChange={handleSearchInputChange} type="text" placeholder="Type here" className="input input-bordered input-sm max-w-xs w-full xl:w-44 rounded-full mx-1 mb-1  shadow hover:shadow-lg" />

                                <button onClick={handleClearSearch} type="button" className="btn btn-outline btn-sm rounded-full mx-1  hover:text-white  shadow hover:shadow-lg">Clear filter</button>

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
                                    <th className="text-black">Serial Number</th>
                                    <th className="text-black">Name</th>
                                    <th className="text-black">Request Date</th>
                                    <th className="text-black">Approver Status</th>
                                    <th className="text-black">Manager Status</th>
                                    <th className="text-black">Show/Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPosts.map((tableData, index) => <tr key={tableData.id} className='hover:bg-slate-200'>
                                        <td>{++index}</td>
                                        <td>{tableData.id}</td>
                                        <td>
                                            <div className="flex items-center gap-3">

                                                <div>
                                                    <div className="font-bold capitalize">{tableData.user.username}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <p>20 january </p>
                                        </td>
                                        <td>
                                            <p>{tableData.approve_status === 'pending' ? <div className="badge badge-warning">{tableData.approve_status}</div> : <div className="badge badge-success text-white">{tableData.approve_status}</div>}</p>
                                            <p></p>
                                        </td>
                                        <td><p>{tableData.manager_status === 'pending' ? <div className="badge badge-warning">{tableData.manager_status}</div> : ''}
                                            {tableData.manager_status === 'Partial Disbursed' ? <div className="badge badge-success text-white">{tableData.manager_status}</div> : ''}
                                            {tableData.manager_status === 'waiting for approver' ? <div className="badge badge-info text-white">{tableData.manager_status}</div> : ''}
                                        </p></td>

                                        <td onClick={() => openModal(tableData.id)}>
                                            <button className="btn btn-outline btn-success btn-sm" onClick={() => document.getElementById('my_modal_4').showModal()}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                                </svg>
                                            </button>
                                        </td>

                                    </tr>)
                                }

                            </tbody>

                        </table>
                        {/* pagination section start */}
                        <div className="mx-auto text-center">
                            <div className="join ">
                                <button className="join-item btn" onClick={prevPage}>«</button>{page.map((page, index) => (
                                    <button key={index} className="join-item btn" onClick={() => setCurrentPage(page)}>{page}</button>))}
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
                                                    {/* <th className='text-slate-600 text-sm'>Inc/Dec</th>
                                                    <th className='text-slate-600 text-sm'>Delete</th> */}
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
                                                            {/* <td className='text-center text-sm'>
                                                                <div className='flex justify-around items-center'>
                                                                    <button ><FiPlus onClick={() => incrementQuantity(data)} className='bg-green-500 text-white text-xl p-[1px] rounded'></FiPlus></button>
                                                                    <button><FiMinus onClick={() => decrementQuantity(data)} className='bg-red-500 text-white text-xl p-[1px] rounded'></FiMinus></button>
                                                                </div>
                                                            </td>
                                                            <td className=''>
                                                                <MdDelete className='mx-auto bg-red-500 text-white text-xl p-[1px] rounded'></MdDelete>

                                                            </td> */}
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
