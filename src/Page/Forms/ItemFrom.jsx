import { useState } from 'react';
import Title from './../../Title/Title';
import { useEffect } from 'react';
import axios from 'axios';


const ItemFrom = () => {

  const [itemFormItem, setItemFormItem] = useState([])
  const [subItemFormItem, setSubItemFormItem] = useState([])

  useEffect(()=> {
    axios.get('http://inv.xcode.com.bd/api/v1/inventory/catagorylist/')
    .then(response => {
      setItemFormItem(response.data)
      // console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },[])

  useEffect(()=> {
    axios.get('http://inv.xcode.com.bd/api/v1/inventory/subcatagorylist/')
    .then(response => {
      setSubItemFormItem(response.data)
      // console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },[])
  console.log(subItemFormItem)


  const subCategoryData = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const categoryId = form.categoryId.value;
    const subCategoryId = form.subCategoryId.value;
    const image = form.image.value;
    const file = form.file.value;
    const stock = form.stock.value;
    const itemFormValue = {name, categoryId, subCategoryId, image, file, stock}
    axios.post('http://inv.xcode.com.bd/api/v1/inventory/subcatagorylist/', itemFormValue)
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }



  return (
    <div className="mt-10 ">
      {/* title section start */}
      <Title pageName={"ItemForm"}></Title>
        {/* title section end */}
      <div className=" p-5 rounded-lg shadow-md space-y-5 border-2 lg:w-2/5 mx-auto">
        <h1 className="text-center text-xl font-bold mb-4">Item</h1>
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
              <select type="number" name="categoryId" className="select select-bordered w-full">
              {
                itemFormItem.map((data,index) => <option key={index} value={data.id}>{data.name}</option>)
              }
            </select>
            </div>
            {/* sub-category-id field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub-category-id:</span>
              </label>
              <select type="number" name="subCategoryId" className="select select-bordered w-full">
              {
                subItemFormItem.map((data,index) => <option key={index} value={data.id}>{data.name}</option>)
              }
            </select>
            </div>
            {/* image field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image:</span>
              </label>
              <input
                type="file"
                className="file-input w-full"
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

export default ItemFrom;
