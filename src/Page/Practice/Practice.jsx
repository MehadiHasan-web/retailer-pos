import { useEffect, useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TabCard from "../Dashboard/Home/Home/TabCard";
import bottol from '../../../public/bottol.png'
import PracticeCard from "./PracticeCard";

const Practice = () => {

  // const [tabIndex, setTabIndex] = useState(0);

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch('/public/medicien.json')
  //     .then(response => response.json())
  //     .then(data => setProducts(data))
  //     .catch(error => console.error('Error fetching products:', error));
  // }, []);

  // const medicine = products.filter(data => data.category === "medicine")
  // const eyeDropper = products.filter(data => data.category === "eyeDropper")
  // const bottle = products.filter(data => data.category === "bottle")
  // const injection = products.filter(data => data.category === "injection")

  const [tabIndex, setTabIndex] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/public/medicien.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  // Function to limit the number of items in a category
  const limitItems = (items, limit) => items.slice(0, limit);



  return (
    <div>
      {/* <div className='my-5'>
            <ul className='flex justify-between items-center'>
              <li className='text-2xl font-semibold'>Medicines</li>
              <li className='text-lg font-bold text-green-500 border-b-green-500 border-b-2'>See all</li>
            </ul>
            <div className=' mt-5'>
              <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex gap-5 items-center">
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-white text-black font-bold py-2 rounded-full">All</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-white text-black font-bold py-2 rounded-full">medicine</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-white text-black font-bold py-2 rounded-full">eyeDropper</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-white text-black font-bold py-2 rounded-full">bottle</Tab>
                  <Tab style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }} className="bg-white text-black font-bold py-2 rounded-full">injection</Tab>
                </TabList>
                <TabPanel className="mt-5">
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  {
                    products.map((data,index) => <PracticeCard key={index} data={data}></PracticeCard>)
                  }
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-2'>
                  {
                    medicine.map((data,index) => <PracticeCard key={index} data={data}></PracticeCard>)
                  }
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-2'>
                  {
                    eyeDropper.map((data,index) => <PracticeCard key={index} data={data}></PracticeCard>)
                  }
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-2'>
                  {
                    bottle.map((data,index) => <PracticeCard key={index} data={data}></PracticeCard>)
                  }
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-2'>
                  {
                    bottle.map((data,index) => <PracticeCard key={index} data={data}></PracticeCard>)
                  }
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-2'>
                  {
                    injection.map((data,index) => <PracticeCard key={index} data={data}></PracticeCard>)
                  }
                  </div>
                </TabPanel>
              </Tabs>

            </div>
      </div> */}
      <div className='my-5'>
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
                  {limitItems(categoryProducts, 5).map((data, index) => (
                    <PracticeCard key={index} data={data}></PracticeCard>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Practice;