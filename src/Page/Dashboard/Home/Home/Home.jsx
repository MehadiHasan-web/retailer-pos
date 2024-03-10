// import { useEffect } from 'react';
import './Home.css'
import { MdOutlineWatchLater } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import logo from '../../../../../public/logo.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




const Home = () => {


  const [tabIndex, setTabIndex] = useState(0);

  


  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className='lg:col-span-2 px-5'>
          {/* subscription section start */}
          <div className='flex justify-between items-center h-32 titleCon p-5 rounded-2xl opacity-90'>
            <div>
              <h3 className='text-2xl font-bold text-slate-300 flex items-center gap-3'>Your subscription is almost expired <span className='text-base font-normal flex items-center gap-1'><MdOutlineWatchLater></MdOutlineWatchLater> 7 days left</span></h3>
              <p className='text-gray-400'>Upgrade your plane to superior to enjoy various additional benefits</p>
            </div>
            <div>
              <button className="btn btn-success font-bold text-lg text-white">Upgrade Plane</button>
            </div>
          </div>
          {/* subscription section end */}
          {/* waiting list section start */}
          <div className='my-5'>
            <ul className='flex justify-between items-center'>
              <li className='text-2xl font-semibold'>Waiting List</li>
              <li className='text-lg font-bold text-green-500 border-b-green-500 border-b-2'>See all</li>
            </ul>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5'>
              {/* item 1 */}
              <div className="card card-side bg-base-100 shadow-xl">
                <figure className='p-3'><img src={logo} alt="Movie" className='rounded-2xl w-20 h-20'/></figure>
                <div className="card-body p-2">
                  <ul className='bg-black p-1 rounded-lg flex justify-between items-center'>
                    <li><GoDotFill className='text-green-500 text-sm'></GoDotFill></li>
                    <li><span className='text-white text-sm'>#1234</span></li>
                  </ul>
                  <ul>
                    <li className='flex gap-5 items-center'>
                      <span><IoPerson className='text-sm'></IoPerson></span>
                      <span className='text-lg font-semibold'>Yuda Rahmat</span>
                    </li>
                    <li className='flex gap-5 items-center'>
                      <span><FaLongArrowAltRight className='text-sm'></FaLongArrowAltRight></span>
                      <span className='text-base text-gray-500'>3 Items</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* item 1 */}
              {/* item 2 */}
              <div className="card card-side bg-base-100 shadow-xl">
                <figure className='p-3'><img src={logo} alt="Movie" className='rounded-2xl w-20 h-20'/></figure>
                <div className="card-body p-2">
                  <ul className='bg-black p-1 rounded-lg flex justify-between items-center'>
                    <li><GoDotFill className='text-gray-500 text-sm'></GoDotFill></li>
                    <li><span className='text-white text-sm'>#1234</span></li>
                  </ul>
                  <ul>
                    <li className='flex gap-5 items-center'>
                      <span><IoPerson className='text-sm'></IoPerson></span>
                      <span className='text-lg font-semibold'>Angel Girl</span>
                    </li>
                    <li className='flex gap-5 items-center'>
                      <span><FaLongArrowAltRight className='text-sm'></FaLongArrowAltRight></span>
                      <span className='text-base text-gray-500'>3 Items</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* item 2 */}
              {/* item 3 */}
              <div className="card card-side bg-base-100 shadow-xl">
                <figure className='p-3'><img src={logo} alt="Movie" className='rounded-2xl w-20 h-20'/></figure>
                <div className="card-body p-2">
                  <ul className='bg-black p-1 rounded-lg flex justify-between items-center'>
                    <li><GoDotFill className='text-gray-500 text-sm'></GoDotFill></li>
                    <li><span className='text-white text-sm'>#1234</span></li>
                  </ul>
                  <ul>
                    <li className='flex gap-5 items-center'>
                      <span><IoPerson className='text-sm'></IoPerson></span>
                      <span className='text-lg font-semibold'>Prince Rani</span>
                    </li>
                    <li className='flex gap-5 items-center'>
                      <span><FaLongArrowAltRight className='text-sm'></FaLongArrowAltRight></span>
                      <span className='text-base text-gray-500'>3 Items</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* item 3 */}
            </div>
          </div>
          {/* waiting list section end */}
          {/* medicines section start */}
          <div className='my-5'>
            <ul className='flex justify-between items-center'>
              <li className='text-2xl font-semibold'>Medicines</li>
              <li className='text-lg font-bold text-green-500 border-b-green-500 border-b-2'>See all</li>
            </ul>
            <div className=' mt-5'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex gap-5 items-center">
                  
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-green-600 text-white font-bold py-2">Title 1</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-green-600 text-white font-bold py-2">Title 2</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-green-600 text-white font-bold py-2">Title 1</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-green-600 text-white font-bold py-2">Title 2</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-green-600 text-white font-bold py-2">Title 1</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-green-600 text-white font-bold py-2 rounded-lg">Title 2</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
              </Tabs>

            </div>
          </div>
          {/* medicines section end */}
        </div>
        <div className='lg:col-span-1'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatem delectus rerum iusto dolore animi autem voluptatibus labore possimus! Quis!</p>
        </div>
      </div>
    </>
  );
};

export default Home;