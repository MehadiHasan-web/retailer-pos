import Title from "../../Title/Title";
import { useContext, useEffect, useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom"; import { IoQrCodeOutline } from "react-icons/io5";
import { FaBarcode } from "react-icons/fa6";
import { PiPrinterThin } from "react-icons/pi";
import { SiMicrosoftexcel } from "react-icons/si";
import { QRCodeSVG } from 'qrcode.react';
import { useReactToPrint } from "react-to-print";
import Barcode from "react-barcode";
import { format } from "date-fns";
import * as XLSX from 'xlsx/xlsx.mjs';
import * as fs from 'fs';
XLSX.set_fs(fs);


const SalesRequest = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [searchText, setSearchText] = useState("");
  const { baseURL } = useContext(AuthContext);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);
  const contentToPrintCustomer = useRef(null);
  const contentToPrintBR = useRef(null);
  const [URL, setUrl] = useState('');
  const [sheet, setSheet] = useState([]);


  useEffect(() => {
    setUrl(window.location.href)
  }, [URL, setUrl])

  let page = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / postPerPage); i++) {
    page.push(i);
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

  // get data
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`https://rpos.pythonanywhere.com/api/v1/sales/`, {
        headers: { 'Authorization': 'token ' + token }
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data)
        setUserData(data)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [baseURL]);


  // clear search
  const handleClearSearch = (e) => {
    e.preventDefault();
    setSearchText("");
  };

  // date filtering 
  useEffect(() => {

    const formattedStartDate = format(startDate, 'yyyy-MM-dd');
    const formattedEndDate = format(endDate, 'yyyy-MM-dd');

    const dateSearch = userData.filter((record) => {
      const recordDate = new Date(record.created_date);
      const formattedRecordDate = format(recordDate, 'yyyy-MM-dd');
      return formattedRecordDate >= formattedStartDate && formattedRecordDate <= formattedEndDate;

    })

    // make new array for excel sheet 
    const newData = (dateSearch.length > 0 ? dateSearch : userData).map((record) => {
      return {
        // 'Sales ID': record.id,
        'Customer Name': record.customer?.name,
        'Customer Number': record.customer?.phone_number,
        'Customer Address': record.customer?.address,
        'Date': record?.created_date,
        'Price': record?.total,
        // 'Courier ID': record.customer?.curierImgoice,
        'Notes': record.customer?.notes,
      };
    });
    setSheet(newData)

    setFilteredData(dateSearch)
    console.log(dateSearch)
  }, [userData, setFilteredData, startDate, endDate, setSheet])

  // Filtering Data
  useEffect(() => {
    let filteredResults = userData;

    // Applying the search filter
    if (searchText.trim() !== "") {
      filteredResults = filteredResults.filter(
        (item) =>
          item.customer.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.customer.phone_number.toLowerCase().includes(searchText.toLowerCase()) ||
          item.customer.address.toLowerCase().includes(searchText.toLowerCase()) ||
          item.id.toString().toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredData(filteredResults);
  }, [userData, searchText]);

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // show data PerPage
  const showDataPerPage = (e) => {
    e.preventDefault();
    setPostPerPage(parseInt(e.target.value));
  };



  // qr invoice customer code print 
  const handlePrintCustomer = useReactToPrint({
    content: () => contentToPrintCustomer.current,
  });
  // barcode  code print 
  const handlePrintBarcode = useReactToPrint({
    content: () => contentToPrintBR.current,
  });

  // download excel file   
  const handleExcel = (e) => {
    e.preventDefault();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var sDate = new Date(format(startDate, 'dd-MM-yyyy'))
    var eDate = new Date(format(endDate, 'yyyy-MM-dd'))
    var dates = sDate.getDate() + '/' + months[sDate.getMonth()] + ' To ' + eDate.getDate() + '/' + months[eDate.getMonth()];

    var workbook = XLSX.utils.book_new();
    var worksheet = XLSX.utils.json_to_sheet(sheet);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sales Request');
    XLSX.writeFileXLSX(workbook, `Sales Request ${dates}.xlsx`);

  };

  return (
    <>
      {/* title section start */}
      <Title pageName={"Inventory History"}></Title>
      {/* title section end */}
      {/* table history  */}
      <div>
        <div className="md:container md:mx-auto px-2 md:px-12">
          <div className="flex justify-start my-3 ">
            <h2 className="w-34  font-semibold border-b-[1px] border-indigo-500 mx-auto text-lg">
              Sales Request:
            </h2>
          </div>

          {/* search bar  */}
          <div className="py-2 mb-3 bg-slate-100 rounded-lg">
            <div className="flex justify-center mt-1">
              <form
                action=""
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-1 sm:gap-2 lg:flex md:gap-0 lg:justify-around lg:items-center"
              >
                <select
                  className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1   shadow hover:shadow-lg"
                  onChange={showDataPerPage}
                >
                  <option value={20} className="font-bold">
                    Show 20
                  </option>
                  <option value={30} className="font-bold">
                    Show 30
                  </option>
                  <option value={40} className="font-bold">
                    Show 40
                  </option>
                  <option value={50} className="font-bold">
                    Show 50
                  </option>
                  <option value={100} className="font-bold">
                    Show 100
                  </option>
                </select>

                {/*start date  */}
                <div className="w-full xl:w-44 mx-1 mb-1">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="w-full overflow-hidden border input input-sm  rounded-full shadow hover:shadow-lg"
                  />
                </div>
                {/*end date  */}
                <div className="w-full xl:w-44 mx-1 mb-1">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    className="w-full overflow-hidden border input input-sm  rounded-full shadow hover:shadow-lg"
                  />
                </div>
                {/* search bar  */}
                <input
                  value={searchText}
                  onChange={handleSearchInputChange}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered input-sm max-w-xs w-full xl:w-44 rounded-full mx-1 mb-1 shadow hover:shadow-lg"
                />
                <button
                  onClick={handleClearSearch}
                  type="button"
                  className="btn btn-outline btn-sm rounded-full mx-1 hover:text-white shadow hover:shadow-lg"
                >
                  Clear filter
                </button>
                <Link to={"sales-entry"}>
                  <button className="btn bg-green-500 text-white btn-sm rounded-full w-full ">
                    Sales Entry
                  </button>
                </Link>
                <button type="button" onClick={handleExcel} className="btn btn-outline btn-sm rounded-full mx-1 hover:text-white shadow hover:shadow-lg hover:gap-3">Download <SiMicrosoftexcel className="text-lg " /></button>
              </form>
            </div>
          </div>
          {/* search bar end  */}

          {/* table  */}
          <div className="overflow-x-auto  shadow-lg rounded">
            <table className="table text-base">
              {/* head */}
              <thead className="bg-slate-200	">
                <tr>
                  <th className="text-black ">No.</th>
                  <th className="text-black text-center">Sales ID</th>
                  <th className="text-black">Customer Name</th>
                  <th className="text-black ">Customer Number</th>
                  <th className="text-black ">Customer Address</th>
                  <th className="text-black ">Date</th>
                  <th className="text-black ">Total Price</th>
                  <th className="text-black ">Invoice</th>
                  <th className="text-black ">Invoice QR</th>
                  <th className="text-black ">Barcode</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((data, index) => (
                  <tr key={data.id} className={`${index % 2 == 1 ? 'bg-slate-100 border-b-[1px] border-slate-100' : 'bg-white border-b-[1px] border-slate-100'} hover:bg-green-50`}>
                    <td className="text-center">{++index}</td>
                    <td className="text-center">{data.id}</td>
                    <td className="text-center">
                      <div className="flex items-center gap-1">
                        <div>
                          <div className="font-bold capitalize">
                            {data.customer?.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="">
                      <p>{data.customer?.phone_number} </p>
                    </td>
                    <td className="">
                      <p>{data.customer?.address}</p>
                    </td>
                    <td className="">
                      <p>{data.created_date} </p>
                    </td>
                    <td className="">
                      <p>TK {data.total}</p>
                    </td>
                    {/* invoice  */}
                    <td className="">
                      <Link to={`${data.id}`}>
                        <button className="btn btn-outline btn-success btn-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                            />
                          </svg>
                        </button>
                      </Link>
                    </td>

                    {/*customer QR*/}
                    <td className="">
                      <button onClick={() => document.getElementById(`my_modal_customer_${index}`).showModal()} className="btn btn-outline btn-default btn-sm"><IoQrCodeOutline className="text-lg" /></button>
                      {/* qr code display */}
                      <dialog id={`my_modal_customer_${index}`} className="modal">
                        <div className="modal-box " style={{ maxWidth: '300px' }}>
                          <h3 className="font-bold text-lg text-center"> {data.customer?.name}</h3>
                          <h4 className="font-bold text-md text-center"> {data.customer?.phone_number}</h4>
                          <div className="flex justify-center">
                            {/* qrcode  */}
                            <div ref={contentToPrintCustomer} className='p-2 mb-2'>
                              <QRCodeSVG size={140} value={URL + '/' + data.id} className="p-2 border" />
                            </div>
                          </div>

                          <div className="float-right flex gap-2">
                            <button onClick={() => { handlePrintCustomer() }} className="btn btn-active btn-ghost btn-sm">Print <PiPrinterThin /></button>
                            <form method="dialog">
                              <button className="btn btn-sm">Close</button>
                            </form>
                          </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
                    </td>
                    {/* barcode  */}
                    <td className="">
                      <button onClick={() => document.getElementById(`my_modal_bar_${index}`).showModal()} className="btn btn-outline btn-default btn-sm"><FaBarcode className="text-lg" /></button>
                      {/* bar code display */}
                      <dialog id={`my_modal_bar_${index}`} className="modal">
                        <div className="modal-box " style={{ maxWidth: '300px' }}>
                          <h3 className="font-bold text-lg text-center"> {data.customer?.name}</h3>
                          <h4 className="font-bold text-md text-center"> {data.customer?.phone_number}</h4>
                          <div className="flex justify-center">
                            {/* barcode  */}
                            <div ref={contentToPrintBR} className='p-2 mb-2'>
                              <Barcode value={data.id} className="rounded w-64 border" />
                            </div>
                          </div>

                          <div className="float-right flex gap-2">
                            <button onClick={() => { handlePrintBarcode() }} className="btn btn-active btn-ghost btn-sm">Print <PiPrinterThin /></button>
                            <form method="dialog">
                              <button className="btn btn-sm">Close</button>
                            </form>
                          </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot className="bg-slate-200	">
                <tr>
                  <th className="text-black ">No.</th>
                  <th className="text-black ">Sales ID</th>
                  <th className="text-black ">Customer Name</th>
                  <th className="text-black ">Customer Number</th>
                  <th className="text-black ">Customer Address</th>
                  <th className="text-black ">Date</th>
                  <th className="text-black ">Total Price</th>
                  <th className="text-black ">Invoice</th>
                  <th className="text-black ">Invoice QR	</th>
                  <th className="text-black ">Barcode</th>
                </tr>
              </tfoot>
            </table>
            {/* pagination section start */}
            <div className="mx-auto text-center">
              <div className="join ">
                <button className="join-item btn" onClick={prevPage}>
                  «
                </button>
                {page.map((page, index) => (
                  <button
                    key={index}
                    className="join-item btn"
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                <button className="join-item btn" onClick={nextPage}>
                  »
                </button>
              </div>
            </div>
            {/* pagination section end */}

          </div>
        </div>
      </div>
    </>
  );
};

export default SalesRequest;
