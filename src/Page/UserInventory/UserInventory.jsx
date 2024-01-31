import { useEffect, useState } from "react";
import blankImg from '../../../public/blankImg.jpg'


const UserInventory = () => {
  const [card, setCard] = useState([])



  useEffect(() => {
    fetch('card.json')
    .then((res) => res.json())
    .then((data) => setCard(data))
  },[])

  const addStockData = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = form.addStock.value;
    console.log(data)
  }



  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-1 sm:gap-2 md:gap-1 lg:gap-2 mt-5">
        {
          card.map((data, index) => <div key={index} className=" p-2 flex flex-col justify-between rounded shadow-lg bg-slate-50">
          {
                        data.image ? <img className='w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded' src={data.image}></img> : <img src={blankImg} className='w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded'></img>
                      }
          <div className="p-2">
            <h2 className="text-sm sm:text-base md:text-sm lg:text-sm font-semibold mx-auto my-1 md:my-1 lg:my-2">Phone X</h2>
            <p className="text-sm sm:text-base md:text-sm">Stock : 20</p>
            <form onSubmit={addStockData}>
              <div className="flex justify-between items-center">
                <span>Update Stock:</span>
              <input  name="addStock" type="text" placeholder="Type here" className="input input-bordered input-sm w-28" />
              </div>

              <input type="submit" className="bg-blue-500 text-white p-2 w-full my-2 rounded" value="update"></input>
            </form>
            
          </div>
        </div>)
        }
      </div>
      
    </div>
  );
};

export default UserInventory;
