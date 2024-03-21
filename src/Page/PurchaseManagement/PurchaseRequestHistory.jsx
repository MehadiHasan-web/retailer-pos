import Title from "../../Title/Title"
import { useContext, useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { MdDelete } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from './../../Providers/AuthProvider';





function PurchaseRequestHistory() {

  const [userData, setUserData] = useState([])
  const [selectedOption, setSelectedOption] = useState([]);
  const { baseURL } = useContext(AuthContext)
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const user_id = localStorage.getItem('user_id');
    axios.get(`${baseURL}/purchase/`)
      .then((res) => res.data)
      .then((data) => setUserData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [baseURL]);

  // increment Quantity 
  const incrementQuantity = (data) => {
    const updatedTable = userData.map(value => {
      if (value.id === data.id) {
        // Increment the quantity for the specific item
        return { ...value, quantity: value.quantity + 1 }
      }
      return value;
    })
    setUserData(updatedTable);
  };

  // decrement Quantity
  const decrementQuantity = (data) => {
    const updatedTable = userData.map((value) => {
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

    setUserData(updatedTable);
  };

  function openModal() {
    document.getElementById('my_modal_3').showModal()
  }
  //    selector onchange event 
  const handleChange = (id, value) => {
    setSelectedOption({ id, value });
    if (value === "Completed") {
      openModal()
    }
  };

  const sendData = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const id = selectedOption.id;
    const status = selectedOption.value;
    const data = { comment, status }

    axios.put(`${baseURL}/purchase/details/${id}/`, data)
      .then(response => {
        console.log('PUT request successful:', response.data.message);
        if (response.data.message) {
          toast.success("Updated Successfully");
        }
      })
      .catch(error => {
        console.error('Error performing PUT request:', error);
        // Handle error
      });

  }

  // handle Select
  const handleSelectChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const newSelectedOption = parseInt(e.target.value);
    setSelectedOption(newSelectedOption);
  }

  useEffect(() => {
    let filteredResults = userData;
    // Applying the search filter
    if (searchText.trim() !== "") {
      filteredResults = userData.filter((item) =>
        item.item.toLowerCase().includes(searchText.toLowerCase())
        // item.id.toString().toLowerCase().includes(searchText.toLowerCase()) ||
        // item.manager_status.toLowerCase().includes(searchText.toLowerCase()) ||
        // item.approve_status.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(filteredResults)
    }
  }, []);

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      {/* title section start */}
      <Title pageName={"Purchase Request History"}></Title>
      {/* title section end */}
      {/* table history  */}
      <div >
        <div className="container mx-auto px-12">
          <div className="flex justify-start my-3 ">
            <h2 className="w-34  font-semibold border-b-[1px] border-indigo-500 mx-auto">Purchase Request History:</h2>
          </div>

          {/* search bar  */}
          <div className="py-2 mb-3 bg-slate-100 rounded-lg">
            <div className="flex justify-center mt-1">
              <form action="" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2  lg:flex md:gap-0 lg:justify-around lg:items-center">
                {/* input Pagination number  */}
                {/* <select className="select select-sm select-bordered w-full xl:w-44  max-w-xs rounded-full mx-1 mb-1  shadow hover:shadow-lg"
                                    onChange={showDataPerPage}>
                                    <option value={20} className="font-bold">Show 20</option>
                                    <option value={30} className="font-bold">Show 30</option>
                                    <option value={40} className="font-bold">Show 40</option>
                                    <option value={50} className="font-bold">Show 50</option>
                                    <option value={100} className="font-bold">Show 100</option>
                                </select> */}
                {/* date end */}
                <select className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1   shadow hover:shadow-lg"
                  onChange={handleSelectChange}>
                  <option value={1}>All Application</option>
                  <option value={2}>Complete Application</option>
                  <option value={3}>Pending Application</option>
                </select>

                {/* search bar  */}
                <input value={searchText} onChange={handleSearchInputChange} type="text" placeholder="Type here" className="input input-bordered input-sm max-w-xs w-full xl:w-44 rounded-full mx-1 mb-1  shadow hover:shadow-lg" />

                <button type="button" className="btn btn-outline btn-sm rounded-full mx-1  hover:text-white  shadow hover:shadow-lg">Clear filter</button>

              </form>
            </div>
          </div>
          {/* search bar end  */}
          <div className="overflow-x-auto  shadow-lg rounded">
            <table className="table">
              {/* head */}
              <thead className="bg-slate-200	">
                <tr>
                  <th className="text-black">Item Name</th>
                  <th className="text-black">Quantity</th>
                  <th className="text-black">Receive Date</th>
                  <th className="text-black">Status</th>
                  <th className="text-black">Show/Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  userData.map((data, index) => <tr key={data.id}>

                    <td>
                      <div className="flex items-center gap-1">
                        <div>
                          <div className="font-bold">{data.item}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>{data.quantity} </p>
                    </td>
                    <td>
                      <p> 1 january 2024</p>
                    </td>
                    <td>
                      <p>{data.status}</p>
                    </td>

                    <td>
                      <select id={data.id} className="select select-sm select-bordered  xl:w-24 rounded-full mx-1 mb-1 " name="status" onChange={() => handleChange(event.target.id, event.target.value)} >
                        <option selected>Take Action</option>
                        <option value={'Pending'}>Pending</option>
                        <option value={'Completed'}>Complete</option>
                      </select>
                    </td>
                  </tr>)
                }

              </tbody>
              {/* foot */}
              <tfoot className="bg-slate-200	">
                <tr>
                  <th className="text-black">Item Name</th>
                  <th className="text-black">Quantity</th>
                  <th className="text-black">Receive Date</th>
                  <th className="text-black">Status</th>
                  <th className="text-black">Show/Action</th>
                </tr>
              </tfoot>
            </table>
            {/* modal  */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog" >
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <div>
                  <form action="" className="my-2" onSubmit={sendData}>
                    <textarea name="comment" className="textarea textarea-bordered w-full" placeholder="Write something"></textarea>
                    <input name="file" type="file" className="file-input file-input-bordered w-full mt-2" />
                    <button type="submit" className="btn btn-neutral float-end mt-2">Done</button>
                  </form>
                </div>
              </div>
            </dialog>
            {/* modal end  */}
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default PurchaseRequestHistory;
