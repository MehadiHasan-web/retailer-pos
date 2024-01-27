
import { useEffect, useState } from 'react';
import Title from './../../Title/Title';
import axios from 'axios';

const DepartmentName = () => {

  const [departmentNameItem, setDepartmentNameItem] = useState([])

  useEffect(()=> {
    axios.get('')
    .then(response => {
      setDepartmentNameItem(response.data)
      // console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },[])

  const departmentNameData = (event) => {
    event.preventDefault()
    const form = event.target;
    const branch = form.branchName.value;
    const department = form.department.value;
    const note = form.note.value;
    const departmentNameValue = { branch,department,note}
    // setDepartmentNameItem(departmentNameValue)
    axios.post('', departmentNameValue)
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
  }

  console.log(departmentNameItem)


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
                <span className="label-text">Branch Name:</span>
              </label>
              <select className="select select-bordered w-full" name="branchName">
                <option value={"normal"}>Normal</option>
                <option value={"normal1"}>Normal1</option>
                <option value={"normal2"}>Normal2</option>
            </select>
            </div>
          <div className="form-control">
              <label className="label">
                <span className="label-text">Department Name:</span>
              </label>
              <select className="select select-bordered w-full" name="department">
                <option value={"normal"}>Normal</option>
                <option value={"normal1"}>Normal1</option>
                <option value={"normal2"}>Normal2</option>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default DepartmentName;