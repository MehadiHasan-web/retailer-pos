import Title from "../../Title/Title";
import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";


function MyInventoryRequest() {
  const [startDate, setStartDate] = useState(new Date());
  const [userData, setUserData] = useState([]);

  const [modalData, setModalData] = useState({});
  const [selectedOption, setSelectedOption] = useState(1); // 1 == all data, 2==approve, 3==pending
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [searchText, setSearchText] = useState("");
  const { baseURL } = useContext(AuthContext);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);

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
    const user_id = localStorage.getItem("user_id");
    axios
      .get(`${baseURL}/myinventoryrequest/${user_id}/`)
      .then((res) => res.data)
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [baseURL]);

  // open modal
  const openModal = async (data) => {
    console.log(data);
    try {
      const response = await axios.get(`${baseURL}/inventory/${data}/`);
      setModalData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // handle search
  const handleSelectChange = (e) => {
    e.preventDefault();
    const newSelectedOption = parseInt(e.target.value);
    setSelectedOption(newSelectedOption);
  };

  // clear search
  const handleClearSearch = (e) => {
    e.preventDefault();
    setSearchText("");
  };

  // Filtering Data
  useEffect(() => {
    let filteredResults = userData;

    if (selectedOption === 2) {
      filteredResults = filteredResults.filter(
        (item) => item.approve_status === "Approved"
      );
    } else if (selectedOption === 3) {
      filteredResults = filteredResults.filter(
        (item) => item.approve_status === "pending"
      );
    }

    // Applying the search filter
    if (searchText.trim() !== "") {
      filteredResults = filteredResults.filter(
        (item) =>
          item.user.username.toLowerCase().includes(searchText.toLowerCase()) ||
          item.id.toString().toLowerCase().includes(searchText.toLowerCase()) ||
          item.manager_status
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          item.approve_status.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredData(filteredResults);
  }, [selectedOption, userData, searchText]);

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // show data PerPage
  const showDataPerPage = (e) => {
    e.preventDefault();
    setPostPerPage(parseInt(e.target.value));
  };

  return (
    <>
      {/* title section start */}
      <Title pageName={"Inventory History"}></Title>
      {/* title section end */}
      {/* table history  */}
      <div>
        <div className="container mx-auto px-12">
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
                className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-2  lg:flex md:gap-0 lg:justify-around lg:items-center"
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
                {/* date end */}
                <select
                  className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1  shadow hover:shadow-lg"
                  onChange={handleSelectChange}
                >
                  <option value={1}>All Application</option>
                  <option value={2}>Complete Application</option>
                  <option value={3}>Pending Application</option>
                </select>
                {/* date  */}
                <div className="w-full xl:w-44 mx-1 mb-1">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
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
              </form>
            </div>
          </div>
          {/* search bar end  */}

          <div className="overflow-x-auto  shadow-lg rounded">
            <table className="table text-base">
              {/* head */}
              <thead className="bg-slate-200	">
                <tr>
                  <th className="text-black text-center">No.</th>
                  <th className="text-black text-center">Sales ID</th>
                  <th className="text-black text-center">Customer Name</th>
                  <th className="text-black text-center">Customer Number</th>
                  <th className="text-black text-center">Customer Address</th>
                  <th className="text-black text-center">Date</th>
                  <th className="text-black text-center">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((data, index) => (
                  <tr key={data.id} className="hover:bg-slate-200">
                    <td className="text-center">{++index}</td>
                    <td className="text-center">{data.id}</td>
                    <td className="text-center">
                      <div className="flex items-center gap-1">
                        <div>
                          <div className="font-bold capitalize">
                            {data.user.username}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      <p>01879009988 </p>
                    </td>
                    <td className="text-center">
                      <p>Billa Road,Bogura</p>
                    </td>
                    <td className="text-center">
                      <p>20 january </p>
                    </td>
                    <td className="text-center">
                      <p>$ 508</p>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot className="bg-slate-200	">
                <tr>
                  <th className="text-black text-center">No.</th>
                  <th className="text-black text-center">Sales ID</th>
                  <th className="text-black text-center">Customer Name</th>
                  <th className="text-black text-center">Customer Number</th>
                  <th className="text-black text-center">Customer Address</th>
                  <th className="text-black text-center">Date</th>
                  <th className="text-black text-center">Total Price</th>
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
            {/* modal section start */}
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-[90%] max-w-5xl">
                <div className="flex md:flex-row flex-col">
                  <div className="w-full md:w-[45%] order-1">
                    <h3 className="font-bold text-lg">
                      {modalData?.user?.username}
                    </h3>

                    <div className="w-full  rounded mt-6 ">
                      {/* table start */}
                      <table className="w-full overflow-y-scroll rounded-md mb-2">
                        {/* head */}
                        <thead className="bg-cyan-100 text-dark text-slate-100 h-6  shadow-lg">
                          <th className="text-slate-600 text-sm">SL</th>
                          <th className="text-slate-600 text-sm">
                            Product Name
                          </th>
                          <th className="text-slate-600 text-sm">Quantity</th>
                          {/* <th className='text-slate-600 text-sm'>Inc/Dec</th>
                                                    <th className='text-slate-600 text-sm'>Delete</th> */}
                        </thead>
                        <tbody className="bg-slate-100">
                          {/* row 1 */}
                          {modalData?.items?.map((data, index) => (
                            <tr
                              key={index}
                              className="h-7 hover:bg-slate-300 mb-2"
                            >
                              <td className="text-center text-sm">
                                {index + 1}
                              </td>
                              <td className=" text-sm text-center">
                                <h3 className="font-semibold">
                                  {" "}
                                  {data.item.name}
                                </h3>
                              </td>
                              <td className="text-center text-sm">
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
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {/* table end */}
                    </div>
                    <p className="font-semibold">
                      Request Date : <span>20 january</span>
                    </p>
                    <p className="text-justify mt-2">{modalData.note}</p>
                  </div>
                  <div className="md:divider md:divider-horizontal md:divider-info mt-8 order-2 hidden mb:block">
                    {" "}
                    OR{" "}
                  </div>
                  <div className="w-full md:w-[55%] order-3">
                    <h2 className="font-bold">Additional Information</h2>
                    <form>
                      <textarea
                        placeholder="Bio"
                        className="textarea textarea-bordered textarea-sm w-full mt-2"
                      ></textarea>
                      <h3 className="mt-3 font-semibold">Attach File</h3>
                      <div className="flex gap-3">
                        <input
                          type="file"
                          className="file-input file-input-bordered file-input-md w-3/6"
                        />
                        <button
                          type="submit"
                          className="btn btn-md btn-success btn-outline"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                    <div className=" mt-4">
                      <div>
                        <button className="btn btn-success btn-md">
                          Download File
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* footer button  */}
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            {/* modal section end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyInventoryRequest;
