import { useEffect, useState } from "react";
import blankImg from '../../../public/blankImg.jpg'
// import { axios } from 'axios';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';


const UserInventory = () => {
  const [card, setCard] = useState([])
  const token = localStorage.getItem('token');


  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  function handleSearch() {
    const filteredResults = card.filter(product =>
      product.itemName.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filteredResults);
  }

  // clear search
  const handleClearSearch = (e) => {
    e.preventDefault();
    setSearchInput("");
    setFilteredProducts('');
  };



  // get data
  useEffect(() => {

    axios
      .get(`https://rpos.pythonanywhere.com/api/v1/inventory/`, {
        headers: { 'Authorization': 'token ' + token }
      })
      .then((res) => res.data)
      .then((data) => {
        console.log(data)
        setCard(data)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(filteredProducts)

  const addStockData = (event) => {
    event.preventDefault();
    const form = event.target;
    const id = form.id.value;
    const unit = form.unit.value;
    const transportationCost = form.transportationCost.value;
    const otherCost = form.otherCost.value;
    const updateData = {
      unit: unit,
      transportationCost: transportationCost,
      otherCost: otherCost,
    }
    axios.put(`https://rpos.pythonanywhere.com/api/v1/inventory/${id}/`, updateData, {
      headers: { 'Authorization': 'token ' + token }
    })
      .then(response => {
        console.log('Response:', response.data);
        toast.success("Successfully Updated");
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error(`${error.message} .Try again`);
      });
  }

  

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
    <div className="container mx-auto">

      {/* search bar  */}
      <div className="py-2 mb-3 bg-slate-100 rounded-lg">
        <div className="flex justify-center mt-1">
          <form
            action=""
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-2  lg:flex md:gap-0 lg:justify-around lg:items-center"
          >
            {/* search bar  */}
            <input
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered input-sm max-w-xs w-full xl:w-44 rounded-full mx-1 mb-1 shadow hover:shadow-lg"
            />
            <button
              onClick={handleSearch}
              type="button"
              className="btn btn-outline btn-sm rounded-full mx-1 hover:text-white shadow hover:shadow-lg"
            >
              Search
            </button>
            <button
              onClick={handleClearSearch}
              type="button"
              className="btn btn-outline btn-sm rounded-full mx-1 hover:text-white shadow hover:shadow-lg"
            >
              Clear filter
            </button>
            <Link to={"add-inventory"}>
              <button className="btn bg-green-500 text-white btn-sm rounded-full ">
                Product Entry
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-outline btn-sm rounded-full mx-1 hover:text-white shadow hover:shadow-lg"
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
      {/* products  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-2 md:gap-1 lg:gap-2 mt-5">
        {
          (filteredProducts.length > 0 ? filteredProducts : card).map((data, index) => <div key={index} className=" p-2 flex flex-col justify-between rounded shadow-lg bg-slate-50">
            {
              data.image ? <img className='w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded' src={data.image}></img> : <img src={blankImg} className='w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded'></img>
            }
            <div className="p-2">
              <h2 className="text-sm sm:text-base md:text-sm lg:text-sm font-semibold mx-auto my-1 md:my-1 lg:my-2">{data.itemName}</h2>
              <p className="text-sm sm:text-base md:text-sm">Stock : {data.unit}</p>
              <form onSubmit={addStockData} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span>Transportation Cost:</span>
                  <input name="transportationCost" type="text" placeholder="Type here" defaultValue={data.transportationCost} className="input input-bordered input-sm w-28" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Other Cost:</span>
                  <input name="otherCost" type="text" defaultValue={data.otherCost} placeholder="Type here" className="input input-bordered input-sm w-28" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Update Stock:</span>
                  <input name="unit" type="text" defaultValue={data.unit} placeholder="Type here" className="input input-bordered input-sm w-28" />
                </div>

                <input name="id" type="number" value={data.id} className="hidden" />
                <button type="submit"  className="bg-green-500 text-white  w-full my-2 btn btn-md uppercase rounded-full" >Update</button>
              </form>

            </div>
          </div>)
        }
      </div>
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
            <form method='dialog'>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {/* category modal section end */}


      <ToastContainer />
    </div>
  );
};

export default UserInventory;
