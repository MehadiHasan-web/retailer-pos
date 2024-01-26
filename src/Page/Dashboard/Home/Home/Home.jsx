// import { useEffect } from 'react';
import './Home.css'
import { useState, useEffect  } from 'react';
import blankImg from '../../../../../public/blankImg.jpg'
import Table from '../Table/Table';
import Form from '../Form/Form';
import Title from './../../../../Title/Title';
import Search from '../Search/Search';
import axios from "axios";


const Home = () => {

  const [card, setCard] = useState([])
  const initialCardTable = JSON.parse(localStorage.getItem('cardTable')) || [];
  const [cardTable, setCardTable] = useState(initialCardTable);
  const [filteredCard, setFilteredCard] = useState([]);


  useEffect(() => {
    localStorage.setItem('cardTable', JSON.stringify(cardTable));
  }, [cardTable]);

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then((res) => res.json())
  //     .then((data) => setCard((data.products)))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);


  // import axios


// use useEffect hook
useEffect(() => {
  axios.get("https://dummyjson.com/products")
    .then((res) => res.data)    
    .then((data) => setCard(data.products))
    .catch((error) => console.error("Error fetching data:", error));
}, []);


  // useEffect(() => {
  //   fetch('card.json')
  //   .then((res) => res.json())
  //   .then((data) => setCard(data))
  // },[])



// add  to card or increment functionality
  const cardData = (data) => { 
    const cardTableItem = cardTable.find(value => value.id === data.id);
    if (cardTableItem) {
      const updatedCardTable = cardTable.map(item =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCardTable(updatedCardTable);
    } else {
      const newData = {
        id: data.id,
        name: data.title, //if our have name than use: data.name 
        quantity: 1
      };  
      setCardTable([...cardTable, newData]);
      console.log(cardTable);
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
            <Search card={card} filteredCard={filteredCard} setFilteredCard={setFilteredCard} setCard={setCard} cardTable={cardTable} setCardTable={setCardTable} initialCardTable={initialCardTable} ></Search>
            {/* search bar end  */}
            
              {/* search section end */}
              {/* card section start */}
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 md:gap-1 lg:gap-2 mt-5'>
                {
                  (filteredCard.length > 0 ? filteredCard : card).map((data, index) =>  
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
          <div className='hidden md:block w-full md:w-[40%] lg:w-[40%] md:relative lg:mt-3'>
            <div className='md:sticky lg:sticky md:top-20 lg:top-[14%] '>
              {/* table section start */}
              <Table cardTable={cardTable}  setCardTable={setCardTable} ></Table>
              {/* table section end */}
              {/* form section start */}
              <Form cardTable={cardTable} setCardTable={setCardTable} className="md:absolute lg:absolute right-0 left-0 md:bottom-0 lg:bottom-0 rounded-md"></Form>
              {/* form section end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;