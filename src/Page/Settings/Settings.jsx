
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { LuArrowLeft } from "react-icons/lu";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { VscCloseAll } from "react-icons/vsc";
import { TfiSave } from "react-icons/tfi";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Providers/AuthProvider";


const Settings = () => {

  const token = localStorage.getItem("token");
  const [size, setSize] = useState([])
  const {baseURL} = useContext(AuthContext)


  const passChgFun = (event) => {
    event.preventDefault();
    const form = event.target;
    const password = { password: form.password.value }
    axios.put(`${baseURL}/change-password/`, password,
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


  // custom size
  function addCustomSize(e) {
    e.preventDefault()
    var form = e.target;
    console.log(form.name.value)

    setSize(prevSizes => {
      const isTitleDifferent = prevSizes.every(size => size.title !== form.name.value);

      if (isTitleDifferent) {
        const newObject = {
          title: form.name.value,
          sizes: []
        };

        return [...prevSizes, newObject];
      } else {
        toast.info(form.name.value + ' already exists');
        return prevSizes;
      }
    });
  }

  // add sizes
  function addSize(index, e) {
    e.preventDefault()
    let form = e.target;
    setSize(prevItems => {
      return prevItems.map((item, i) => {
        if (i === index) {
          console.log(item)
          return {
            ...item,
            sizes: [...item.sizes, { size: form.name.value }]
          };
        }
        return item;
      });
    });
  }

  // delete size 
  const deleteSize = (itemIndex, sizeIndex) => {
    setSize(prevItems => {
      return prevItems.map((item, i) => {
        if (i === itemIndex) {
          // Filter out the size to delete from the sizes array
          const updatedSizes = item.sizes.filter((size, index) => index !== sizeIndex);
          return {
            ...item,
            sizes: updatedSizes // Update the sizes array with the filtered sizes
          };
        }
        return item; // Return unchanged items
      });
    });
  };

  // remove items object
  const removeItem = (indexToRemove) => {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setSize(prevItems => {
          return prevItems.filter((item, index) => index !== indexToRemove);
        });

        // axios.delete(`https://rpos.pythonanywhere.com/api/v1/inventory/${item?.id}/`, {
        //   headers: { 'Authorization': 'token ' + token }
        // }).then(response => {
        //   console.log('Response:', response.data);
        //   swalWithBootstrapButtons.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        //     toast.error();
        //     Swal.fire({
        //       title: 'Sorry..!',
        //       text: `${error.message}. Please try again`,
        //       icon: 'error',
        //       confirmButtonText: 'Ok'
        //     })
        // });

      }
    });


  };

  // save sizes
  function saveItems(index) {
    const item = size[index];
    // console.log(item);
    const transformedData = {
      title: item.title,
      sizes: item.sizes.map(sizeObj => sizeObj.size)
        .reduce((acc, curr) => {
          if (!acc.includes(curr)) {
            acc.push(curr);
          }
          return acc;
        }, [])
    };
    console.log(transformedData)

    if (transformedData) {
      // send backend
      axios.post(`${baseURL}/variant-settings/`, transformedData, {
        headers: { 'Authorization': 'token ' + token }
      })
        .then(response => {
          console.log('Response:', response.data);
          toast.success("Successfully Saved");
        })
        .catch(error => {
          console.error('Error:', error);
          toast.error(`${error.message} .Try again`);
        });
      // end send backend
    }

  }

  // get size data from backend 
  function getSizeData() {
    axios.get(`${baseURL}/variant-settings/`, {
      headers: { 'Authorization': 'token' + token }
    })
      .then(response => {
        console.log('Response:', response.data);
        setSize(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error(`${error.message} .Try again`);
      });
  }

  useEffect(() => {
    getSizeData();
  }, [])


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

            {/* <div className="collapse collapse-arrow bg-white rounded-t-none">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                Tax Set
              </div>
              <div className="collapse-content">
                <form className='sm:flex items-center gap-2'>
                  <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                  <input type="submit" value="Save" className="btn btn-neutral mt-1 sm:mt-0 w-full sm:w-auto" />
                </form>
              </div>
            </div> */}

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
        {/* add costume size  */}
        <div className=" h-full bg-white p-2 mt-5 w-4/6">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold my-2">Add Default Size</h1>
          <div className="border border-green-400 rounded-md p-2">
            <form className="flex justify-between" onSubmit={addCustomSize}>
              <input name="name" type="text" placeholder="Type custom" className="input input-bordered input-accent w-full max-w-xs input-sm rounded-full" />
              <button type="submit" className="btn btn-neutral rounded-full btn-sm">Add</button>
            </form>
          </div>
          {/* show size list  */}
          {size.map((item, index) => (
            <div key={index} className="mt-4 border  border-purple-400 rounded-md p-2">
              <div className="flex justify-between">
                <h4 className="font-bold text-purple-700	">{item?.title}</h4>
                <form className="flex justify-between gap-2" onSubmit={(e) => addSize(index, e)}>
                  <input name="name" type="text" placeholder="Type custom" className="input input-bordered border-purple-700 w-full max-w-xs input-sm rounded-full" />
                  <button type="submit" className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-bold text-purple-700 ring-1 ring-inset ring-purple-700/10">Add</button>
                </form>
              </div>
              <div className="flex justify-between">
                <div>
                  {item.sizes.map((size, sizeIndex) => (
                    <div key={sizeIndex} className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10 my-2 mx-2  product-custom-size">{size.size} <button type="button" className="ms-2" onClick={() => deleteSize(index, sizeIndex)} ><FaTrash className="text-red-400 hover:text-red-800 text-xl" /></button>  </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => saveItems(index)} type="button" className="inline-flex items-center rounded-full bg-blue-50 px-2 py-2 mt-2 text-xs font-bold text-blue-700 ring-1 ring-inset ring-blue-700/10 hover:font-2xl"><TfiSave className="text-lg" /></button>
                  <button onClick={() => removeItem(index)} type="button" className="inline-flex items-center rounded-full bg-red-50 px-2 py-2 mt-2 text-xs font-bold text-red-700 ring-1 ring-inset ring-red-700/10 hover:font-2xl"><VscCloseAll className="text-xl" /></button>
                </div>
              </div>
            </div>
          ))

          }

        </div>


      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Settings;