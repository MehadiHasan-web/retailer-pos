import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import blankImg from '../../../../../public/blankImg.jpg'
import { MdDelete } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";


const Home = () => {

  const [card, setCard] = useState([])
  const [cardTable, setCardTable] = useState([])


  useEffect(() => {
    fetch('card.json')
    .then((res) => res.json())
    .then((data) => setCard(data))
  },[])

  const cardData = (data) => {
    const values = card.find(value => value.id === data.id)
    setCardTable([...cardTable, values])
  }


  return (
    <div className='container mx-auto'>
      <div className='md:flex justify-center gap-5'>
        <div className='w-full lg:w-[60%] border-[1px] border-black '>
          <div className='p-5'>
            {/* search section start */}
            <div className='relative'>
              <input type="text" className='w-full py-2 border-2 border-black'></input>
              <IoSearch className='absolute top-2 right-3 text-2xl'></IoSearch>
            </div>
            {/* search section end */}
            {/* card section start */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-1 lg:gap-2 mt-5'>
              {
                card.map((data, index) =>  
                  <div key={index} className='border-[1px] p-2 border-black flex flex-col justify-between'>
                    {
                      data.image ? <img className='w-full h-28' src={data.image}></img>: <img src={blankImg}></img>
                    }
                    <h2 className='text-base sm:text-lg md:text-sm lg:text-sm font-semibold md:font-normal lg:font-semibold mx-auto my-2'>{data.name}</h2>
                    <p>Stock : {data.stock === 0 ? 'stock out' : data.stock}</p>
                    <button onClick={() => cardData(data)} className='bg-green-700 text-center w-full mb-1 py-1 text-base'>click</button>
                  </div>
                )
              }
            </div>
            {/* card section end */}
          </div>
        </div>
        <div className='hidden md:block w-full lg:w-[40%]'>
          <div className='p-5'>
            {/* table section start */}
            <div className="w-full">
              <table className="table w-full">
                {/* head */}
                <thead className='bg-green-700 text-slate-100 h-10'>
                  <tr>
                    <th>
                      #
                    </th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Inc/Dec</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className='bg-slate-100'>
                  {/* row 1 */}
                  {cardTable.map((data, index) => <tr key={index} className='h-8'>
                    <td className='text-center'>
                      {++index}
                    </td>
                    <td className='text-center'>
                      {data.name}
                    </td>
                    <td className='text-center'>
                      {data.quantity}
                    </td>
                    <td>
                      <div className='flex justify-around items-center'>
                      <button><FiPlus className='bg-green-500 text-white text-xl p-[1px]'></FiPlus></button>
                      <button><FiMinus className='bg-red-500 text-white text-xl p-[1px]'></FiMinus></button>
                      </div>
                    </td>
                    <td className=''>
                      <MdDelete className='mx-auto bg-red-500 text-white text-xl p-[1px]'></MdDelete>
                    </td>
                  </tr>)}
                  
                </tbody>
              </table>
            </div>
            {/* table section end */}
            <div className='bg-slate-200 h-56 w-[35%] fixed bottom-10 p-5 mt-5'>
              <form>
                <div>
                  <textarea className='w-full h-32'></textarea>
                </div>
                <div className='flex gap-2 mt-2'>
                  <button className='bg-red-500 text-white text-lg px-3 py-2 uppercase rounded'>clear</button>
                  <button className='bg-blue-500 text-white text-lg px-3 py-2 uppercase rounded'>checkout</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;