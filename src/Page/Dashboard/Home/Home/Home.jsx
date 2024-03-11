// import { useEffect } from 'react';
import './Home.css'
import { MdOutlineWatchLater } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import logo from '../../../../../public/logo.png'
import { FaEdit, FaLongArrowAltRight, FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCard from './TabCard';
import { GrSubtractCircle } from "react-icons/gr";




const Home = () => {


  const [tabIndex, setTabIndex] = useState(0);

  


  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto bg-slate-100'>
        <div className='lg:col-span-2 px-5 '>
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
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-green-600 text-white font-bold py-2 rounded-lg">All</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-green-600 text-white font-bold py-2 rounded-lg">Tablet</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-green-600 text-white font-bold py-2 rounded-lg">Capsule</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-green-600 text-white font-bold py-2 rounded-lg">Suppository</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-green-600 text-white font-bold py-2 rounded-lg">Eyedrops</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-green-600 text-white font-bold py-2 rounded-lg">Bottle</Tab>
                </TabList>
                <TabPanel className="mt-5">
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-2'>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-2'>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-2'>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-2'>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-2'>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                    <TabCard></TabCard>
                  </div>
                </TabPanel>
              </Tabs>

            </div>
          </div>
          {/* medicines section end */}
        </div>
        <div className="lg:col-span-1 p-4 bg-white">
          <div className="flex justify-between ">
            <h3 className="text-xl text-black font-medium">Waitlist</h3>
            <p className="text-xl font-bold text-black">
              A1<span className="text-slate-100">#12910</span>
            </p>
          </div>
          <p className="text-bold font-medium my-2">
            Detail Prescription <span className="text-green-500">3</span>
          </p>
          <div className="bg-slate-100 rounded-lg p-4">
            <ul>
              <li className="text-sm text-slate-400 flex justify-between">
                <h5>Name</h5> <span>Amount</span>
              </li>
              <li className="font-bold flex justify-between mt-2">
                <h5>HI--text</h5> <span className="text-slate-500">x1</span>
              </li>
              <li className="font-bold flex justify-between mt-2">
                <h5>HI--text</h5> <span className="text-slate-500">x1</span>
              </li>
              <li className="font-bold flex justify-between mt-2">
                <h5>HI--text</h5> <span className="text-slate-500">x1</span>
              </li>
              <li className="font-bold flex justify-between mt-2">
                <h5>HI--text</h5> <span className="text-slate-500">x1</span>
              </li>
            </ul>
          </div>
          <div className="border-b-2 my-5"></div>
          <div>
            <div className="flex gap-5 mt-5">
              <div className="w-1/4 p-2 bg-slate-100 rounded-lg">
                <img
                  src="https://media.istockphoto.com/id/1304186549/vector/automatic-spring-ballpoint-pen-in-black-case-vector-illustration.jpg?s=612x612&w=0&k=20&c=R_yPawneqKX8J-NeiKmNXuYx36tCoPSCFEHx0Bd4dEg="
                  alt=""
                  className="w-3/4 mx-auto "
                />
              </div>
              <div className="w-3/4  ">
                <p className="flex justify-between items-center">
                  <h4 className="font-bold">Pen-500</h4>{" "}
                  <FaEdit className="inline-block border-2 text-3xl p-1 rounded-lg" />
                </p>
                <p className="flex justify-between items-center mt-4">
                  <h4 className="font-bold">
                    <span className="text-green-500">$</span> 2.10
                  </h4>{" "}
                  <span className="bg-slate-100 rounded-full flex px-1 gap-2 items-center"><GrSubtractCircle className="text-red-500 cursor-pointer"/> 3 <FaPlusCircle className="text-green-500 cursor-pointer"/></span>
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <div className="w-1/4 p-2 bg-slate-100 rounded-lg">
                <img
                  src="https://media.istockphoto.com/id/1304186549/vector/automatic-spring-ballpoint-pen-in-black-case-vector-illustration.jpg?s=612x612&w=0&k=20&c=R_yPawneqKX8J-NeiKmNXuYx36tCoPSCFEHx0Bd4dEg="
                  alt=""
                  className="w-3/4 mx-auto "
                />
              </div>
              <div className="w-3/4  ">
                <p className="flex justify-between items-center">
                  <h4 className="font-bold">Pen-500</h4>{" "}
                  <FaEdit className="inline-block border-2 text-3xl p-1 rounded-lg" />
                </p>
                <p className="flex justify-between items-center mt-4">
                  <h4 className="font-bold">
                    <span className="text-green-500">$</span> 2.10
                  </h4>{" "}
                  <span className="bg-slate-100 rounded-full flex px-1 gap-2 items-center"><GrSubtractCircle className="text-red-500 cursor-pointer"/> 3 <FaPlusCircle className="text-green-500 cursor-pointer"/></span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 ">
            <h2 className="text-2xl font-semibold mt-3">Summary</h2>
            <p className="flex justify-between mt-3 text-sm"><span>Subtotal</span> <span className="font-bold">$ 12.00</span></p>
            <p className="flex justify-between mt-3 text-sm"><span>Discount</span> <span className="font-bold">$ 2.00</span></p>
            <p className="border-b-2 border-dashed mt-2"></p>
            <p className="flex justify-between mt-3 font-bold"><span >Total</span> <span>$ 10.00</span></p>
          </div>
          <div className="mt-5">
            <button className="btn w-full bg-green-500 text-white rounded-xl">Print Bill</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
