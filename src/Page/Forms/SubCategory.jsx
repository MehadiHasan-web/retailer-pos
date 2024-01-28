import { useEffect, useState } from 'react';
import Title from './../../Title/Title';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const SubCategory = () => {

  const [categroy , setCategory] = useState([])


  useEffect(()=> {
    axios.get('http://inv.xcode.com.bd/api/v1/inventory/catagorylist')
    .then(response => {
      setCategory(response.data)
      // console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },[])




// get data form 
  const subCategoryData = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const subcat = form.id.value;
    const subCategoryFormValue = {name, subcat}
    // setCategoryItem(categoryFormValue)    
    // sendSubcategory(subCategoryItem);
    axios.post('http://inv.xcode.com.bd/api/v1/inventory/subcatagorylist/', subCategoryFormValue)
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
    <div className=" mt-10 ">
      {/* title section start */}
      <Title pageName={"SubCategory"}></Title>
        {/* title section end */}
      <div className=" p-5 rounded-lg shadow-md space-y-5 border-2 lg:w-2/5 mx-auto">
        <h1 className="text-center text-xl font-bold mb-4">Sub-category</h1>
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={subCategoryData} className="card-body">
            {/* Category-id field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select type="number" name="id" className="select select-bordered w-full">
             {
              categroy.map((item, index)=> <option key={index} value={item.id} > {item.name}</option>)
             }
            </select>
            </div>
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
       
            <div className="form-control mt-6">
              <button type='submit' className="btn btn-primary">Create</button>
            </div>
            <ToastContainer position="bottom-right"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
