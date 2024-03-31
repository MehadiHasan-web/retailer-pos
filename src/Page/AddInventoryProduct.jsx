import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


function AddInventoryProduct() {
    const [category, setCategory] = useState([]);
    const token = localStorage.getItem('token');

    // get category
    useEffect(() => {
        axios.get(`https://rpos.pythonanywhere.com/api/v1/categories/`, {
            headers: { 'Authorization': 'token ' + token }
        })
            .then(response => {
                setCategory(response.data)
                // console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error(`${error.message} .Try again`);
            });
    }, [])

    const handleAddInventoryProduct = (e) => {
        e.preventDefault()
        const form = e.target;
        const category = parseInt(form.category.value);
        const itemName = form.itemName.value;
        const otherCost = form.otherCost.value;
        const transportationCost = form.transportationCost.value;
        const unit = form.unit.value;
        const data = {
            category,
            itemName,
            otherCost,
            transportationCost,
            unit,
        }
        axios.post(`https://rpos.pythonanywhere.com/api/v1/inventory/`, data, {
            headers: { 'Authorization': 'token ' + token }
        })
            .then(response => {
                console.log('Response:', response.data);
                toast.success("Successfully created");
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error(`${error.message} .Try again`);
            });
    }
    return (
        <div>
            <div className="bg-[#d9efee] h-screen  flex justify-center items-center">
                <form onSubmit={handleAddInventoryProduct}>
                    <div className="  border bg-white rounded-xl shadow-xl w-96 flex justify-center flex-col items-center p-4 space-y-4">
                        <h1 className=" text-2xl font-bold mb-4">Product Entry</h1>
                        <p className="text-white text-lg mb-6">
                            Manage your freelance business with us!
                        </p>

                        <div className="form-control w-64">
                            <select name="category" className="select select-bordered select-sm  ">
                                <option disabled selected>Select Category</option>
                                {category.map((item) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <input
                            name="itemName"
                            type="text"
                            placeholder="Item Name"
                            className="input input-bordered input-sm w-64 mb-4"
                        />
                        <input
                            name="otherCost"
                            type="text"
                            placeholder="Other Cost"
                            className="input input-bordered input-sm w-64 mb-4"
                        />
                        <input
                            name="transportationCost"
                            type="text"
                            placeholder="Transportation  Cost"
                            className="input input-bordered input-sm w-64 mb-4"
                        />
                        <input
                            name="unit"
                            type="text"
                            placeholder="Unit"
                            className="input input-bordered input-sm w-64 mb-4"
                        />
                        {/* <input
                        name="invImage"
                        type="file"
                        className=" w-64 mb-2"
                    /> */}
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 w-64 rounded hover:bg-green-600 mt">
                            Create
                        </button>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddInventoryProduct
