
import { useEffect, useState } from 'react';
import Title from './../../Title/Title';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const DepartmentName = () => {

  const [BranchName, setBranchName] = useState([])
  const [branchNameItem, setBranchNameItem] = useState([])

  useEffect(()=> {
    axios.get('http://inv.xcode.com.bd/api/v1/inventory/branchlist/')
    .then(response => {
      setBranchNameItem(response.data)
      // console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },[])
  
  useEffect(()=> {
    axios.get('http://inv.xcode.com.bd/api/v1/inventory/institutelist/')
    .then(response => {
      setBranchName(response.data)
      // console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },[])


  const departmentNameData = (event) => {
    event.preventDefault()
    const form = event.target;
    const branch_id = form.branchName.value;
    const name = form.name.value;
    const note = form.note.value;
    const departmentNameValue = { branch,department,note}
    // setBranchName(departmentNameValue)
    axios.post('http://inv.xcode.com.bd/api/v1/inventory/departmentlist/', departmentNameValue)
    .then(response => {
      console.log('Response:', response.data);
      toast.success("Successfully created");
    })
    .catch(error => {
      console.error('Error:', error);
      toast.error(`${error.message} .Try again`);
    });
    
  }

  console.log(BranchName)


  return (
    <div className="mt-10 ">
      {/* title section start */}
      <Title pageName={"Department Name"}></Title>
      {/* title section end */}
      <div className=" p-5 rounded-lg shadow-md space-y-5 border-2  lg:w-2/5 text-center mx-auto">
        <h1 className="text-center text-xl font-bold mb-4">Department Name</h1>
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={departmentNameData} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Institute Name:</span>
              </label>
              <select className="select select-bordered w-full" name="branchName">
                {
                  BranchName.map((data, index) => <option key={index} value={data.id}>{data.name}</option>)
                }
            </select>
            </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Branch Name:</span>
              </label>
              <select className="select select-bordered w-full" name="department">
                {
                  branchNameItem.map((data, index) => <option key={index} value={data.id}>{data.name}</option>)
                }
            </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Note:</span>
              </label>
              <textarea placeholder="enter your Note" className="textarea textarea-bordered textarea-md w-full" name="note" ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Create</button>
            </div>
            <ToastContainer position="bottom-right"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DepartmentName;