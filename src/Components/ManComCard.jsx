import { useState } from "react";
import { FaTrash } from "react-icons/fa";
/* eslint-disable react/prop-types */
const ManComCard = ({ selectItem }) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  const [customBtn, setCustomBtn] = useState(false);
  const [sizeName, setSizeName] = useState("");
  const [sizeQuantity, setSizeQuantity] = useState("");
  const [totalSize, setTotalSize] = useState();

  const addStockData = (event) => {
    event.preventDefault();
    const form = event.target;
    const id = form.id.value;
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

    // axios.put(`https://rpos.pythonanywhere.com/api/v1/inventory/${id}/`, updateData, {
    //   headers: { 'Authorization': 'token ' + token }
    // })
    //   .then(response => {
    //     console.log('Response:', response.data);
    //     toast.success("Successfully Updated");
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     toast.error(`${error.message} .Try again`);
    //   });
  };
  // custom size and add quantity
  function addNameQuantity() {
    const sizeObject = {
      ...totalSize,
      [`"${sizeName}"`]: parseInt(sizeQuantity),
    };
    // const sizeArray = Object.entries(sizeObject);
    setTotalSize(sizeObject);
    console.log(typeof totalSize);
    console.log(sizeObject);
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
  return (
    <div>
      <div className="grid grid-cols-1 mt-5">
        <div className=" p-4">
          <div className=" flex flex-col justify-between rounded shadow-lg bg-slate-50 mb-6 ">
            {/* <img
              className="w-full h-[250px]  rounded"
              src={selectItem?.invImage}
            ></img> */}
            <img
              className="w-full h-[250px]  rounded"
              src={"https://rpos.pythonanywhere.com/" + selectItem?.invImage}
            ></img>
            <div className="p-2">
              <h2 className="text-sm sm:text-base md:text-sm lg:text-sm font-semibold mx-auto my-1 md:my-1 lg:my-2">
                {selectItem.itemName}
              </h2>
              <p className="text-sm sm:text-base md:text-sm">
                Stock : {selectItem.unit}
              </p>
              <form onSubmit={addStockData} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span>Transportation Cost:</span>
                  <input
                    name="transportationCost"
                    type="text"
                    placeholder="Type here"
                    defaultValue={selectItem?.transportationCost}
                    className="input input-bordered input-sm w-28"
                  />
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
                     {/* Product Size & Quantity */}
              {
                selectItem?.is_variant && selectItem.variants.length>0 ? <div className={`w-full md:mt-8 md:mb-5 border-[1px] ${toggleBtn === true ? 'border-green-400' : 'border-gray-200'}  rounded-md p-2`}>
                  <div className="flex justify-between items-center w-full my-2">
                    <p className={`${toggleBtn === true ? 'text-black-500' : 'text-slate-400'}`}>Product Size & Quantity</p>
                    <input type="checkbox" className="toggle" onClick={() => setToggleBtn(!toggleBtn)} />
                  </div>
                  <div className={`w-full md:mt-5 md:mb-5 border-[1px] ${customBtn === true ? 'border-green-400' : 'border-gray-200'} rounded-md p-2 ${toggleBtn === true ? 'block' : 'hidden'}`}>
    
                    <div className="flex justify-between items-center w-full my-2 ">
                      <p className={`text-sm ${customBtn === true ? 'text-black-500' : 'text-slate-400'}`}>Default Size</p>
                      <input type="checkbox" className="toggle toggle-sm" onClick={() => setCustomBtn(!customBtn)} />
                    </div>
                    <div className={`w-full ${customBtn === true ? 'block' : 'hidden'}`}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full">
                        {/* XS  */}
                        <div className="form-control w-full relative">
                          <input
                            type="number"
                            placeholder="XS"
                            className="input input-bordered input-sm w-full"
                            onChange={(e) => defaultSize(e.target.value, 'XS')}
                          />
                          <button type="button" className="btn btn-xs hover:bg-green-400 bg-green-400 absolute right-2 top-1 rounded-full text-white">Add</button>
                        </div>
                        {/*  */}
                        {/* S */}
                        <div className="form-control w-full relative">
                          <input
                            type="number"
                            placeholder="S"
                            className="input input-bordered input-sm w-full"
                            onChange={(e) => defaultSize(e.target.value, 'S')}
                          />
                          <button type="button" className="btn btn-xs hover:bg-green-400 bg-green-400 absolute right-2 top-1 rounded-full text-white">Add</button>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="form-control w-full relative">
                          <input
                            type="number"
                            placeholder="M"
                            className="input input-bordered input-sm w-full"
                            onChange={(e) => defaultSize(e.target.value, 'M')}
                          />
                          <button type="button" className="btn btn-xs hover:bg-green-400 bg-green-400 absolute right-2 top-1 rounded-full text-white">Add</button>
                        </div>
                        {/*  */}
                        {/*L  */}
                        <div className="form-control w-full relative">
                          <input
                            type="number"
                            placeholder="L"
                            className="input input-bordered input-sm w-full"
                            onChange={(e) => defaultSize(e.target.value, 'L')}
                          />
                          <button type="button" className="btn btn-xs hover:bg-green-400 bg-green-400 absolute right-2 top-1 rounded-full text-white">Add</button>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="form-control w-full relative">
                          <input
                            type="number"
                            placeholder="XL"
                            className="input input-bordered input-sm w-full"
                            onChange={(e) => defaultSize(e.target.value, 'XL')}
                          />
                          <button type="button" className="btn btn-xs hover:bg-green-400 bg-green-400 absolute right-2 top-1 rounded-full text-white">Add</button>
                        </div>
                        {/*  */}
                        {/*  */}
                        <div className="form-control w-full relative">
                          <input
                            type="number"
                            placeholder="XXL"
                            className="input input-bordered input-sm w-full"
                            onChange={(e) => defaultSize(e.target.value, 'XXL')}
                          />
                          <button type="button" className="btn btn-xs hover:bg-green-400 bg-green-400 absolute right-2 top-1 rounded-full text-white">Add</button>
                        </div>
                        {/*  */}
                      </div>
                    </div>
                  </div>
                  <div className={`grid grid-cols-1 md:grid-cols-3 gap-2 w-full ${toggleBtn === true ? 'block' : 'hidden'}`}>
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
                        onChange={(event) => setSizeQuantity(event.target.value)}
                        type="number"
                        placeholder="Quantity"
                        className="input input-bordered  w-full my-2 "
                      />
                    </div>
                    <div className="form-control w-full md:mt-4">
                      <button type="button" className="bg-green-500 text-white px-4 py-3 w-full rounded hover:bg-green-600 mt-4" onClick={addNameQuantity}>Add</button>
                    </div>
                  </div>
                  <div className="flex">
                    {totalSize ? (
                      Object.keys(totalSize).map((key) => (
                        <div className="badge badge-outline me-2 px-[6px] rounded  font-bold mt-2 flex product-custom-size" key={key}>{`${key} : ${totalSize[key]}`} <button type="button" className="ms-2" onClick={() => sizeDelete(key)} ><FaTrash className="text-red-400 hover:text-red-800 text-xl" /></button>  </div>
                      ))) : (
                      <p className={`${toggleBtn === true ? 'block' : 'hidden'}`} >No size available.</p>
                    )}
                  </div>
    
                </div> : ""
              }
                <button
                  type="submit"
                  className="bg-green-500 text-white  w-full my-2 btn btn-md uppercase rounded-full "
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManComCard;
