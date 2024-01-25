import { useState  } from 'react';


// eslint-disable-next-line react/prop-types
const Search = ({ card, setFilteredCard}) => {

  let initialFormData = {
    category: '',
    name: '',
  };


  const [formData, setFormData] = useState({initialFormData});
  const [addCustomProduct, setCustomProduct] = useState({
    name: '',
    category: '',
    subcategory: '',
    quantity: 1
  });

  // search functionality
  const filteredProducts = (e) =>{
  e.preventDefault();

    const { name } = formData;
    const newFilteredCard  = card.filter((item) => {
      return  !name || item.title.toLowerCase().includes(name.toLowerCase());
    });
    setFilteredCard(newFilteredCard)  
  }

  // handle Search 
  const handleSearch = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // clear search 
  const handleClear = () => {
    setFilteredCard([])
    setFormData({ ...formData, name: '' });
  };

  // custom incrementQuantity new product 
  const incrementQuantity = () => {
    // Increment the quantity by 1
    setCustomProduct((prevProduct) => ({
      ...prevProduct,
      quantity: prevProduct.quantity + 1
    }));
    console.log(addCustomProduct)
  };
  // decrement Quantity
  const decrementQuantity = () => {
    // Ensure that quantity doesn't go below 0
    if (addCustomProduct.quantity > 1) {
      setCustomProduct((prevProduct) => ({
        ...prevProduct,
        quantity: prevProduct.quantity - 1
      }));
    }
  };

  // add name 
  const handleNameChange = (event) => {
    setCustomProduct((prevProduct) => ({
      ...prevProduct,
      name: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCardTable([...cardTable, addCustomProduct])
    console.log('Form data submitted:', addCustomProduct);
  };



  return (
    <>
        <div className="py-2 mb-3 bg-slate-100 rounded-lg">
            <div className="flex justify-center mt-1 mx-2 xl:mx-0">
                <form action="" onSubmit={filteredProducts} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 lg:grid-cols-3 xl:flex xl:items-center xl:justify-center xl:gap-0'>
                    {/* category  */}
                    <select className="select select-sm select-bordered w-full xl:w-36 rounded-full mx-1 mb-1 "  name="category"  onChange={handleSearch} value={formData.category}>
                        <option  selected>Category All</option>
                        <option value="Han Solo">Han Solo</option>
                        <option value="Greedo">Greedo</option>
                    </select>
                    {/* subcategory  */}
                    <select className="select select-sm select-bordered w-full xl:w-36 rounded-full mx-1 mb-1 " name='subcategory'  onChange={handleSearch} value={formData.subcategory}>
                        <option  selected>Subcategory All</option>
                        <option value="rem">rem</option>
                        <option value="rem2">rem 2</option>
                        {/* <option value={formData.subcategory}>rem 2</option> */}
                    </select>
                    {/* subcategory  */}
                    <input type="text" placeholder="Type here" className="input input-bordered w-full input-sm xl:w-36 rounded-full mx-1 mb-1 " name="name" value={formData.name} onChange={handleSearch}/>
                    <button type="submit" className="btn btn-outline btn-sm rounded-full  hover:text-white w-full lg:mx-1 xl:w-24" >Search</button>
                    <button type="button" className="btn btn-outline btn-sm rounded-full mx-1 mb-1 lg:mb-0  hover:text-white w-full xl:w-28" onClick={handleClear}>Clear filter</button>
                    <button className="btn btn-outline btn-sm rounded-full mx-1 lg:mb-1 flex items-center mt-1" onClick={()=>document.getElementById('my_modal_3').showModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:w-6 w-full h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    </button>
                </form>
              </div>
        </div>
        {/* add new product modal */}              
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 border-1 border-black">✕</button>
            </form>
            <h3 className="font-bold text-lg">Add New Inventory Request</h3>
            <form className='mt-3' onSubmit={handleSubmit}>
              <label className="form-control w-full max-w-xs">
                {/* category and subcategory  */}
                <div className='flex'>
                    {/* category  */}
                    <select className="select select-sm select-bordered w-full xl:w-36 rounded-full mx-1 mb-1 "  name="category" >
                        <option  selected>Category All</option>
                        <option value="Han Solo">Han Solo</option>
                        <option value="Greedo">Greedo</option>
                    </select>
                </div>
                <div className="label">
                  <span className="label-text">What is your product name?</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" value={addCustomProduct.name} onChange={handleNameChange} />           
              </label>
              <div className='mt-4 flex justify-start items-center'>
                <h2 className='font-bold'>Quantity : {addCustomProduct.quantity}</h2>
                <div className='ms-4'>
                  {/* plus */}
                  <button className="btn btn-circle btn-outline btn-sm mx-1" type='button' onClick={incrementQuantity}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  </button>
                  {/* minus */}
                  <button className="btn btn-circle btn-outline btn-sm mx-1" type='button' onClick={decrementQuantity}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg>
                  </button>
                </div> 
              </div>
              <div className="flex justify-end">
              <button className="btn btn-active btn-neutral mt-4 " type='submit'>Save</button>
              </div>
            </form>
          </div>
        </dialog>
    </>
  )
}

export default Search
