import { useState } from 'react';
import './Form.css'


// eslint-disable-next-line react/prop-types
const Form = ({cardTable,setCardTable}) => {
  // const { cardTable, setCardTable } = props;

  const [userInfo, setUserInfo] = useState()

  const handleClearCardTable = () => {
    setCardTable([]);
    // Clear localStorage
    localStorage.removeItem('cardTable');
  };

  // eslint-disable-next-line react/prop-types
  const data = cardTable.map(item => ({ id: item.id, quantity: item.quantity }));

  

  const userData = (event) => {
    event.preventDefault();
    const form = event.target;
    const file = form.file.value;
    const bio = form.bio.value;
    const user = {file,bio}
    setUserInfo([...data, user])
    form.target = ''
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
                <select className="select select-bordered select-sm h-6 lg:h-9 w-full max-w-xs">
                  <option selected>Select controller</option>
                  <option>Approver</option>
                  <option>Manager</option>
                  <option>Admin</option>
                </select>
              </label>
             {/* file section end */}
            </div>
             {/* textarea section start */}
              <textarea type="text" placeholder="Bio" className="textarea textarea-lg w-full mt-1" name="bio"></textarea>
            {/* textarea section end */}
          <div className='flex gap-2 mt-1'>       
          <button className='bg-red-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded' type='button' onClick={handleClearCardTable}>Clear All</button>
          <button
              className='bg-blue-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded' type='submit'>checkout</button>
          </div>
        </form> 
          </div>
        </div>
      </div>


    </div>
  );
};

export default Form;