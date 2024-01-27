
import { useState } from 'react';
import Title from './../../Title/Title';

const BranchName = () => {

  const [branchNameItem, setBranchNameItem] = useState([])

  const branchNameData = (event) => {
    event.preventDefault()
    const form = event.target;
    const institute = form.institute.value;
    const note = form.note.value;
    const location = form.location.value;
    const branchNameValue = { institute,note,location}
    setBranchNameItem(branchNameValue)
  }

  console.log(branchNameItem)

  


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
              <button type='submit' className="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BranchName;