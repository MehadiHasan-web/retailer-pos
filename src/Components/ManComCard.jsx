import { AiTwotoneDelete } from "react-icons/ai";
import Swal from 'sweetalert2'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


/* eslint-disable react/prop-types */
const ManComCard = ({ selectItem }) => {
  const token = localStorage.getItem("token");

  const addStockData = (event) => {
    event.preventDefault();
    const form = event.target;
    const id = selectItem.id;
    const unit = form.unit.value;
    const transportationCost = form.transportationCost.value;
    const otherCost = form.otherCost.value;
    const inventoryCost = form.inventoryCost.value;
    const productCost = form.productCost.value;
    const mrp = form.mrpValue.value;
    const updateData = {
      unit: unit,
      transportationCost: transportationCost,
      otherCost: otherCost,
      inventoryCost: inventoryCost,
      productCost: productCost,
      mrp: mrp,
    };
    console.log(updateData);
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
  };

  //delete products
  function deleteProduct() {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://rpos.pythonanywhere.com/api/v1/inventory/${selectItem?.id}/`, {
          headers: { 'Authorization': 'token ' + token }
        }).then(response => {
          console.log('Response:', response.data);
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        })
          .catch(error => {
            console.error('Error:', error);
            toast.error();
            Swal.fire({
              title: 'Sorry..!',
              text: `${error.message}. Please try again`,
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          });
      }
    });

  }

  return (
    <div>
      <div className="grid grid-cols-1 mt-5">
        <div className=" p-4">
          <div className=" flex flex-col justify-between rounded shadow-lg bg-slate-50 mb-6 ">
            <img className='w-full h-[250px]  rounded' src={'https://rpos.pythonanywhere.com/' + selectItem?.invImage}></img>
            <div className="p-2">
              <h2 className="text-sm sm:text-base md:text-sm lg:text-sm font-semibold mx-auto my-1 md:my-1 lg:my-2">
                {selectItem.itemName}
              </h2>
              <p className="text-sm sm:text-base md:text-sm">Stock : {selectItem.unit}</p>
              <form onSubmit={addStockData} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span>Transportation Cost:</span>
                  <input name="transportationCost" type="text" placeholder="Type here" defaultValue={selectItem?.transportationCost} className="input input-bordered input-sm w-28" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Other Cost:</span>
                  <input
                    name="otherCost"
                    type="text"
                    defaultValue={selectItem?.otherCost}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Inventory Cost:</span>
                  <input
                    name="inventoryCost"
                    type="text"
                    defaultValue={selectItem?.inventoryCost}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Product Cost:</span>
                  <input
                    name="productCost"
                    type="text"
                    defaultValue={selectItem?.productCost}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Update Stock:</span>
                  <input
                    name="unit"
                    type="text"
                    defaultValue={selectItem?.unit}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>MRP:</span>
                  <input
                    name="mrpValue"
                    type="number"
                    defaultValue={selectItem?.mrp}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <input name="id" type="number" value="id" className="hidden" />
                <div className="flex mt-2">
                  <button
                    type="submit"
                    className="bg-green-500 text-white hover:text-black  w-5/6  btn btn-md uppercase rounded-full m-0 "
                  >
                    Update
                  </button>
                  <button type="button" onClick={deleteProduct} className="btn btn-outline btn-error w-1/6 rounded-full "><AiTwotoneDelete className="text-2xl text-warning-500" /></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ManComCard;
