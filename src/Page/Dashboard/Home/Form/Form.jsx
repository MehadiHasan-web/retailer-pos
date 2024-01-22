import './Form.css'


// eslint-disable-next-line react/prop-types
const Form = ({setCardTable}) => {
  // const { cardTable, setCardTable } = props;
  const handleClearCardTable = () => {
    setCardTable([]);
    // Clear localStorage
    localStorage.removeItem('cardTable');
  };


  return (
    <div>
      <div className="collapse bg-slate-200">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title text-base">
          Attach File & Description
        </div>
        <div className="collapse-content -mt-3"> 
        {/* content  */}
          <div>
          <form>
            {/* file section start */}
            <label className="form-control w-full">
              <input type="file" className="file-input file-input-bordered w-full h-6 lg:h-10 text-sm" />
            </label>
             {/* file section end */}
             {/* textarea section start */}
              {/* <textarea className='w-full md:h-36 lg:h-32 rounded-lg pl-2'></textarea> */}
              <textarea placeholder="Bio" className="textarea textarea-lg w-full mt-2" ></textarea>
            {/* textarea section end */}
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