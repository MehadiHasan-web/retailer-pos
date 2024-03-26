import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../Providers/AuthProvider';

const Expensh = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [userData, setUserData] = useState([])

  const [modalData, setModalData] = useState({});
  const [selectedOption, setSelectedOption] = useState(1); // 1 == all data, 2==approve, 3==pending
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [searchText, setSearchText] = useState("");
  const { baseURL } = useContext(AuthContext)

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

  // get data 
  useEffect(() => {
      const user_id = localStorage.getItem('user_id');
      axios.get(`${baseURL}/myinventoryrequest/${user_id}/`)
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
          console.log(response.data)
      } catch (error) {
          console.error('Error fetching data:', error);

      }
  };


  // clear search
  const handleClearSearch = (e) => {
      e.preventDefault();
      setSearchText("");
  }

  // Filtering Data
  useEffect(() => {
      let filteredResults = userData;

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
  }, [selectedOption, userData, searchText]);



  // Handle search input change
  const handleSearchInputChange = (e) => {
      setSearchText(e.target.value);
  };

  // show data PerPage
  const showDataPerPage = (e) => {
      e.preventDefault();
      setPostPerPage(parseInt(e.target.value));
  }

  return (
    <div>
      <div >
                <div className="container mx-auto px-12">
                    <div className="flex justify-start my-3 ">
                        <h2 className="w-34  font-semibold border-b-[1px] border-indigo-500 mx-auto text-lg">Expensh:</h2>
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
                                {/* search bar  */}
                                <input value={searchText}
                                    onChange={handleSearchInputChange} type="text" placeholder="Type here" className="input input-bordered input-sm max-w-xs w-full xl:w-44 rounded-full mx-1 mb-1 shadow hover:shadow-lg" />
                                <button onClick={handleClearSearch} type="button" className="btn btn-outline btn-sm rounded-full mx-1 hover:text-white shadow hover:shadow-lg">Clear filter</button>
                                <button type="button" className="btn btn-outline btn-sm rounded-full mx-1 hover:text-white shadow hover:shadow-lg" onClick={() => document.getElementById('my_modal_4').showModal()}>Entry</button>
                                <button type="button" className="btn btn-outline btn-sm rounded-full mx-1 hover:text-white shadow hover:shadow-lg" onClick={() => document.getElementById('my_modal_5').showModal()}>Category</button>

                            </form>
                        </div>
                    </div>
                    {/* search bar end  */}

                    <div className="w-full  shadow-lg rounded">
                        <table className="table text-base w-full">
                            {/* head */}
                            <thead className="bg-slate-200	">
                                <tr>
                                    <th className="text-black">No.</th>
                                    <th className="text-black">Serial Number</th>
                                    <th className="text-black">Name</th>
                                    <th className="text-black">Request Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    currentPosts.map((data, index) => <tr key={data.id} className='hover:bg-slate-200'>
                                        <td>{++index}</td>
                                        <td>{data.id}</td>
                                        <td>
                                            <div className="flex items-center gap-1">
                                                <div>
                                                    <div className="font-bold capitalize">{data.user.username}</div>
                                                    <div className="text-base opacity-50">{data.user.designation}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>20 january </p>
                                        </td>
                                        
                                    </tr>)
                                }

                            </tbody>
                            {/* foot */}
                            <tfoot className="bg-slate-200	">
                                <tr>
                                    <th className="text-black">No.</th>
                                    <th className="text-black">Serial Number</th>
                                    <th className="text-black">Name</th>
                                    <th className="text-black">Request Date</th>
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
                        {/* entry modal section start */}
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box w-[55%] max-w-5xl">
                                <div className="w-full">
                                  <div className=" p-3 rounded-lg shadow-md space-y-5 border-2  lg:w-3/5 text-center mx-auto">
                                  <h1 className="text-center text-xl font-bold mb-1">Entry</h1>
                                  <div className="card shadow-2xl bg-base-100">
                                    <form  className="card-body">
                                      <div className="form-control">
                                        <label className="label">
                                          <span className="label-text">Selection:</span>
                                        </label>
                                        <select className="select select-bordered select-sm w-full">
                                        <option disabled selected>Small</option>
                                        <option>Small Apple</option>
                                        <option>Small Orange</option>
                                        <option>Small Tomato</option>
                                      </select>
                                      </div>
                                      <div className="form-control">
                                        <label className="label">
                                          <span className="label-text">Price:</span>
                                        </label>
                                        <input type="number" placeholder="enter price" className="input input-bordered input-sm w-full " />
                                      </div>
                                      <div className="form-control">
                                        <label className="label">
                                          <span className="label-text">User Details:</span>
                                        </label>
                                        <textarea placeholder="details" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                                      </div>
                                      <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-primary">Create</button>
                                      </div>
                                    </form>
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
                        {/* entry modal section end */}
                        {/* category modal section start */}
                        <dialog id="my_modal_5" className="modal">
                            <div className="modal-box w-[55%] max-w-5xl">
                                <div className="w-full">
                                <div className=" p-5 rounded-lg shadow-md space-y-5 border-2  lg:w-3/5 text-center mx-auto">
                                <h1 className="text-center text-xl font-bold mb-4">Category</h1>
                                <div className="card shadow-2xl bg-base-100">
                                  <form  className="card-body">
                                    <div className="form-control">
                                      <label className="label">
                                        <span className="label-text">Category Name:</span>
                                      </label>
                                      <input
                                        type="text"
                                        placeholder="category name"
                                        className="input input-bordered"
                                        name="name"
                                      />
                                    </div>
                                    <div className="form-control">
                                      <label className="label">
                                        <span className="label-text">Category Details:</span>
                                      </label>
                                      <textarea placeholder="category details" className="textarea textarea-bordered textarea-md w-full" ></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                      <button type="submit" className="btn btn-primary">Create</button>
                                    </div>
                                  </form>
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
                        {/* category modal section end */}

                    </div>
                </div>
            </div>
    </div>
  );
};

export default Expensh;