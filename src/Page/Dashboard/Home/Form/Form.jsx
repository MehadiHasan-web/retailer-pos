import { useEffect, useState } from 'react';
import './Form.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from './../../../../Providers/AuthProvider';
// eslint-disable-next-line react/prop-types
const Form = ({ wishlist, setWishlist }) => {
  const [cardTable, setCardTable] = useState([])
  const [approverList, setApprover] = useState([])
  const user_id = localStorage.getItem('user_id');
  const { baseURL, accountURL } = useContext(AuthContext)
  console.log(cardTable)


  useEffect(() => {
    axios.get(`${accountURL}/approvers/`)
      .then((res) => res.data)
      .then((data) => setApprover(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [accountURL]);

  const clearData = () => {
    setWishlist([])
    setCardTable([])
  }



  async function sendData(userInfo) {
    console.log(userInfo)
    try {
      const response = await axios.post(`${baseURL}/inventory/`, userInfo, {
        headers: {
          'Content-Type': 'application/json',
          // 'user_id': user_id,
        },
      });
      toast.success("Successfully created");
    } catch (error) {
      toast.error(`${error.message} .Try again`);
    }
  }

  // from handeling
  const userData = (event) => {
    event.preventDefault();
    const form = event.target;
    const file = form.file.value;
    const bio = form.bio.value;
    const user_id = form.user_id.value;
    const position = form.position.value;
    const user = { user_id, file, bio, position }
    // const initialCardTable = JSON.parse(localStorage.getItem('cardTable')) || [];


    // setCardTable(initialCardTable);
    // setCardTable((prevCardTable) => [...prevCardTable, user]);
    // const updatedCardTable = [...initialCardTable, user];
    // sendData(updatedCardTable);
    // setCardTable(initialCardTable);
    setCardTable((wishlist) => [...wishlist, user]);
    const updatedCardTable = [...wishlist, user];
    sendData(updatedCardTable);
    // console.log(updatedCardTable)
  }

  return (
    <div>
      <div className="collapse bg-slate-200 collapse-open">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-base">
          Attach File & Description
        </div>
        <div className="collapse-content -mt-4">
          {/* content  */}
          <div>
            <form onSubmit={userData}>
              <div className='flex justify-between items-center gap-1'>
                {/* user id  */}
                <input type="number" hidden name='user_id' value={user_id} />
                {/* file section start */}
                <label className="form-control w-full flex-1">
                  <input type="file" className="file-input file-input-bordered w-full h-6 lg:h-9 text-sm" name="file" />
                </label>
                {/* file section end */}
                {/* file section start */}
                <label className="form-control w-full flex-1">
                  <select className="select select-bordered select-sm h-6 lg:h-9 w-full max-w-xs" name='position'>
                    {/* <option selected>Select controller</option>
                    <option value={'Approver'}>Approver</option>
                    <option value={'Manager'}>Manager</option>
                    <option value={'Admin'}>Admin</option> */}
                    {approverList.map((item, index) => (
                      <option key={index} value={item.id}>{item.username}</option>
                    ))}
                  </select>
                </label>
                {/* file section end */}
              </div>
              {/* textarea section start */}
              <textarea type="text" placeholder="Note" className="textarea textarea-lg w-full mt-1" id='bio' name="bio"></textarea>
              {/* textarea section end */}
              <div className='flex gap-2 mt-1'>
                <button className='bg-red-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded' type='button' onClick={clearData}>Clear All</button>
                <button onClick={() => userData()}
                  className='bg-green-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded' type='submit'>Inventory Request</button>

              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Form;