import { useState, useEffect } from 'react';
import blankImg from '../../../../../public/blankImg.jpg'
import Table from '../Table/Table';
import Form from '../Form/Form';
import Title from './../../../../Title/Title';
import Search from '../Search/Search';
import axios from "axios";
import { useContext } from 'react';
import { AuthContext } from './../../../../Providers/AuthProvider';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const HomeExtra = () => {

  const {baseURL} = useContext(AuthContext)

  const [card, setCard] = useState([])
  const initialCardTable = JSON.parse(localStorage.getItem('cardTable')) || [];
  const [cardTable, setCardTable] = useState(initialCardTable);
  const [filteredCard, setFilteredCard] = useState([]);

  //icon
  const [open, setOpen]  = useState(false);

  


  useEffect(() => {
    localStorage.setItem('cardTable', JSON.stringify(cardTable));
  }, [cardTable]);

  
  // use useEffect hook
  useEffect(() => {
    // axios.get("http://inv.xcode.com.bd/api/v1/inventory/itemlist/")
    axios.get(`${baseURL}/catagorylist/`)
      .then((res) => res.data)
      .then((data) => setCard(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [baseURL]);



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
        name: data.name,
        quantity: 1
      };
      setCardTable([...cardTable, newData]);
    }
  }


  useEffect(()=>{
  },[cardTable])


  return (
    <div>
      {/* all data */}
      {/* title section start */}
      <Title pageName={"Home"}></Title>
      {/* title section end */}
      <div >
        {/* section start */}
        <div className='container mx-auto'>
        <div className='md:flex justify-center lg:gap-5 w-[100%]'>
          <div className='w-[100%] md:w-[60%] lg:w-[60%]  '>
            <div className='mt-5 mb-5 px-6 sm:px-5 md:px-4 lg:px-2 xl:px-2 2xl:px-0'>
              {/* search bar  */}
              <Search card={card} filteredCard={filteredCard} setFilteredCard={setFilteredCard} setCard={setCard} cardTable={cardTable} setCardTable={setCardTable} initialCardTable={initialCardTable} ></Search>
              {/* search bar end  */}

              {/* card section start */}
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 md:gap-1 lg:gap-2 mt-5'>
                {
                  (filteredCard.length > 0 ? filteredCard : card).map((data, index) =>
                    <div key={index} className=' p-2 flex flex-col justify-between rounded shadow-lg bg-slate-50'>
                      {
                        data.image ? <img className='w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded' src={data.image}></img> : <img src={blankImg} className='w-full h-20 sm:h-24 md:h-20 lg:h-28 rounded'></img>
                      }
                      <div>
                        <h2 className='text-sm sm:text-base md:text-sm lg:text-sm font-semibold mx-auto my-1 md:my-1 lg:my-2'>{data.name ? data.name : data.name}</h2>
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
              <Table cardTable={cardTable} setCardTable={setCardTable} ></Table>
              {/* table section end */}
              {/* form section start */}
              <Form card={cardTable} setCard={setCardTable} className="md:absolute lg:absolute right-0 left-0 md:bottom-0 lg:bottom-0 rounded-md"></Form>
              {/* form section end */}
            </div>
          </div>
        </div>
      </div>
        {/* section end */}
        
        <div className={`block md:hidden case-in duration-500 w-full h-full fixed top-16 pt-10 bottom-0 z-30 bg-slate-200 ${open ? 'right-2' : '-right-[800px]'}`}>
        <div className='fixed top-64 -right-6 z-10'>
                  {
                        open && open ? (<span className='hidden' onClick={() => {setOpen(false)}}><FaChevronRight className="h-14 w-14 bg-slate-300 p-2 rounded-full"></FaChevronRight></span>) : (<span  onClick={() => {setOpen(true)}}><FaChevronLeft className="h-12 w-12 bg-slate-300 p-2 rounded-full"></FaChevronLeft></span>)
                        
                        
                  }
              </div>
            <div className='pl-12'>
              <div className=' top-20 '>
                {/* table section start */}
                <Table cardTable={cardTable} setCardTable={setCardTable} ></Table>
                {/* table section end */}
                <div className='absolute top-44 -left-4 z-10'>
                  {
                        open && open ? (<span  onClick={() => {setOpen(false)}}><FaChevronRight className="h-12 w-12 bg-slate-300 p-2 rounded-full"></FaChevronRight></span>) : (<span className='hidden' onClick={() => {setOpen(true)}}><FaChevronLeft className="h-12 w-12 bg-white p-2 rounded-full"></FaChevronLeft></span>)
                        
                        
                  }
              </div>
                {/* form section start */}
                <Form card={cardTable} setCard={setCardTable} className="md:absolute lg:absolute top-10 right-0 left-0 md:bottom-0 lg:bottom-0 rounded-md"></Form>
                {/* form section end */}
              </div>
            </div>
        </div>

        {/* ldjoiopdio */}
        {/* <div className='my-5'>
        <ul className='flex justify-between items-center'>
          <li className='text-2xl font-semibold'>Medicines</li>
          <li className='text-lg font-bold text-green-500 border-b-green-500 border-b-2'>See all</li>
        </ul>
        <div className='mt-5'>
          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className="flex gap-5 items-center">
              {Object.keys(groupedProducts).map((category, index) => (
                <Tab key={index} style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-white text-black font-bold py-2 rounded-full">{category}</Tab>
              ))}
            </TabList>
            {Object.values(groupedProducts).map((categoryProducts, index) => (
              <TabPanel key={index} className="mt-5">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  {limitItems(categoryProducts, 5).map((product, index) => (
                    <div
                        className=" bg-base-100 shadow-xl p-3 rounded-md"
                        key={product.id}
                      >
                        <div className="flex justify-between items-center">
                          <div className="w-[35%]">
                            <figure>
                              <img
                                className="w-60 h-40"
                                src={bottol}
                                alt="Movie"
                              />
                            </figure>
                          </div>
                          <div className="w-[65%]">
                            <h2 className="text-xl font-bold">
                              {product.name}
                            </h2>
                            <p className="text-xs">{product.description}</p>
                            <ul className="flex items-center gap-32 mt-2">
                              <li>
                                <p className="text-sm">Netto</p>
                                <p className="text-base font-bold">
                                  {product.net_weight}
                                </p>
                              </li>
                              <li>
                                <p className="text-sm">Stock</p>
                                <p className="text-base font-bold">
                                  {product.stock} Available
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className=" flex items-center justify-center">
                            <sup className="text-green-600 font-bold">$</sup>
                            <p className="text-center">
                              <span className="text-2xl font-bold">
                                {product.price}
                              </span>
                              <span className="text-gray-500">/Bottle</span>
                            </p>
                          </div>
                          <div className="w-[65%] ">
                            <ul className="flex justify-between items-center bg-slate-200 py-1 px-3 rounded-2xl">
                              <li>
                                <button
                                  onClick={() => decreaseQuantity(product.id)}
                                >
                                  <FaCircleMinus className="text-white text-xl"></FaCircleMinus>
                                </button>
                              </li>
                              <li>{product.quantity}</li>
                              <li>
                                <button
                                  onClick={() => updateQuantity(product.id)}
                                  className="m-0 p-0"
                                >
                                  <FaCirclePlus className="text-green-600 text-xl"></FaCirclePlus>
                                </button>
                              </li>
                            </ul>
                          </div>
                          <button
                            onClick={() => cardData(product)}
                            className="btn bg-green-500 py-[2px] px-3"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
          </div> */}
        {/* ldjoiopdio */}

      </div>
      {/* all data */}
    </div>
  );
};

export default HomeExtra;