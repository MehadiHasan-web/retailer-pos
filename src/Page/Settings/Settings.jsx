
import axios from "axios";
import { LuArrowLeft } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";

const Settings = () => {

  const passChgFun =  (event) => {
    event.preventDefault();
    const form = event.target;
    const password = form.password.value;
    axios.post('', {
      password: password
    })
    .then(function (response) {
      console.log(response);
      toast.success('success your response');
      form.reset()
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  return (
    <div>
      <div className='container mx-auto p-4 sm:p-5 md:p-8 lg:p-10 '>
        <div className='space-y-5'>
          <LuArrowLeft className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'></LuArrowLeft>
          <h4 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>Settings</h4>
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
            <div className="collapse collapse-arrow bg-white rounded-none">
              <input type="radio" name="my-accordion-2" defaultChecked /> 
              <div className="collapse-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
              Profile Info Change
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
              Password Change Option (1)
              </div>
              <div className="collapse-content"> 
                <form onSubmit={passChgFun} className='sm:flex items-center gap-2'>
                  <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full" />
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
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Settings;