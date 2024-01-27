import Title from './../../Title/Title';


const ItemFrom = () => {
  return (
    <div className="mt-10 ">
      {/* title section start */}
      <Title pageName={"ItemForm"}></Title>
        {/* title section end */}
      <div className=" p-5 rounded-lg shadow-md space-y-5 border-2 lg:w-2/5 mx-auto">
        <h1 className="text-center text-xl font-bold mb-4">Item</h1>
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
                placeholder="Type here"
                className="input input-bordered"
                required
              />
            </div>
            {/* sub-category-id field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub-category-id:</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered"
                required
              />
            </div>
            {/* image field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image:</span>
              </label>
              <input
                type="file"
                className="file-input w-full max-w-xs"
                accept="image/*"
              />
            </div>
            {/* File field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">File:</span>
              </label>
              <input
                type="file"
                className="file-input w-full max-w-xs"
                accept=".pdf,.doc,docx"
              />
            </div>
            {/* stock field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock:</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
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

export default ItemFrom;
