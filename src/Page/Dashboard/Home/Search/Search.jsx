import { useState  } from 'react';


// eslint-disable-next-line react/prop-types
const Search = ({ card, setFilteredCard, }) => {



  let initialFormData = {
    category: '',
    subcategory: '',
    name: '',
  };


  const [formData, setFormData] = useState({initialFormData});

  // search functionality
  const filteredProducts = (e) =>{
  e.preventDefault();

  const { name } = formData;

  const newFilteredCard  = card.filter((item) => {
    return !name || item.name.toLowerCase().includes(name.toLowerCase());
  });
  setFilteredCard(newFilteredCard)

//   const newFilteredCard = card.filter((item) => {
//     const isNameMatch = !name || item?.name.toLowerCase().includes(name.toLowerCase());
//     const isTitleMatch = !name || item?.title.toLowerCase().includes(title?.toLowerCase());
//     return isNameMatch || isTitleMatch;
// });

//   setFilteredCard(newFilteredCard)
}

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


  return (
    <>
        <div className="py-2 mb-3 bg-slate-100 rounded-lg">
            <div className="flex justify-center mt-1">
                <form action="" onSubmit={filteredProducts}>
                    {/* category  */}
                    <select className="select select-sm select-bordered w-32 max-w-xs rounded-full mx-1 mb-1 "  name="category"  onChange={handleSearch} value={formData.category}>
                        <option  selected>Category All</option>
                        <option value="Han Solo">Han Solo</option>
                        <option value="Greedo">Greedo</option>
                    </select>
                    {/* subcategory  */}
                    <select className="select select-sm select-bordered w-32 max-w-xs rounded-full mx-1 mb-1 " name='subcategory'  onChange={handleSearch} value={formData.subcategory}>
                        <option  selected>Subcategory All</option>
                        <option value="rem">rem</option>
                        <option value="rem2">rem 2</option>
                        {/* <option value={formData.subcategory}>rem 2</option> */}
                    </select>
                    {/* subcategory  */}
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm max-w-xs w-44 rounded-full mx-1 mb-1 " name="name" value={formData.name} onChange={handleSearch}/>
                    <button type="submit" className="btn btn-outline btn-sm rounded-full mx-3  hover:text-white " >Search</button>
                    <button type="button" className="btn btn-outline btn-sm rounded-full mx-1 mb-1  hover:text-white " onClick={handleClear}>Clear filter</button>
                </form>
              </div>
        </div>
    </>
  )
}

export default Search
