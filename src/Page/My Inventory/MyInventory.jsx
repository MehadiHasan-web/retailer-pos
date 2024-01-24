import { useEffect, useState } from 'react';
import Title from '../../Title/Title';
import './MyInventory.css';
import blankImg from '../../../public/blankImg.jpg';

const MyInventory = () => {

  const [card, setCard] = useState([])


  useEffect(() => {
    fetch('card.json')
    .then((res) => res.json())
    .then((data) => setCard(data))
  },[])

  return (
    <>
    {/* title section start */}
    <Title pageName={"My Inventory"}></Title>
    {/* title section end */}
    <div className='container mx-auto'>
      <div className='md:flex justify-center lg:gap-5'>
        <div className='w-full'>
          <div className='mt-5 mb-5 px-6 sm:px-5 md:px-4 lg:px-2 xl:px-2 2xl:px-0'>
            {/* card section start */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-1 sm:gap-2 md:gap-1 lg:gap-2 mt-5'>
              {
                card.map((data, index) =>  
                  <div key={index} className=' p-2 flex flex-col justify-between rounded shadow-lg bg-slate-50'>
                    {
                      data.image ? <img className='w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded' src={data.image}></img>: <img src={blankImg} className='w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded'></img>
                    }
                  <div className='pl-2'>
                    <h2 className='text-sm sm:text-base md:text-sm lg:text-sm font-semibold mx-auto my-1 md:my-1 lg:my-2'>{data.name ? data.name : data.title}</h2>
                    <p className='text-sm sm:text-base md:text-sm'>Stock : {data.stock === 0 ? 'stock out' : data.stock}</p>
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