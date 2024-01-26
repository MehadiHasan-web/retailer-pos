import { useNavigate } from 'react-router-dom';
import './LogIn.css'
import Swal from 'sweetalert2'
import Title from '../../Title/Title';
import { useEffect } from 'react';

const LogIn = () => {

  const navigate = useNavigate()

  const submitData = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    

    if(email === "admin@gmail.com" && password === "111"){
      navigate('/home')
      Swal.fire({
        title: "Good job!",
        text: "You are logged in successfully",
        icon: "success"
      });
    }
    else if(email === '' && password === ''){
      Swal.fire({
        title: 'Error!',
        text: 'Sorry can not provide your email and password',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'Sorry you data is incorrect! Please try again',
        icon: 'error',
        confirmButtonText: 'Try Again'
      })
    }

  }

  // eslint-disable-next-line no-undef
  // const formData = {email, password};

  // useEffect(()=> {
  //   fetch(``, {
  //     method : 'POST',
  //     headers : {'content-type': 'application/json'},
  //     body : JSON.stringify(formData)
  //   })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  // },[])


  return (
    <div>
      {/* title section start */}
      <Title pageName={"Login"}></Title>
      {/* title section end */}
      <div className='container mx-auto w-full h-screen'>
        <div className='flex justify-center items-center w-full h-full'>
          <div className='bg-slate-100 rounded-md p-5 lg:w-[450px] lg:h-72'>
            <h1 className='text-center lg:text-3xl mb-5 italic'>LogIn Page</h1>
            <form onSubmit={submitData} className=' space-y-6'>
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