import './Form.css'


const Form = ({setCardTable}) => {
  // const { cardTable, setCardTable } = props;
  const handleClearCardTable = () => {
    setCardTable([]);
    // Clear localStorage
    localStorage.removeItem('cardTable');
  };


  return (
    <div>
      <div className='bg-slate-200 h-56 lg:w-full p-5 md:mt-3 lg:mt-5 absolute  right-0 left-0 md:top-60 lg:top-72 rounded-md hidden'>
        <form>
          <div>
            <textarea className='w-full md:h-36 lg:h-32 rounded-lg pl-2'></textarea>
          </div>
          <div className='flex gap-2 mt-2'>       
          <button className='bg-red-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded' type='button' onClick={handleClearCardTable}>Clear All</button>   
            <button
              className='bg-blue-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded' type='submit'>checkout</button>
          </div>
        </form>      
      </div>

      <div className="collapse bg-base-200">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Click me to show/hide content
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
        {/* content  */}
          <div>
          <form>
          <div>
            <textarea className='w-full md:h-36 lg:h-32 rounded-lg pl-2'></textarea>
          </div>
          <div className='flex gap-2 mt-2'>       
          <button className='bg-red-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded' type='button' onClick={handleClearCardTable}>Clear All</button>   
            <button
              className='bg-blue-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded' type='submit'>checkout</button>
          </div>
        </form> 
          </div>
        </div>
      </div>


    </div>
  );
};

export default Form;