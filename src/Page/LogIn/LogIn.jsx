import './LogIn.css'

const LogIn = () => {

  const submitData = (event)=>{
    event.preventDefault();
    const form = event.target.value;
    const email = form.name.value;
    const password = form.email.value;
    console.log(email, password)
  }


  return (
    <div>
      <div className='container mx-auto w-full h-screen'>
        <div className='flex justify-center items-center w-full h-full'>
          <div className='bg-slate-100 rounded-md p-5 lg:w-[450px] lg:h-72'>
            <h1 className='text-center lg:text-3xl mb-5 italic'>LogIn Page</h1>
            <form onClick={submitData} className=' space-y-6'>
              <input type='email' className='w-full border-[1px] border-blue-600 p-3 rounded-md' placeholder='please enter your email' name="email"></input>
              <input type='password' className='w-full border-[1px] border-blue-600 p-3 rounded-md' placeholder='please enter your password' name="password"></input>
              <input type='submit' value="Submit Data" className='w-full bg-gray-500 p-1 text-white text-lg'></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;