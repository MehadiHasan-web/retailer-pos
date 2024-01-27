
import { useState } from 'react';
import Title from './../../Title/Title';


const CategoryFrom = () => {


  const [categoryFormItem, setCategoryFormItem] = useState([])

  const categoryFormData = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const categoryFormValue = { name}
    setCategoryFormItem(categoryFormValue)

    
  }

  console.log(categoryFormItem)

  return (
    <div className="mt-10 ">
      {/* title section start */}
      <Title pageName={"Category Form"}></Title>
        {/* title section end */}
      <div className=" p-5 rounded-lg shadow-md space-y-5 border-2  lg:w-2/5 text-center mx-auto">
        <h1 className="text-center text-xl font-bold mb-4">Category</h1>
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={categoryFormData} className="card-body">
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
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryFrom;
