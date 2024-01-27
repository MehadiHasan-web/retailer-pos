import { useState } from 'react';
import Title from './../../Title/Title';


const SubCategory = () => {

  const [subCategoryItem, setCategoryItem] = useState([])

  const subCategoryData = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const id = form.id.value;
    const categoryFormValue = {name, id}
    setCategoryItem(categoryFormValue)

    
  }

  console.log(subCategoryItem)

  return (
    <div className=" mt-10 ">
      {/* title section start */}
      <Title pageName={"SubCategory"}></Title>
        {/* title section end */}
      <div className=" p-5 rounded-lg shadow-md space-y-5 border-2 lg:w-2/5 mx-auto">
        <h1 className="text-center text-xl font-bold mb-4">Sub-category</h1>
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={subCategoryData} className="card-body">
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
            {/* Category-id field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category-id:</span>
              </label>
              <select type="number" name="id" className="select select-bordered w-full">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
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

export default SubCategory;
