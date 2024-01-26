import { useState } from 'react';
import './Form.css'
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const Form = ({cardTable,setCardTable}) => {
  // const { cardTable, setCardTable } = props;

  const [userInfo, setUserInfo] = useState([])

  // clear function 
  const handleClearCardTable = () => {
    setCardTable([]);
    localStorage.removeItem('cardTable');
  };

  function sendData(userInfo){
    // console.log(userInfo)
    axios.post('http://inv.xcode.com.bd/api/v1/inventory/inventory/', userInfo)
    .then(response => {
      console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  //  https://inv.xcode.com/api/v1/inventory/inventory/
    // axios.get('https://inv.xcode.com.bd/api/v1/account/users/')
    // .then(response => {
    //   console.log('Response:', response.data);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
    
  }

  const userData = (event) => {
    event.preventDefault();
    const form = event.target;
    const file = form.file.value;
    const bio = form.bio.value;
    const position = form.position.value;
    const user = {file,bio,position}
    setUserInfo([...cardTable, user])
    sendData(userInfo)   
    console.log(userInfo)
  }



  return (
    <div>
      <div className="collapse bg-slate-200">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title text-base">
          Attach File & Description
        </div>
        <div className="collapse-content -mt-4"> 
        {/* content  */}
          <div>
          <form onSubmit={userData}>
            <div className='flex justify-between items-center gap-1'>
              {/* file section start */}
            <label className="form-control w-full flex-1">
              <input type="file" className="file-input file-input-bordered w-full h-6 lg:h-9 text-sm" name="file"/>
            </label>
             {/* file section end */}
            {/* file section start */}
              <label className="form-control w-full flex-1">
                <select className="select select-bordered select-sm h-6 lg:h-9 w-full max-w-xs" name='position'>
                  <option selected>Select controller</option>
                  <option value={'Approver'}>Approver</option>
                  <option value={'Manager'}>Manager</option>
                  <option value={'Admin'}>Admin</option>
                </select>
              </label>
             {/* file section end */}
            </div>
             {/* textarea section start */}
              <textarea type="text" placeholder="Bio" className="textarea textarea-lg w-full mt-1" id='bio' name="bio"></textarea>
            {/* textarea section end */}
          <div className='flex gap-2 mt-1'>       
          <button className='bg-red-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded' type='button' onClick={handleClearCardTable}>Clear All</button>
          <button
              className='bg-blue-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded' type='submit'>Inventory Request</button>
          </div>
        </form> 
          </div>
        </div>
      </div>


    </div>
  );
};

export default Form;