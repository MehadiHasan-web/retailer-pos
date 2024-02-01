
import { useContext, useState } from 'react';
import Title from './../../Title/Title';
import axios from 'axios';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from './../../Providers/AuthProvider';


const BranchName = () => {

  const [branchNameItem, setBranchNameItem] = useState([])
  const {baseURL} = useContext(AuthContext)
  
  

  useEffect(()=> {
    axios.get(`${baseURL}/institutelist/`)
    .then(response => {
      setBranchNameItem(response.data)
      // console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },[baseURL])

  const branchNameData = (event) => {
    event.preventDefault()
    const form = event.target;
    const Institute = form.institute.value;
    const name = form.name.value;
    const note = form.note.value;
    const location = form.location.value;
    const branchNameValue = { Institute,name,note,location}
    // setBranchNameItem(branchNameValue)
    axios.post(`${baseURL}/branchlist/`, branchNameValue)
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
    <div className="mt-10 ">
      {/* title section start */}
      <Title pageName={"Branch Name"}></Title>
      {/* title section end */}
      <div className=" p-5 rounded-lg shadow-md space-y-5 border-2  lg:w-2/5 text-center mx-auto">
        <h1 className="text-center text-xl font-bold mb-4">Branch Name</h1>
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={branchNameData} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Institute Name:</span>
              </label>
              <select className="select select-bordered w-full" name="institute">
                {
                  branchNameItem.map((data, index) => <option key={index} value={data.id}>{data.name}</option>)
                }
                
            </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input placeholder="enter your name" type="text"
                className="input input-bordered"
                name="name"></input>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Note:</span>
              </label>
              <textarea placeholder="enter your Note" className="textarea textarea-bordered textarea-md w-full" name="note" ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location:</span>
              </label>
              <input
                type="text"
                placeholder="enter your location"
                className="input input-bordered"
                name="location"
              />
            </div>
            <div className="form-control mt-6">
              <button  type='submit' className="btn btn-primary">Create</button>
            </div>
            <ToastContainer position="bottom-right"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BranchName;