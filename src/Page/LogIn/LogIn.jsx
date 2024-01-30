import { useNavigate } from 'react-router-dom';
import './LogIn.css'
import Title from '../../Title/Title';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const LogIn = () => {
  const {setUser} = useAuth()
  const navigate = useNavigate()
  let [errorMessage, setErrorMessage] = useState(null)


  const submitData = async (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.email.value;
    const password = form.password.value;
    const formData = { username, password };
    try {
      const response = await axios.post('http://inv.xcode.com.bd/api/v1/account/login/', formData);

      if(response.status === 200) {
        setUser(response.data)
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('is_approver', response.data.is_approver)
        localStorage.setItem('is_manager', response.data.is_manager)
        localStorage.setItem('user_id', response.data.user_id)
        navigate('/dashboard')
      }
    } catch (error) {
      if(error.response.status === 400){
        setErrorMessage(error.response.data.non_field_errors[0])
      }else if(error.response.status === 404){
        toast.error('network error');
      }
    }
  }


  return (
    <div>
      {/* title section start */}
      <Title pageName={"Login"}></Title>
      {/* title section end */}
      <div className='container mx-auto w-full h-screen'>
        <div className='flex justify-center items-center w-full h-full'>
          <div className='bg-slate-100 rounded-md p-5 lg:w-[450px] lg:h-80'>
            <h1 className='text-center lg:text-3xl mb-4 font-bold'>NTRCA</h1>
            <form onSubmit={submitData} className=' space-y-5'>
              <input type='text' className='w-full border-[1px] border-blue-600 p-3 rounded-md' placeholder='please enter your email' name="email" defaultValue={"kminchelle"}></input>
              <input type='password' className='w-full border-[1px] border-blue-600 p-3 rounded-md' placeholder='please enter your password' name="password" defaultValue={"0lelplR"}></input>
              <input type='submit' value="Login" className='btn w-full bg-gray-500 p-1 text-white text-lg hover:text-black'></input>
              <p className='my-4 text-red-600 text-center'>{errorMessage}</p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LogIn;