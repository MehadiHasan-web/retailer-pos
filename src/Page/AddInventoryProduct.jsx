import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CiTrash } from "react-icons/ci";

function AddInventoryProduct() {
  const [category, setCategory] = useState([]);
  const token = localStorage.getItem("token");
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const [toggleBtn, setToggleBtn] = useState(false);
  const [sizeName, setSizeName] = useState('');
  const [sizeQuantity, setSizeQuantity] = useState('');
  const [totalSize, setTotalSize] = useState();

  // custom size and add quantity 
  function addNameQuantity() {
    const sizeObject = { ...totalSize, [sizeName]: parseInt(sizeQuantity) };
    setTotalSize(sizeObject)
  }
  //delete size
  function sizeDelete(key) {
    const newSizeObject = { ...totalSize };
    delete newSizeObject[key];
    setTotalSize(newSizeObject);

  }


  // get category
  useEffect(() => {
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
  }, []);

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

    const formData = new FormData();
    formData.append('category', category);
    formData.append('itemName', itemName);
    formData.append('otherCost', otherCost);
    formData.append('inventoryCost', inventoryCost);
    formData.append('transportationCost', transportationCost);
    formData.append('unit', unit);
    formData.append('image', selectedFile);

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
  };

  return (
    <div>
      <div className="bg-[#d9efee] h-screen  flex justify-center items-center ">
        <form onSubmit={handleAddInventoryProduct} className=" lg:w-2/4 sm:w-full" encType="">
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
                  type="text"
                  placeholder="Unit"
                  className="input input-bordered  w-full my-2 "
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="inventoryCost">Inventory Cost</label>

                <input
                  type="text"
                  name="inventoryCost"
                  id="inventoryCost"
                  placeholder="Cost"
                  className="input input-bordered  w-full my-2 "
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
              <div className="form-control w-full">
                <label htmlFor="transportationCost">Transportation Cost</label>
                <input
                  name="transportationCost"
                  id="transportationCost"
                  type="text"
                  placeholder="Transportation  Cost"
                  className="input input-bordered  w-full my-2 "
                />
              </div>
              <div className="form-control w-full">
                <label htmlFor="itemName">Other Cost</label>
                <input
                  name="otherCost"
                  id="otherCost"
                  type="text"
                  placeholder="Other Cost"
                  className="input input-bordered  w-full my-2 "
                />
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
            <div className="w-full  md:mt-8 md:mb-5 border-2 border-green-400 rounded-md p-2 ">
              <div className="flex justify-between items-center w-full my-2">
                <p>Product Size & Quantity</p>
                <input type="checkbox" className="toggle" onClick={() => setToggleBtn(!toggleBtn)} />
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
                    <div className="badge badge-outline me-2 px-[6px] rounded  font-bold mt-2 flex product-custom-size" key={key}>{`${key} : ${totalSize[key]}`} <button type="button" className="ms-2" onClick={() => sizeDelete(key)} ><CiTrash className="text-red-400 hover:text-red-800 text-2xl" /></button>  </div>
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
