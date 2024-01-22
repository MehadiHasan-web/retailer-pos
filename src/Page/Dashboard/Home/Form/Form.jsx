import './Form.css'

const Form = () => {
  return (
    <div className='bg-slate-200 h-56 lg:w-full p-5 md:mt-3 lg:mt-5 absolute  right-0 left-0 md:top-60 lg:top-72 rounded-md'>
      <form>
        <div>
          <textarea className='w-full md:h-36 lg:h-32 rounded-lg pl-2'></textarea>
        </div>
        <div className='flex gap-2 mt-2'>
          <button className='bg-red-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded'>clear</button>
            <button className='bg-blue-500 text-white md:text-sm lg:text-base md:px-2 md:py-1 lg:px-3 lg:py-2 uppercase rounded'>checkout</button>
          </div>
      </form>
    </div>
  );
};

export default Form;