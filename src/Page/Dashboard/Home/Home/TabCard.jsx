import bottol from '../../../../../public/bottol.png'
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";


const TabCard = () => {
  return (
    <div className=" bg-base-100 shadow-xl p-3 rounded-md">
      <div className='flex justify-between items-center'>
        <div className='w-[35%]'>
          <figure><img className='w-60 h-40' src={bottol} alt="Movie"/></figure>
        </div>
        <div className="w-[65%]">
          <h2 className="text-xl font-bold">Paracetamol Berno</h2>
          <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad atque aut animi modi, aspernatur mollitia iste. Odio, nobis perspiciatis!</p>
          <ul className='flex items-center gap-32 mt-2'>
            <li>
              <p className='text-sm'>Netto</p>
              <p className='text-base font-bold'>60ml</p>
            </li>
            <li>
              <p className='text-sm'>Netto</p>
              <p className='text-base font-bold'>60ml</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between items-center mt-2'>
        <div className='w-[35%]'>
          <p className='text-center'><sup className='text-green-600 font-bold -mt-10'>$</sup><span className='text-2xl font-bold'>3.75</span><span className='text-gray-500'>/Bottle</span></p>
        </div>
        <div className="w-[65%]">
          <ul className='flex justify-between items-center bg-slate-200 py-1 px-3 rounded-2xl'>
            <li><FaCircleMinus className='text-white text-xl'></FaCircleMinus></li>
            <li>1</li>
            <li><FaCirclePlus className='text-green-600 text-xl'></FaCirclePlus></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TabCard;