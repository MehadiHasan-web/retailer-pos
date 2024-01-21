/* eslint-disable react/prop-types */
import './Table.css'
import { MdDelete } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const Table = ({cardTable, deleteData}) => {

  
  return (
    <div className="w-full md:h-56 lg:h-72 overflow-y-scroll rounded-md">
    <table className="w-full">
      {/* head */}
      <thead className='bg-cyan-100 text-dark text-slate-100 h-10  shadow-lg'>                  
          <th className='text-slate-600 md:text-sm lg:text-lg'>SL</th>
          <th className='text-slate-600 md:text-sm lg:text-lg'>Product Name</th>
          <th className='text-slate-600 md:text-sm lg:text-lg'>Quantity</th>
          <th className='text-slate-600 md:text-sm lg:text-lg'>Inc/Dec</th>
          <th className='text-slate-600 md:text-sm lg:text-lg'>Delete</th>
      </thead>
      <tbody className='bg-slate-100'>
        {/* row 1 */}
        {cardTable.map((data, index) => <tr key={index} className='h-12 hover:bg-slate-300'>
          <td className='text-center md:text-sm lg:text-lg'>
            {++index}
          </td>
          <td className='text-center md:text-sm lg:text-lg'>
            {data.name}
          </td>
          <td className='text-center md:text-sm lg:text-lg'>
            {data.quantity}
          </td>
          <td>
            <div className='flex justify-around items-center'>
            <button><FiPlus className='bg-green-500 text-white md:text-xl lg:text-2xl p-[1px]'></FiPlus></button>
            <button><FiMinus className='bg-red-500 text-white md:text-xl lg:text-2xl p-[1px]'></FiMinus></button>
            </div>
          </td>
          <td className=''>
            <MdDelete onClick={() => {deleteData(data)}} className='mx-auto bg-red-500 text-white md:text-xl lg:text-2xl p-[1px]'></MdDelete>
          </td>
        </tr>)}
        
      </tbody>
    </table>
  </div>
  );
};

export default Table;