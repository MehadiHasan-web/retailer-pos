import { useEffect } from 'react';
import './Home.css'
import Navbar from './../../../Navbar/Navbar';
import { useState } from 'react';
// import { IoSearch } from "react-icons/io5";
import blankImg from '../../../../../public/blankImg.jpg'
import { MdDelete } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";


const Home = () => {

  const [card, setCard] = useState([])
  const [cardTable, setCardTable] = useState([])
  console.log(cardTable)


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
    <>
      {/* navbar  */}
        <Navbar></Navbar>
      {/* navbar end */}
      <div className='container mx-auto'>
        <div className='md:flex justify-center gap-5'>
          <div className='w-full lg:w-[60%]  '>
            <div className='mt-5 mb-5 px-6 sm:px-5 md:px-4 lg:px-2 xl:px-2 2xl:px-0'>
              {/* search section start */}
              <div>
              <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full" />
              </div>
            
              {/* search section end */}
              {/* card section start */}
              <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-1 lg:gap-2 mt-5'>
                {
                  card.map((data, index) =>  
                    <div key={index} className=' p-2 flex flex-col justify-between rounded shadow-lg bg-slate-50'>
                      {
                        data.image ? <img className='w-full h-28 rounded' src={data.image}></img>: <img src={blankImg}></img>
                      }
                    <div>
                      <h2 className='text-base sm:text-lg md:text-sm lg:text-sm font-semibold md:font-normal lg:font-semibold mx-auto my-2'>{data.name}</h2>
                        <p>Stock : {data.stock === 0 ? 'stock out' : data.stock}</p>
                        <button onClick={() => cardData(data)} className='btn  w-full mt-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add</button>
                    </div>
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
                <table className="table w-full ">
                  {/* head */}
                  <thead className='bg-cyan-100 text-dark text-slate-100 h-10  shadow-lg '>                  
                      <th className='text-slate-600'>SL</th>
                      <th className='text-slate-600'>Product Name</th>
                      <th className='text-slate-600'>Quantity</th>
                      <th className='text-slate-600'>Inc/Dec</th>
                      <th className='text-slate-600'>Delete</th>
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
    </>
  );
};

export default Home;