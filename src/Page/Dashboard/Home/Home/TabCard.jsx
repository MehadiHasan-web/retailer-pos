import bottol from '../../../../../public/bottol.png'


const TabCard = () => {
  return (
    <div className=" bg-base-100 shadow-xl p-3">
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
          <p className='text-center'><span className='text-2xl font-bold'>3.75</span><span>/Bottle</span></p>
        </div>
        <div className="w-[65%]">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default TabCard;