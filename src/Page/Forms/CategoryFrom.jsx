

import { ToastContainer, toast } from 'react-toastify';
import Title from './../../Title/Title';
import axios from 'axios';


const CategoryFrom = () => {


  

  const categoryFormData = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const categoryFormValue = { name}
    // setCategoryFormItem(categoryFormValue)
    axios.post('http://inv.xcode.com.bd/api/v1/inventory/catagorylist/', categoryFormValue)
    .then(response => {
      console.log('Response:', response.data);
      toast("Successfully created");
    })
    .catch(error => {
      console.error('Error:', error);
      toast(`${error.message} .Try again`);
    });
    
  }


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
            <ToastContainer position="bottom-right"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryFrom;
