import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ManComCard from '../Components/ManComCard';
import { ToastContainer, toast } from "react-toastify";
import { FaChevronRight } from "react-icons/fa6";

const Management = () => {
  const [position, setPosition] = useState({ x: 0 });
  const [open, setOpen] = useState(false);
  const [isHit, setIsHit] = useState(false);
  const token = localStorage.getItem('token');
  const [count, setCount] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [item, setItem] = useState([])
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [searchText, setSearchText] = useState("");

  console.log(open)

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`https://rpos.pythonanywhere.com/api/v1/inventory/`, {
        headers: { Authorization: "token " + token },
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        setTableData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

//   const selectItem = tableData.find((item) => item.id === itemId);

//   console.log(selectItem)

  const handleMouseMove = (event) => {
    const x = event.clientX;
    setPosition({ x });
    console.log(x);
  };

  function clickMe() {
    handleMouseMove(event);
  }
  const handleMouseUp = () => {
    setIsHit(false);
    if (isHit) {
      setCount(count + 1);
      clickMe();
    }
  };
  const handleMouseDown = () => {
    setIsHit(true);
    if (isHit) {
      setCount(count + 1);
      clickMe();
    }
  };

  // search section start
  // clear search
  const handleClearSearch = (e) => {
    e.preventDefault();
    setSearchText("");
  };

  // show data PerPage
  const showDataPerPage = (e) => {
    e.preventDefault();
    setPostPerPage(parseInt(e.target.value));
  };

  // Filtering Data
  useEffect(() => {
    let filteredResults = tableData;

    // Applying the search filter
    if (searchText.trim() !== "") {
      filteredResults = filteredResults.filter(
        (item) =>
          item.category.name.toLowerCase().includes(searchText.toLowerCase()) ||
          item.itemName.toLowerCase().includes(searchText.toLowerCase()) ||
          item.inventoryCost.toLowerCase().includes(searchText.toLowerCase()) ||
          item.mrp.toString().toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredData(filteredResults);
  }, [tableData, searchText]);

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  //pagination section start
  let page = [];
  for (let i = 1; i <= Math.ceil(filteredData.length / postPerPage); i++) {
    page.push(i);
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < page.length) {
      setCurrentPage(currentPage + 1);
    }
  };

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
    axios.post(`https://rpos.pythonanywhere.com/api/v1/categories/`, categoryData, {
      headers: { 'Authorization': 'token ' + token }
    })
      .then(response => {
        console.log('Response:', response.data);
        toast.success("Successfully created");
        const modal = document.getElementById("my_modal_5");
        modal.close();
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error(`${error.message} .Try again`);
      });
  }

  return (
    <>
      <div className="md:flex h-full relative">
        {/* one part start */}
        <div className="w-full md:w-4/6 bg-slate-50 text-black ">
          {/* search bar  */}
          <div className="px-8 mt-4">
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
                  <Link to={`/management/add-inventory`}>
                    <button className="btn bg-green-500 text-white btn-sm rounded-full w-full ">
                      Product Entry
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn bg-green-500 btn-sm rounded-full mx-1 text-white hover:text-white shadow hover:shadow-lg"
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Category
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* search bar end  */}
          {/* table section start */}
          <div className="px-8 overflow-x-auto">
            <table className="table text-base  ">
              {/* head */}
              <thead className="bg-slate-200">
                <tr>
                  <th className="text-black ">No.</th>
                  <th className="text-black">Item name</th>
                  <th className="text-black">Stock</th>
                  <th className="text-black ">Date</th>
                  <th className="text-black ">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr
                    key={data.id}
                    onClick={() => {setItem(data), setOpen(!open) }}
                    className={`${index % 2 == 1
                      ? "bg-slate-100 border-b-[1px] border-slate-100"
                      : "bg-white border-b-[1px] border-slate-100"
                      } hover:bg-green-50 hover:cursor-pointer hover:text-teal-500 hover:font-bold hover:border-b-2 hover:border-sky-300`}
                  >
                    <td className="text-center">{++index}</td>
                    <td className="">{data.itemName}</td>
                    <td className="">
                      <p>{data.unit} </p>
                    </td>
                    <td className="">
                      <p>{data.created_at} </p>
                    </td>
                    <td className="">
                      <p>TK {data.mrp}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* footer */}
              <tfoot className="bg-slate-200	">
                <tr>
                  <th className="text-black ">No.</th>
                  <th className="text-black ">Item name</th>
                  <th className="text-black ">Unit</th>
                  <th className="text-black ">Date</th>
                  <th className="text-black ">Total Price</th>
                </tr>
              </tfoot>
            </table>
          </div>
          {/* pagination section start */}
          <div className="mx-auto text-center mt-2 ">
            <div className="join shadow">
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
                <form method='dialog'>
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
        {/* one part end */}
        {/* two part start */}
        <button onClick={handleMouseDown} onMouseUp={handleMouseUp} className="cursor-col-resize px-[1px] shadow bg-black" ></button>
        {/* two part end */}
        {/* three part start */}
        <div className="hidden md:block md:w-2/6  text-black"><ManComCard item={item || []}></ManComCard></div>
        {/* three part end */}
      </div>
      <div className={`fixed md:hidden top-16 ${open ? 'left-2 duration-500' : 'left-[98%] duration-500'} w-full text-black bg-slate-300 p-2 h-full z-20`}>
        <div className="absolute top-[50%] -left-2 bg-white p-1 rounded-full">
          {
            open && <FaChevronRight onClick={() => {setOpen(!open)}} className="text-xl text-red-600"></FaChevronRight>
          }
        </div>
      <ManComCard item={item || []}></ManComCard>
      </div>
      <ToastContainer />
    </>
  );
};

export default Management;
