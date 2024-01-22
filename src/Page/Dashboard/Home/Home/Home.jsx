// import { useEffect } from 'react';
import './Home.css'
import { useState, useEffect  } from 'react';
import blankImg from '../../../../../public/blankImg.jpg'

import Table from '../Table/Table';
import Form from '../Form/Form';
import Title from './../../../../Title/Title';

const Home = () => {

  const [card, setCard] = useState([])
  // const [cardTable, setCardTable] = useState([])
  const initialCardTable = JSON.parse(localStorage.getItem('cardTable')) || [];
  const [cardTable, setCardTable] = useState(initialCardTable);
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    localStorage.setItem('cardTable', JSON.stringify(cardTable));
  }, [cardTable]);

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then((res) => res.json())
  //     .then((data) => setCard(data.products))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  useEffect(() => {
    fetch('card.json')
    .then((res) => res.json())
    .then((data) => setCard(data))
  },[])

  // search functionality
  const filteredProducts = card.filter((card) => {
    const query = searchQuery && typeof searchQuery === 'string' ? searchQuery.toLowerCase() : '';
  
    return card.name.toLowerCase().includes(query);
  });
  const handleSearch = (e) => {
    e.preventDefault();
    // Perform the search logic here if needed
    // For example, you can use the filteredProducts array for rendering
    console.log('Filtered Products:', filteredProducts);
  };



  const cardData = (data) => {
    // const values = card.find(value => value.id === data.id)
 
    const cardTableItem = cardTable.find(value => value.id === data.id);
    if (cardTableItem) {
      const updatedCardTable = cardTable.map(item =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCardTable(updatedCardTable);
    } else {
      setCardTable([...cardTable, data])
    }
  }



  return (
    <>
      {/* title section start */}
      <Title pageName={"Home"}></Title>
      {/* title section end */}
      <div className='container mx-auto'>
        <div className='md:flex justify-center lg:gap-5'>
          <div className='w-full md:w-[60%] lg:w-[60%]  '>
            <div className='mt-5 mb-5 px-6 sm:px-5 md:px-4 lg:px-2 xl:px-2 2xl:px-0'>
            {/* search bar  */}
            <div className="py-2 mb-3 bg-slate-100 rounded-lg">
               <div className="flex justify-center mt-1">
                <form action="" onSubmit={handleSearch}>
                    {/* category  */}
                    <select className="select select-sm select-bordered w-32 max-w-xs rounded-full mx-1 mb-1 " >
                        <option disabled selected>Category</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    {/* subcategory  */}
                    <select className="select select-sm select-bordered w-32 max-w-xs rounded-full mx-1 mb-1 " >
                        <option disabled selected>Subcategory?</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    {/* subcategory  */}
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm max-w-xs w-44 rounded-full mx-1 mb-1 " value={searchQuery.name} onChange={(e) => setSearchQuery({ ...searchQuery, name: e.target.value })}/>
                    <button type="submit" className="btn btn-outline btn-sm rounded-full mx-3  hover:text-white " >Search</button>
                    <button type="button" className="btn btn-outline btn-sm rounded-full mx-1 mb-1  hover:text-white ">Clear filter</button>

                </form>
               </div>
            </div>
            {/* search bar end  */}
            
              {/* search section end */}
              {/* card section start */}
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 md:gap-1 lg:gap-2 mt-5'>
                {
                  card.map((data, index) =>  
                    <div key={index} className=' p-2 flex flex-col justify-between rounded shadow-lg bg-slate-50'>
                      {
                        data.image ? <img className='w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded' src={data.image}></img>: <img src={blankImg} className='w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded'></img>
                      }
                    <div>
                      <h2 className='text-sm sm:text-base md:text-sm lg:text-sm font-semibold mx-auto my-1 md:my-1 lg:my-2'>{data.name ? data.name : data.title}</h2>
                        <p className='text-sm sm:text-base md:text-sm'>Stock : {data.stock === 0 ? 'stock out' : data.stock}</p>
                        <button onClick={() => cardData(data)} className='btn  w-full mt-1 md:mt-2 h-4 sm:h-4 md:h-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Add</button>
                    </div>
                    </div>
                  )
                }



              </div>
              {/* card section end */}
            </div>
          </div>
          <div className='hidden md:block w-full md:w-[40%] lg:w-[40%] md:relative lg:mt-5'>
            <div className='md:sticky lg:sticky md:top-20 lg:top-24'>
              {/* table section start */}
              <Table cardTable={cardTable}  setCardTable={setCardTable}></Table>
              {/* table section end */}
              {/* form section start */}
              <Form setCardTable={setCardTable} className="md:absolute lg:absolute right-0 left-0 md:bottom-0 lg:bottom-0 rounded-md"></Form>
              {/* form section end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;