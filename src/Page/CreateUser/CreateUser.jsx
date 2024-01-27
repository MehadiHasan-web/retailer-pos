import axios from "axios";
import Title from "../../Title/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const CreateUser = () => {

  const [approver, setApprover] = useState(true);
  const [manager, setManager] = useState(true);

  const navigate = useNavigate()

  const createUserData = (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.userName.value;
    const email = form.email.value;
    const designation = form.designation.value;
    const is_approver = approver;
    const  is_manager = manager;
    const password = form.password.value;
    const createUserValue = {username, email, designation, is_approver, is_manager, password}
    console.log(createUserValue)
    axios.post('http://inv.xcode.com.bd/api/v1/account/createaccount/', createUserValue)
    Swal.fire({
      title: "Good job!",
      text: "You User Is Created",
      icon: "success"
    });
    navigate('/')
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }


  return (
    <div className=" mt-10 ">
      {/* title section start */}
      <Title pageName={"Create User"}></Title>
        {/* title section end */}
      <div className=" p-5 rounded-lg shadow-md space-y-5 border-2 lg:w-2/5 mx-auto">
        <h1 className="text-center text-xl font-bold mb-4">Create User</h1>
        <div className="card shadow-2xl bg-base-100">
          <form onSubmit={createUserData} className="card-body">
            {/* Name field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">name:</span>
              </label>
              <input
                type="text"
                placeholder="enter your name"
                className="input input-bordered"
                name="userName"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">email:</span>
              </label>
              <input
                type="email"
                placeholder="enter your email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">designation:</span>
              </label>
              <input
                type="text"
                placeholder="enter your designation"
                className="input input-bordered"
                name="designation"
              />
            </div>
            <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">approver</span> 
              <input onClick={() => setApprover(!approver)} type="checkbox" className={`${approver === true ? 'toggle' : 'toggle'}`} checked={approver}/>
            </label>
            </div>
            <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">manager</span> 
              <input onClick={() => setManager(!manager)} type="checkbox" className={`${manager === true ? 'toggle' : 'toggle'}`} checked={manager}/>
            </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">password:</span>
              </label>
              <input
                type="password"
                placeholder="enter your password"
                className="input input-bordered"
                name="password"
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

export default CreateUser;