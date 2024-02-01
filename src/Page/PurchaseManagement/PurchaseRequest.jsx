import axios from 'axios';
import Title from '../../Title/Title'
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from './../../Providers/AuthProvider';

const PurchaseRequest = () => {

  const [itemList, setItemList] = useState([])
  console.log(itemList)
  const {baseURL} = useContext(AuthContext)

  useEffect(()=> {
    axios.get(`${baseURL}/itemlist/`)
    .then(response => {
      setItemList(response.data)
      // console.log('Response:', response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },[baseURL])

  const purchaseRequestData = (event) => {
    event.preventDefault();
    const form = event.target;
    const item_id = form.itemId.value;
    const quantity = form.itemNumber.value;
    const note = form.bio.value;
    // const fileData = form.fileData.value;
    const purchaseValue = {item_id,quantity,note}
    axios.post(`${baseURL}/purchase/`, purchaseValue)
    .then(response => {
      console.log(response.data.msg); 
      toast.success("Successfully created");
    })
    .catch(error => {
      console.error('Error:', error);
      toast.error(`${error.message}. Try again`);
    });  
  }

  return (
    <>
    
    {/* title section start */}
    <Title pageName={"Purchase Request"}></Title>
    {/* title section end */}
    <div className='container mx-auto flex justify-center items-center mt-6'>
      <div className="card shrink-0 w-2/3 shadow-2xl bg-base-100">
      <form onSubmit={purchaseRequestData} className="card-body">
        <div className='md:flex gap-2'>
          <div className="form-control flex-1">
            {/* <input type="text" placeholder="item" name="itemName" className="input input-bordered input-md" /> */}
            <select className="select select-bordered w-ful" name="itemId">
              {
                itemList.map((data,index) => <option key={index} value={data.id}>{data.name}</option>)
              }
          </select>
          </div>
          <div className="form-control flex-1">
            <input type="number" placeholder="quantity" name="itemNumber" className="input input-bordered input-md" />
          </div>
        </div>
        <div className='form-control'>
          <textarea type="text" placeholder="Note" name="bio" className="textarea textarea-bordered textarea-md w-full " ></textarea>
        </div>
        <div className='form-control'>
          <input type="file" name="fileData" className="file-input file-input-bordered file-input-md w-full" />
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-primary">submit</button>
        </div>
      </form>
    </div>
      
    </div>
    </>
  );
};

export default PurchaseRequest;