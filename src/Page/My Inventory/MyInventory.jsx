import { useEffect, useState } from 'react';
import Title from '../../Title/Title';
import './MyInventory.css';
import blankImg from '../../../public/blankImg.jpg';
import axios from 'axios';

const MyInventory = () => {

  const [card, setCard] = useState([])


  // useEffect(() => {
  //   fetch('card.json')
  //   .then((res) => res.json())
  //   .then((data) => setCard(data))
  // },[])
  useEffect(() => {
    const user_id = localStorage.getItem('user_id');
    axios.get(`http://inv.xcode.com.bd/api/v1/inventory/myinventory/${user_id}/`)
        .then((res) => res.data)
        .then((data) => setCard(data))
        .catch((error) => console.error("Error fetching data:", error));
}, []);
console.log(card)

  return (
    <>
    {/* title section start */}
    <Title pageName={"My Inventory"}></Title>
    {/* title section end */}
    <div className='container mx-auto'>
      {/* search bar  */}
      <div className="py-2 bg-slate-100 rounded-lg mt-5">
              <div className="flex justify-center mt-1 mx-2">
                <form action="" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2  lg:flex md:gap-0 lg:justify-around lg:items-center">
                    {/* category  */}
                    <select className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1 " >
                        <option disabled selected>Category</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    {/* subcategory  */}
                    <select className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1 " >
                        <option disabled selected>Subcategory?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    {/* subcategory  */}
                    {/* date end */}
                    <select className="select select-sm select-bordered w-full xl:w-44 max-w-xs rounded-full mx-1 mb-1  " >
                        <option disabled selected>Subcategory?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm max-w-xs w-full xl:w-44 rounded-full mx-1 mb-1 " />
                    <button type="submit" className="btn btn-outline btn-sm rounded-full mx-3  hover:text-white ">Search</button>
                    <button type="button" className="btn btn-outline btn-sm rounded-full mx-1 hover:text-white ">Clear filter</button>

                </form>
               </div>
            </div>
            {/* search bar end  */}
      <div className='md:flex justify-center lg:gap-5'>
        <div className='w-full'>
          <div className='mt-3 mb-5 px-3 sm:px-5 md:px-4 lg:px-2 xl:px-1 2xl:px-0'>
            {/* card section start */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-2 md:gap-1 lg:gap-2 mt-2'>
              {
                card.map((data, index) =>  
                  <div key={index} className=' p-2 flex flex-col justify-between rounded shadow-lg bg-slate-50'>
                    {
                      data.image ? <img className='w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded' src={data.image}></img>: <img src={blankImg} className='w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded'></img>
                    }
                  <div className='pl-2'>
                    <h2 className='text-sm sm:text-base md:text-sm lg:text-sm font-semibold mx-auto my-1 md:my-1 lg:my-2'>{data.name ? data.name : data.title}</h2>
                    {/* <p className='text-sm sm:text-base md:text-sm'>Stock : {data.stock === 0 ? 'stock out' : data.stock}</p> */}
                  </div>
                  </div>
                )
              }
            </div>
            {/* card section end */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyInventory;