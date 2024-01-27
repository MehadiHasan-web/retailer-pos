
import Title from './../../Title/Title';

const DepartmentName = () => {
  return (
    <div className="mt-10 ">
      {/* title section start */}
      <Title pageName={"Department Name"}></Title>
      {/* title section end */}
      <div className=" p-5 rounded-lg shadow-md space-y-5 border-2  lg:w-2/5 text-center mx-auto">
        <h1 className="text-center text-xl font-bold mb-4">Department Name</h1>
        <div className="card shadow-2xl bg-base-100">
          <form className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Department Name:</span>
              </label>
              <select className="select select-bordered w-full">
                <option value="">Normal</option>
            </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Note:</span>
              </label>
              <textarea placeholder="enter your Note" className="textarea textarea-bordered textarea-md w-full" ></textarea>
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