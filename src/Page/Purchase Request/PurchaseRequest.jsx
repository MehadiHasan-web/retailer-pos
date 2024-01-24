import Title from '../../Title/Title'
import './PurchaseRequest.css'

const PurchaseRequest = () => {
  return (
    <>
    
    {/* title section start */}
    <Title pageName={"Purchase Request"}></Title>
    {/* title section end */}
    <div className='container mx-auto flex justify-center items-center mt-6'>
      <div className="card shrink-0 w-2/3 shadow-2xl bg-base-100">
      <form className="card-body">
        <div className='md:flex gap-2'>
          <div className="form-control flex-1">
            <input type="text" placeholder="item" className="input input-bordered input-md" />
          </div>
          <div className="form-control flex-1">
            <input type="number" placeholder="quantity" className="input input-bordered input-md" />
          </div>
        </div>
        <div className='form-control'>
          <textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-full " ></textarea>
        </div>
        <div className='form-control'>
          <input type="file" className="file-input file-input-bordered file-input-md w-full" />
        </div>
        
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">submit</button>
        </div>
      </form>
    </div>
      
    </div>
    </>
  );
};

export default PurchaseRequest;