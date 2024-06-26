import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

const Expenses = () => {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [searchText, setSearchText] = useState("");
  const { baseURL } = useContext(AuthContext);
  const [category, setCategory] = useState([]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = filteredData.slice(firstPostIndex, lastPostIndex);
  const token = localStorage.getItem('token');

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

  // get Expenses data
  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    axios
      .get(`${baseURL}/expenses/`, {
        headers: { 'Authorization': 'token ' + token }
      })
      .then((res) => res.data)
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(userData)

  // category get 
  useEffect(() => {
    axios.get(`${baseURL}/expense-categories/`, {
      headers: { 'Authorization': 'token ' + token }
    })
      .then(response => {
        setCategory(response.data)
        // console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error(`${error.message} .Try again`);
      });
  }, [])


  // category create 
  const handleCategoryData = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const additionalInfo = form.categoryDetails.value;
    const categoryData = {
      name: name,
      additionalInfo: additionalInfo,
    }
    console.log(categoryData)
    axios.post(`${baseURL}/expense-categories/`, categoryData, {
      headers: { 'Authorization': 'token ' + token }
    })
      .then(response => {
        console.log('Response:', response.data);
        toast.success("Successfully created");
        const modal = document.getElementById('my_modal_5');
        modal.close();
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error(`${error.message} .Try again`);

      });
  }
  // entry create 
  const handleEntryData = (e) => {
    e.preventDefault()
    const form = e.target;
    const price = form.price.value;
    const note = form.userDetails.value;
    const category = form.category.value;
    const expensesData = {
      category: parseInt(category),
      note: note,
      amount: parseInt(price),
      date: new Date().toISOString().split('T')[0]
    }
    axios.post(`${baseURL}/expenses/`, expensesData, {
      headers: { 'Authorization': 'token ' + token }
    })
      .then(response => {
        console.log('Response:', response.data);
        toast.success("Successfully created");
        const model = document.getElementById('my_modal_4');
        model.close()
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error(`${error.message} .Try again`);
      });
  }


  // clear search
  const handleClearSearch = (e) => {
    e.preventDefault();
    setSearchText("");
  };

  // Filtering Data
  useEffect(() => {
    let filteredResults = userData;
    // Applying the search filter
    if (searchText) {
      filteredResults = filteredResults.filter(
        (item) =>
          item.id.toString().toLowerCase().includes(searchText.toLowerCase()) ||
          item.category.name.toString().toLowerCase().includes(searchText.toLowerCase())
      );
    }
    setFilteredData(filteredResults);


  }, [userData, searchText,]);

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  // show data PerPage
  const showDataPerPage = (e) => {
    e.preventDefault();
    setPostPerPage(parseInt(e.target.value));
  };


  const getTotalAmount = currentPosts.reduce((acc, item) => parseInt(acc) + parseInt(item.amount), 0);

  return (
    <div>
      <div>
        <div className="md;container md:mx-auto md:px-12 px-2">
          <div className="flex justify-start my-3 ">
            <h2 className="w-34  font-semibold border-b-[1px] border-indigo-500 mx-auto text-lg">
              Expenses
            </h2>
          </div>

          {/* search bar  */}
          <div className="py-2 mb-3 bg-slate-100 rounded-lg">
            <div className="flex justify-center mt-1">
              <form
                action=""
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2  lg:flex md:gap-0 lg:justify-around lg:items-center"
              >
                <select
                  className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1   shadow hover:shadow-lg"
                  onChange={showDataPerPage}
                >
                  <option value={5} className="font-bold">
                    Show 5
                  </option>
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
                {/* search bar  */}
                <input
                  value={searchText}
                  onChange={handleSearchInputChange}
                  type="text"
                  name="data"
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
                <button
                  type="button"
                  className="btn btn-outline btn-sm rounded-full mx-1 hover:text-white shadow hover:shadow-lg"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Entry
                </button>
                <button
                  type="button"
                  className="btn  btn-sm bg-green-500 rounded-full mx-1 hover:text-white shadow hover:shadow-lg"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Category
                </button>
              </form>
            </div>
          </div>
          {/* search bar end  */}

          <div className="overflow-x-auto  shadow-lg rounded">
            <table className="table text-base w-full">
              {/* head */}
              <thead className="bg-slate-200">
                <tr>
                  <th className="text-black">No.</th>
                  <th className="text-black">Serial Number</th>
                  <th className="text-black">Category</th>
                  <th className="text-black"> Date</th>
                  <th className="text-black"> Amount</th>
                  <th className="text-black"> Show</th>

                </tr>
              </thead>
              <tbody>
                {currentPosts.map((data, index) => (
                  <tr key={data.id} className={`${index % 2 == 1 ? 'bg-slate-100  ' : 'bg-stone-50'} hover:bg-green-50`}>
                    <td>{++index}</td>
                    <td>{data?.id}</td>
                    <td>
                      <div className="flex items-center gap-1">
                        <div>
                          <div className="font-bold capitalize">
                            {data?.category?.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>{data?.date}</p>
                    </td>
                    <td>
                      <p>{Math.floor(data?.amount)} TK</p>
                    </td>
                    <td>
                    <button
                  type="button"
                  className="btn btn-sm bg-green-500 rounded-full mx-1 hover:text-white shadow hover:shadow-lg"
                  
                >
                  <p><Link to={`${data?.id}`}><FaRegEye className="text-white hover:text-green-500 text-xl" /></Link></p>
                </button>
                      
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot className="bg-slate-200	">
                <tr>
                  <th className="text-black">No.</th>
                  <th className="text-black">Serial Number</th>
                  <th className="text-black">Category</th>
                  <th className="text-black"> Date</th>
                  <th className="text-black"> Total {getTotalAmount} Tk</th>
                  <th className="text-black"> Show </th>
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
            {/* entry modal section start */}
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-[55%] max-w-5xl">
                <div className="w-full">
                  <div className=" p-3 rounded-lg shadow-md space-y-5 border-2  lg:w-3/5 text-center mx-auto">
                    <h1 className="text-center text-xl font-bold mb-1">
                      Entry
                    </h1>
                    <div className="card shadow-2xl bg-base-100">
                      <form className="card-body" onSubmit={handleEntryData}>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Selection:</span>
                          </label>
                          <select name="category" className="select select-bordered select-sm w-full">
                            <option disabled selected>Select Category</option>
                            {category.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Price:</span>
                          </label>
                          <input
                            type="number"
                            placeholder="enter price"
                            className="input input-bordered input-sm w-full "
                            name="price"
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">User Details:</span>
                          </label>
                          <textarea
                            placeholder="details"
                            className="textarea textarea-bordered textarea-md w-full"
                            name="userDetails"
                          ></textarea>
                        </div>
                        <div className="form-control mt-6">
                          <button type="submit" className="btn btn-primary">
                            Create
                          </button>
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
                    <h1 className="text-center text-xl font-bold mb-4">
                      Category
                    </h1>
                    <div className="card shadow-2xl bg-base-100">
                      <form className="card-body" onSubmit={handleCategoryData}>
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
                            <span className="label-text">
                              Category Details:
                            </span>
                          </label>
                          <textarea
                            placeholder="category details"
                            className="textarea textarea-bordered textarea-md w-full"
                            name="categoryDetails"
                          ></textarea>
                        </div>
                        <div className="form-control mt-6">
                          <button type="submit" className="btn btn-primary">
                            Create
                          </button>
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
