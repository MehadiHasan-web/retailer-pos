/* eslint-disable react/prop-types */
import './Table.css'
import { MdDelete } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
// import { useState } from 'react';
import Swal from 'sweetalert2'



// eslint-disable-next-line react/prop-types
const Table = (props) => {
  const { cardTable, setCardTable } = props;

  // increment Quantity 
  const incrementQuantity = (data) => {
    const updatedTable = cardTable.map(value => {
      if (value.id === data.id) {
        // Increment the quantity for the specific item
        return { ...value, quantity: value.quantity + 1 }
      }
      return value;
    })
    setCardTable(updatedTable);
  };

  // decrement Quantity
  const decrementQuantity = (data) => {
    const updatedTable = cardTable.map((value) => {
      if (value.id === data.id) {
        if (value.quantity > 1) {
          return { ...value, quantity: value.quantity - 1 };
        } else {
          console.log('');
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Sorry, quantity cannot be less than 1!",
          });
        }
      }
      return value;
    });
  
    setCardTable(updatedTable);
  };
  

  // delete item
  const deleteItem = (data) => {
    const values = cardTable.filter(value => value.id !== data.id)
    setCardTable(values);
  };

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
            <button onClick={() => incrementQuantity(data)}><FiPlus className='bg-green-500 text-white md:text-xl lg:text-2xl p-[1px] rounded'></FiPlus></button>
            <button onClick={() => decrementQuantity(data)}><FiMinus className='bg-red-500 text-white md:text-xl lg:text-2xl p-[1px] rounded'></FiMinus></button>
            </div>
          </td>
          <td className=''>
            <MdDelete className='mx-auto bg-red-500 text-white md:text-xl lg:text-2xl p-[1px] rounded' onClick={() => deleteItem(data)}></MdDelete>
            
          </td>
        </tr>)}
        
      </tbody>
    </table>
  </div>
  );
};

export default Table;