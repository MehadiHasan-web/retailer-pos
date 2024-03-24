import { Link } from "react-router-dom";
import Title from "./../../Title/Title";
import { useState, useEffect } from 'react';


const AllUserInventory = () => {
  const [userData, setUserData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(20);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = userData.slice(firstPostIndex, lastPostIndex)
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
      fetch('/userInventory.json')
      .then((res) => res.json())
      .then((data) => {
        setUserData(data)
      })
    }, []);

    let page = [];
    for (let i = 1; i <= Math.ceil(userData.length / postPerPage); i++) {
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

const showDataPerPage = (e) => {
  e.preventDefault();
  setPostPerPage(parseInt(e.target.value));
}

// Handle search input change
const handleSearchInputChange = (e) => {
  setSearchText(e.target.value);
};

useEffect(() => {
  let filteredResults = userData;

  // Applying the search filter
  if (searchText.trim() !== "") {
      filteredResults = filteredResults.filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
      );
  }

  setUserData(filteredResults);
}, [ userData, searchText]);



  return (
    <div>
      <Title pageName={"All User Inventory"}></Title>
      {/* title section end */}
      {/* table history  */}
      <div>
        <div className="container mx-auto px-12">
          <div className="flex justify-center my-3 ">
            <h2 className="w-34  font-semibold border-b-[1px] border-indigo-500 text-lg">
              All User Inventory:
            </h2>{" "}
            <span className="ms-2"></span>
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
                                <input value={searchText} onChange={handleSearchInputChange} type="text" placeholder="Type here" className="input input-bordered input-sm max-w-xs w-full xl:w-44 rounded-full mx-1 mb-1  shadow hover:shadow-lg" />
                                <button type="button" className="btn btn-outline btn-sm rounded-full mx-3  hover:text-white ">Search</button>
                                <button type="button" className="btn btn-outline btn-sm rounded-full mx-1  hover:text-white ">Clear filter</button>

                            </form>
                        </div>
                    </div>
                    {/* search bar end  */}
          <div className="overflow-x-auto  shadow-lg rounded">
            <table className="table text-base">
              {/* head */}
              <thead className="bg-slate-200	">
                <tr>
                  <th className="text-black">#</th>
                  <th className="text-black">User Name</th>
                  <th className="text-black">User Quantity</th>
                  <th className="text-black">Use Details</th>
                  <th className="text-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  currentPosts.map((data, index) => <tr key={index}>
                  <td>{++index}</td>
                  <td>{data.name}</td>
                  <td>{data.userQuantity}</td>
                  <td>{data.details}</td>
                  <td>
                    <Link to='/userInventory'>...</Link>
                  </td>
                </tr>)
                }
              </tbody>
              {/* foot */}
              <tfoot className="bg-slate-200	">
              <tr>
                  <th className="text-black">#</th>
                  <th className="text-black">User Name</th>
                  <th className="text-black">User Quantity</th>
                  <th className="text-black">Use Details</th>
                  <th className="text-black">Actions</th>
                </tr>
              </tfoot>
            </table>
            {/* pagination section start */}
            <div className="mx-auto text-center">
              <div className="join ">
                <button className="join-item btn" onClick={prevPage}>«</button>
                  {page.map((page, index) => (
                    <button key={index} className="join-item btn" onClick={() => setCurrentPage(page)}>{page}</button>))}
                    <button className="join-item btn" onClick={nextPage}>»</button>
              </div>
            </div>
            {/* pagination section end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUserInventory;
