import Title from "../../Title/Title"
import  { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { MdDelete } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";





function PurchaseRequestHistory() {
  
    const [userData, setUserData] = useState([])
    const [selectedOption, setSelectedOption] = useState([]);

useEffect(() => {
    const user_id = localStorage.getItem('user_id');
    axios.get('http://inv.xcode.com.bd/api/v1/inventory/purchase/')
        .then((res) => res.data)
        .then((data) => setUserData(data))
        .catch((error) => console.error("Error fetching data:", error));
}, []);

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

function openModal(){
    document.getElementById('my_modal_3').showModal()
}
console.log(selectedOption)
//    selector onchange event 
const handleChange = (id, value) => {
    setSelectedOption({ id, value }); 
    if(value === "Completed"){
        openModal()
    }    
};

  const sendData = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const id = selectedOption.id;
    const status = selectedOption.value;
    const data = {comment, status }
    
    axios.put(`http://inv.xcode.com.bd/api/v1/inventory/purchase/details/${id}/`, data)
    .then(response => {
      console.log('PUT request successful:', response.data.message);      
      if(response.data.message){
        toast.success("Updated Successfully");
      }
    })
    .catch(error => {
      console.error('Error performing PUT request:', error);
      // Handle error
    });

  }

  return (
    <>
    {/* title section start */}
    <Title pageName={"Purchase Request History"}></Title>
      {/* title section end */}
      {/* table history  */}
      <div >
        <div className="container mx-auto px-12">
       <div className="flex justify-start my-3 ">
       <h2 className="w-34  font-semibold border-b-[1px] border-indigo-500 ">Purchase Request History:</h2> <span className="ms-2"> Branch Name</span>
       </div>
       
            <div className="overflow-x-auto  shadow-lg rounded">
                <table className="table">
                    {/* head */}
                    <thead className="bg-slate-200	">
                    <tr>
                        <th  className="text-black">Item Name</th>
                        <th  className="text-black">Quantity</th>
                        <th  className="text-black">Receive Date</th>
                        <th  className="text-black">Status</th>          
                        <th  className="text-black">Show/Action</th>
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
                                <select  id={data.id}  className="select select-sm select-bordered  xl:w-24 rounded-full mx-1 mb-1 "  name="status"  onChange={() => handleChange(event.target.id, event.target.value) } >
                                    <option  selected>Take Action</option>
                                    <option value={'Pending'}>Pending</option>
                                    <option   value={'Completed'}>Complete</option>
                                </select> 
                            </td>
                        </tr>)
                        }

                    </tbody>
                    {/* foot */}
                    <tfoot className="bg-slate-200	">
                    <tr>
                        <th  className="text-black">Item Name</th>
                        <th  className="text-black">Quantity</th>
                        <th  className="text-black">Receive Date</th>
                        <th  className="text-black">Status</th>          
                        <th  className="text-black">Show/Action</th>
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
    </>
  )
}

export default PurchaseRequestHistory;
