import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function AddInventoryProduct() {
  const [category, setCategory] = useState([]);
  const token = localStorage.getItem("token");

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

  const handleAddInventoryProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const category = parseInt(form.category.value);
    const itemName = form.itemName.value;
    const otherCost = form.otherCost.value;
    const inventoryCost = form.inventoryCost.value;
    const transportationCost = form.transportationCost.value;
    const unit = form.unit.value;
    const data = {
      category,
      itemName,
      otherCost,
      inventoryCost,
      transportationCost,
      unit,
    };
    axios
      .post(`https://rpos.pythonanywhere.com/api/v1/inventory/`, data, {
        headers: { Authorization: "token " + token },
      })
      .then((response) => {
        console.log("Response:", response.data);
        toast.success("Successfully created");
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(`${error.message} .Try again`);
      });
  };
  return (
    <div>
      <div className="bg-[#d9efee] h-screen  flex justify-center items-center ">
        <form onSubmit={handleAddInventoryProduct} className="w-2/4">
          <div className="  border bg-white rounded-xl shadow-xl  w-full flex w-full justify-center flex-col items-center p-10 ">
            <h1 className=" text-2xl font-bold mb-4">Product Entry</h1>

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
            <div className="form-control w-full">
              <label htmlFor="invImage">Product Image</label>
              <input type="file" className="file-input file-input-bordered file-input-accent w-full " />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-3 w-full rounded hover:bg-green-600 mt-4"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddInventoryProduct;
