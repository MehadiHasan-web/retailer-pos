import Title from './../../Title/Title';


const SubCategory = () => {

  return (
    <div className=" mt-10 ">
      {/* title section start */}
      <Title pageName={"SubCategory"}></Title>
        {/* title section end */}
      <div className=" p-5 rounded-lg shadow-md space-y-5 border-2 lg:w-2/5 mx-auto">
        <h1 className="text-center text-xl font-bold mb-4">Sub-category</h1>
        <div className="card shadow-2xl bg-base-100">
          <form className="card-body">
            {/* Name field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Category-id field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category-id:</span>
              </label>
              <input
                type="text"
                placeholder="Category-id"
                className="input input-bordered"
                required
              />
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

export default SubCategory;
