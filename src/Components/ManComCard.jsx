import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState,useEffect, useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";

/* eslint-disable react/prop-types */
const ManComCard = ({ item }) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [customBtn, setCustomBtn] = useState(false);
  const [sizeName, setSizeName] = useState("");
  const [sizeQuantity, setSizeQuantity] = useState("");
  const [totalSize, setTotalSize] = useState();
  const token = localStorage.getItem("token");
  const [size, setSize] = useState([])
  const {baseURL} = useContext(AuthContext)

  const addStockData = (event) => {
    event.preventDefault();
    const form = event.target;
    const id = item?.id;
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
    axios
      .put(
        `${baseURL}/${id}/`,
        updateData,
        {
          headers: { Authorization: "token " + token },
        }
      )
      .then((response) => {
        console.log("Response:", response.data);
        toast.success("Successfully Updated");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(`${error.message} .Try again`);
      });
  };
  // custom size and add quantity
  function addNameQuantity(size,Quantity) {
    const sizeObject = {
      ...totalSize,
      [`"${sizeName || size}"`]: parseInt(sizeQuantity || Quantity),
    };
    // const sizeArray = Object.entries(sizeObject);
    setTotalSize(sizeObject);
  }

  //delete products
  function deleteProduct() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              `${baseURL}/inventory/${item?.id}/`,
              {
                headers: { Authorization: "token " + token },
              }
            )
            .then((response) => {
              console.log("Response:", response.data);
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            })
            .catch((error) => {
              console.error("Error:", error);
              toast.error();
              Swal.fire({
                title: "Sorry..!",
                text: `${error.message}. Please try again`,
                icon: "error",
                confirmButtonText: "Ok",
              });
            });
        }
      });
  }

  //delete size
  function sizeDelete(key) {
    const newSizeObject = { ...totalSize };
    delete newSizeObject[key];
    setTotalSize(newSizeObject);
  }
  //add default size quantity
  function defaultSize(value, name) {
    const sizeObject = { ...totalSize, [`"${name}"`]: parseInt(value) };
    setTotalSize(sizeObject);
  }
  // variants array to object 
//   const resultObject = item?.variants?.reduce((acc, obj) => {
//     acc[Object.values(obj)[1]] = Object.values(obj)[2];
//     return acc;
// }, {});
// const arrayOfObjects = Object?.keys(resultObject||{})?.map(key => ({ [key]: resultObject[key] }));
// console.log(arrayOfObjects)

useEffect(()=> {const mappedArray = item?.variants?.map(obj => ({ [Object.values(obj)[1]]: Object.values(obj)[2] }));
const result = mappedArray?.map(obj=> (addNameQuantity(Object.keys(obj),Object.values(obj) )))},[item?.variants])



function getSizeData() {
  axios.get(`https://rpos.pythonanywhere.com/api/v1/variant-settings/`, {
    headers: { 'Authorization': 'token' + token }
  })
    .then(response => {
      console.log('Response:', response.data);
      setSize(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
      toast.error(`${error.message} .Try again`);
    });
}

useEffect(() => {
  getSizeData();
}, [])
const filterSize = size.filter(item => item.sizes.length > 0 )


return (
    <div>
      <div className="grid grid-cols-1 mt-5">
        <div className=" p-4">
          <div className=" flex flex-col justify-between rounded shadow-lg bg-slate-50 mb-6 ">
            {
              item?.is_variant && item.variants.length > 0 ? <div className="flex gap-5 ">
              <img
                className="w-3/6 h-[250px]  rounded p-2"
                src={"https://rpos.pythonanywhere.com/" + item?.invImage}
              ></img>
              <div>
              <p className="text-center mb-5 font-bold">Size</p>
               <div className="flex gap-2 flex-wrap">
                {
                item?.variants?.map((sizeItem)=> <div key={sizeItem.id} className=" p-2 border-2 border-green-500 rounded-md">
                <span>{`"${sizeItem.size}"`} :</span>
                 <span> {`${sizeItem.unit}`}</span>
                </div>)
               }
               </div>
               <div >
                
                 
               </div>
              </div>
            </div> :<img
              className="w-4/6 h-[250px]  rounded mx-auto "
              src={"https://rpos.pythonanywhere.com/" + item?.invImage}
            ></img>
            }
            
            
            <div className="p-2">
              <h2 className="text-sm sm:text-base md:text-sm lg:text-sm font-semibold mx-auto my-1 md:my-1 lg:my-2">
                {item?.itemName}
              </h2>
              <p className="text-sm sm:text-base md:text-sm">
                Stock : {item?.unit}
              </p>
              <form onSubmit={addStockData} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span>Transportation Cost:</span>
                  <input
                    name="transportationCost"
                    type="text"
                    placeholder="Type here"
                    defaultValue={item?.transportationCost}
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Other Cost:</span>
                  <input
                    name="otherCost"
                    type="text"
                    defaultValue={item?.otherCost}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Inventory Cost:</span>
                  <input
                    name="inventoryCost"
                    type="text"
                    defaultValue={item?.inventoryCost}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Product Cost:</span>
                  <input
                    name="productCost"
                    type="text"
                    defaultValue={item?.productCost}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>Update Stock:</span>
                  <input
                    name="unit"
                    type="text"
                    defaultValue={item?.unit}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span>MRP:</span>
                  <input
                    name="mrpValue"
                    type="number"
                    defaultValue={item?.mrp}
                    placeholder="Type here"
                    className="input input-bordered input-sm w-28"
                  />
                </div>
                <input name="id" type="number" value="id" className="hidden" />

                {/* Product Size & Quantity */}
                {item?.is_variant && item.variants.length > 0 ? (
                  <div
                    className={`w-full md:mt-8 md:mb-5 border-[1px] ${
                      toggleBtn === true
                        ? "border-green-400"
                        : "border-gray-200"
                    }  rounded-md p-2`}
                  >
                    <div className="flex justify-between items-center w-full my-2">
                      <p
                        className={`${
                          toggleBtn === true
                            ? "text-black-500"
                            : "text-slate-400"
                        }`}
                      >
                        Product Size & Quantity
                      </p>
                      <input
                        type="checkbox"
                        className="toggle"
                        onClick={() => setToggleBtn(!toggleBtn)}
                      />
                    </div>
                    {
                filterSize.map(item => <div key={item.id}
                  className={`w-full md:mt-5 md:mb-5 border-[1px] ${
                    customBtn === true ? "border-green-400" : "border-gray-200"
                  } rounded-md p-2 ${toggleBtn === true ? "block" : "hidden"}`}
                >
                  <div className="flex justify-between items-center w-full my-2 ">
                    <p
                      className={`text-sm ${
                        customBtn[0] === item.id && customBtn[1] === true ? "text-black-500" : "text-slate-400"
                      }`}
                    >
                      {item.title}
                    </p>
                    <input
                      type="checkbox"
                      className="toggle toggle-sm"
                      onClick={() => setCustomBtn([item.id,!customBtn[1]])}
                    />
                  </div>
                  <div
                    className={`w-full ${
                      customBtn[0] === item.id && customBtn[1] === true ? "block" : "hidden"
                    }`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
                     
                      {
                        item?.sizes.map(sizeItem => <div key={sizeItem.id} className="form-control w-full relative">
                        <input
                          type="number"
                          placeholder={sizeItem.size}
                          className="input input-bordered input-sm w-full"
                          onChange={(e) => defaultSize(e.target.value, `${sizeItem.size}`)}
                        />
                        <button
                          type="button"
                          className="btn btn-xs hover:bg-green-400 bg-green-400 absolute right-2 top-1 rounded-full text-white"
                        >
                          Add
                        </button>
                      </div>)
                      }
                     
                    </div>
                  </div>
                </div>)
              }

                    <div
                      className={`grid grid-cols-1 md:grid-cols-3 gap-2 w-full ${
                        toggleBtn === true ? "block" : "hidden"
                      }`}
                    >
                      <div className="form-control w-full">
                        <label htmlFor="sizeName">Size Name</label>
                        <input
                          onChange={(event) => setSizeName(event.target.value)}
                          type="text"
                          placeholder="Size name"
                          className="input input-bordered  w-full my-2 "
                        />
                      </div>
                      {/* Quantity */}
                      <div className="form-control w-full">
                        <label htmlFor="size">Quantity</label>
                        <input
                          onChange={(event) =>
                            setSizeQuantity(event.target.value)
                          }
                          type="number"
                          placeholder="Quantity"
                          className="input input-bordered  w-full my-2 "
                        />
                      </div>
                      <div className="form-control w-full md:mt-4">
                        <button
                          type="button"
                          className="bg-green-500 text-white px-4 py-3 w-full rounded hover:bg-green-600 mt-4"
                          onClick={addNameQuantity}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                    <div className="flex">
                      {totalSize ? (
                        Object.keys(totalSize).map((key) => (
                          <div
                            className="badge badge-outline me-2 px-[6px] rounded  font-bold mt-2 flex product-custom-size"
                            key={key}
                          >
                            {`${key} : ${totalSize[key]}`}{" "}
                            <button
                              type="button"
                              className="ms-2"
                              onClick={() => sizeDelete(key)}
                            >
                              <FaTrash className="text-red-400 hover:text-red-800 text-xl" />
                            </button>{" "}
                          </div>
                        ))
                      ) : (
                        <p
                          className={`${
                            toggleBtn === true ? "block" : "hidden"
                          }`}
                        >
                          No size available.
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {/* submit button  */}
                <div className="flex mt-4 gap-12 md:gap-6">
                  <button
                    type="submit"
                    className="bg-green-500 text-white hover:text-black  w-4/6  btn btn-md uppercase rounded-full m-0 "
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    onClick={deleteProduct}
                    className="btn btn-outline btn-error w-1/6 rounded-full "
                  >
                    <AiTwotoneDelete className="text-2xl text-warning-500" />
                  </button>
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
