import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaTrash } from "react-icons/fa";

function AddInventoryProduct() {
  const [category, setCategory] = useState([]);
  const token = localStorage.getItem("token");
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const [toggleBtn, setToggleBtn] = useState(false);
  const [customBtn, setCustomBtn] = useState(false);
  const [sizeName, setSizeName] = useState('');
  const [sizeQuantity, setSizeQuantity] = useState('');
  const [totalSize, setTotalSize] = useState();
  const [productCost, setProductCost] = useState({
    unit: 0, inventoryCost: 0, transportation: 0, otherCost: 0,
  });
  const [singleProductCost, setSingleProductCost] = useState(0)

  // custom size and add quantity 
  function addNameQuantity() {
    const sizeObject = { ...totalSize, [`"${sizeName}"`]: parseInt(sizeQuantity) };
    // const sizeArray = Object.entries(sizeObject);
    setTotalSize(sizeObject)
    console.log(typeof (totalSize))
    console.log(sizeObject)
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
    setTotalSize(sizeObject)
  }


  // get category
  function getCategory() {
    axios
      .get(`https://rpos.pythonanywhere.com/api/v1/categories/`, {
        headers: { Authorization: "token " + token },
      })
      .then((response) => {
        setCategory(response.data);
        // console.log('Response:', response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(`${error.message} .Try again`);
      });
  }



  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // products add 
  const handleAddInventoryProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = parseInt(form.category.value);
    const itemName = form.itemName.value;
    const otherCost = parseFloat(form.otherCost.value);
    const inventoryCost = parseFloat(form.inventoryCost.value);
    const transportationCost = parseFloat(form.transportationCost.value);
    const unit = parseInt(form.unit.value);
    const mrp = parseInt(form.mrp.value);
    const color = form.color.value;

    const formData = new FormData();
    formData.append('category', category);
    formData.append('itemName', itemName);
    formData.append('otherCost', otherCost);
    formData.append('inventoryCost', inventoryCost);
    formData.append('transportationCost', transportationCost);
    formData.append('unit', unit);
    formData.append('mrp', mrp);
    formData.append('image', selectedFile);
    formData.append('color', color);
    const camelCaseValue = toggleBtn ? "True" : "False";
    formData.append('is_variant', camelCaseValue)

    const cleanedTotalSize = {};
    Object.keys(totalSize).forEach(key => {
      const cleanedKey = key.replace(/"/g, '');
      cleanedTotalSize[cleanedKey] = totalSize[key];
    });

    if (toggleBtn) {
      const totalSizeString = JSON.stringify(cleanedTotalSize);
      formData.append('unit_per_size', totalSizeString);
    } else {
      console.log('is_variant :' + toggleBtn)
    }

    console.log(totalSize)

    axios
      .post(`https://rpos.pythonanywhere.com/api/v1/inventory/`, formData, {
        headers: { Authorization: "token " + token },
        'Content-Type': 'multipart/form-data',
      })
      .then((response) => {
        console.log("Response:", response.data);
        toast.success("Successfully Product add");
        form.reset()
        navigate("/management");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(`${error.message} .Try again`);
      });

    // for (const pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }

  };

  // calculate product cost 
  function calculateProductCost(value, fildName) {
    setProductCost(prevProductCost => ({ ...prevProductCost, [fildName]: parseInt(value) || 0 }))
  }
  console.log(productCost)

  useEffect(() => {
    getCategory();

    // show total cost 
    let totalCost = parseInt(productCost.inventoryCost) + parseInt(productCost.transportation) + parseInt(productCost.otherCost);
    let cost = totalCost / parseInt(productCost.unit);
    console.log(cost);
    setSingleProductCost(cost)

  }, [productCost, setSingleProductCost]);
  console.log(totalSize)

  return (
    <div >
      <div className="bg-[#d9efee] h-screen  flex justify-center items-center ">
        <form onSubmit={handleAddInventoryProduct} className="md:w-5/6 lg:w-2/4 sm:w-full" encType="">
          <div className="  border bg-white rounded-xl shadow-xl  w-full flex  justify-center flex-col items-center p-10  ">
            <h1 className=" text-2xl font-bold mb-4">Product Entry</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
              <div className="form-control w-full">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  className="select select-bordered my-2 "
                  id="category"
                >
                  <option disabled selected>
                    Select Category
                  </option>
                  {category.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control w-full">
                <label htmlFor="itemName">Item Name</label>
                <input
                  name="itemName"
                  id="itemName"
                  type="text"
                  placeholder="Item Name"
                  className="input input-bordered  w-full my-2 "
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
              <div className="form-control w-full">
                <label htmlFor="unit">Unit</label>
                <input
                  name="unit"
                  id="unit"
                  type="number"
                  placeholder="Unit"
                  className="input input-bordered  w-full my-2 "
                  onChange={(e) => { calculateProductCost(e.target.value, 'unit') }}
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="inventoryCost">Inventory Cost</label>

                <input
                  type="number"
                  name="inventoryCost"
                  id="inventoryCost"
                  placeholder="Cost"
                  className="input input-bordered  w-full my-2 "
                  onChange={(e) => { calculateProductCost(e.target.value, 'inventoryCost') }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
              <div className="form-control w-full">
                <label htmlFor="transportationCost">Transportation Cost</label>
                <input
                  name="transportationCost"
                  id="transportationCost"
                  type="number"
                  placeholder="Transportation  Cost"
                  className="input input-bordered  w-full my-2 "
                  onChange={(e) => { calculateProductCost(e.target.value, 'transportation') }}
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="itemName">Other Cost</label>
                <input
                  name="otherCost"
                  id="otherCost"
                  type="number"
                  placeholder="Other Cost"
                  className="input input-bordered  w-full my-2 "
                  onChange={(e) => { calculateProductCost(e.target.value, 'otherCost') }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
              <div className="form-control w-full">
                <label htmlFor="productCost">Product Cost</label>
                {/* <input name="productCost" id="productCost" type="text" placeholder="Product Cost" className="input input-bordered  w-full my-2 " /> */}
                <div className="input input-bordered  w-full my-2 flex items-center bg-sky-50" >{singleProductCost.toFixed(2)} TK</div>
              </div>
              <div className="form-control w-full">
                <label htmlFor="itemName">Mrp</label>
                <input name="mrp" id="mrp" type="number" placeholder="Mrp" className="input input-bordered  w-full my-2 " />

              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
              <div className="form-control w-full">
                <label htmlFor="invImage">Product Image</label>
                <input type="file" onChange={handleFileChange} className="file-input file-input-bordered file-input-accent w-full " />
              </div>
              <div className="form-control w-full">
                <label htmlFor="color">Color</label>
                <input
                  name="color"
                  id="color"
                  type="text"
                  placeholder="Color"
                  className="input input-bordered  w-full "
                />
              </div>
            </div>

            {/* Product Size & Quantity */}
            <div className={`w-full md:mt-8 md:mb-5 border-[1px] ${toggleBtn === true ? 'border-green-400' : 'border-gray-200'}  rounded-md p-2`}>
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

            </div>

            <button type="submit" className="bg-green-500 text-white px-4 py-3 w-full rounded hover:bg-green-600 mt-4">Create</button>
          </div>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default AddInventoryProduct;
