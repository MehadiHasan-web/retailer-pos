
import axios from "axios";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Settings = () => {

  const token = localStorage.getItem("token");

  const [toggleBtn, setToggleBtn] = useState(false);
  const [customBtn, setCustomBtn] = useState(false);
  const [sizeName, setSizeName] = useState('');
  const [sizeQuantity, setSizeQuantity] = useState('');
  const [totalSize, setTotalSize] = useState();

  const passChgFun = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = { password: form.password.value }
    axios.put(`https://rpos.pythonanywhere.com/api/v1/change-password/`, password,
      {
        headers: { 'Authorization': 'token ' + token }
      })
      .then(function (response) {
        console.log(response);
        toast.success('password update');
        form.reset()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

   // custom size and add quantity 
   function addNameQuantity() {
    const sizeObject = { ...totalSize, [`"${sizeName}"`]: parseInt(sizeQuantity) };
    // const sizeArray = Object.entries(sizeObject);
    setTotalSize(sizeObject)
    // console.log(typeof (totalSize))
    // console.log(sizeObject)
  }

  //add default size quantity
  function defaultSize(value, name) {
    const sizeObject = { ...totalSize, [`"${name}"`]: parseInt(value) };
    setTotalSize(sizeObject)
  }

   //delete size
  function sizeDelete(key) {
    const newSizeObject = { ...totalSize };
    delete newSizeObject[key];
    setTotalSize(newSizeObject);

  }

  const sizeBtn = (event) => {
    event.preventDefault();
    const formData = new FormData();
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
  }


  return (
    <div>
      <div className='container mx-auto p-4 sm:p-5 md:p-8 lg:p-10 '>
        <div className='space-y-5'>
          <Link to="/user-create">
            <LuArrowLeft className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'></LuArrowLeft>
          </Link>
          <h4 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>Settings</h4>
          <Link className="btn btn-outline btn-sm rounded-full mx-1  hover:text-white " to={'/user-create'}>Create User</Link>
          <div className='shadow-xl space-y-1'>
            <div className="collapse collapse-arrow bg-white rounded-b-none">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                Discount Set
              </div>
              <div className="collapse-content">
                <form className='sm:flex items-center gap-2'>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                  <input type="submit" value="Save" className="btn btn-neutral mt-1 sm:mt-0 w-full sm:w-auto" />
                </form>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white rounded-t-none">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                Tex Set
              </div>
              <div className="collapse-content">
                <form className='sm:flex items-center gap-2'>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                  <input type="submit" value="Save" className="btn btn-neutral mt-1 sm:mt-0 w-full sm:w-auto" />
                </form>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white rounded-none">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                Change Password
              </div>
              <div className="collapse-content">
                <form onSubmit={passChgFun} className='sm:flex items-center gap-2'>
                  <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full" />
                  <input type="submit" value="Save" className="btn btn-neutral mt-1 sm:mt-0 w-full sm:w-auto" />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* size form section start */}
        <div className="w-full h-full bg-white p-2 mt-5">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold my-2">Add Default Size</h1>
          <form onSubmit={sizeBtn}>
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
                    <button type="submit" className="bg-green-500 text-white px-4 py-3 w-full rounded hover:bg-green-600 mt-4" onClick={addNameQuantity}>Add</button>
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
          </form>
        </div>
        {/* size form section end */}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Settings;