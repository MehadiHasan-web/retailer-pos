
import { useState } from 'react';
import Title from './../../Title/Title';

const SubItemFrom = () => {

  const [subItemFormItem, setItemFormItem] = useState([])

  const subItemFormData = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const itemName = form.itemName.value;
    const image = form.image.value;
    const file = form.file.value;
    const stock = form.stock.value;
    const categoryFormValue = {name, itemName, image, file, stock}
    setItemFormItem(categoryFormValue)

    
  }

  console.log(subItemFormItem)

    return (
        <div className=" mt-10 ">
        {/* title section start */}
        <Title pageName={"SubItem Form"}></Title>
        {/* title section end */}
      <div className=" p-5 rounded-lg shadow-md space-y-5 border-2 lg:w-2/5 mx-auto">
        <h1 className="text-center text-xl font-bold mb-4">Sub-Item</h1>
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={subItemFormData} className="card-body">
            {/* Name field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                type="text"
                placeholder="enter your name"
                className="input input-bordered"
                name="name"
              />
            </div>
            {/* Item-name field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Item-name:</span>
              </label>
              <select type="text" name="itemName" className="select select-bordered w-full">
              <option value={"one"}>one</option>
              <option value={"two"}>two</option>
              <option value={"three"}>three</option>
            </select>
            </div>
           
            {/* image field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image:</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                accept="image/*"
                name="image"
              />
            </div>
            {/* File field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">File:</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                accept=".pdf,.doc,docx"
                name="file"
              />
            </div>
            {/* stock field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock:</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered"
                name="stock"
              />
            </div>
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SubItemFrom;