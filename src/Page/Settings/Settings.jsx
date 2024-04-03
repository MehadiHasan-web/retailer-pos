import React from 'react';
import { LuArrowLeft } from "react-icons/lu";

const Settings = () => {
  return (
    <div>
      <div className='container mx-auto p-4 sm:p-5 md:p-8 lg:p-10 '>
        <div className='space-y-5'>
          <LuArrowLeft className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'></LuArrowLeft>
          <h4 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold'>Settings</h4>
          <div className='shadow-xl'>
            <div className="collapse collapse-arrow bg-white rounded-b-none">
              <input type="radio" name="my-accordion-2" defaultChecked /> 
              <div className="collapse-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
                Discount Set
              </div>
              <div className="collapse-content"> 
                <p className='text-base sm:text-lg md:text-xl'>Item1</p>
                <p className='text-base sm:text-lg md:text-xl'>Item1</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white rounded-none">
              <input type="radio" name="my-accordion-2" defaultChecked /> 
              <div className="collapse-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
              Profile Info Change
              </div>
              <div className="collapse-content"> 
                <p className='text-base sm:text-lg md:text-xl'>Item1</p>
                <p className='text-base sm:text-lg md:text-xl'>Item1</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white rounded-none">
              <input type="radio" name="my-accordion-2" defaultChecked /> 
              <div className="collapse-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
              Password Change Option (1)
              </div>
              <div className="collapse-content"> 
                <p className='text-base sm:text-lg md:text-xl'>Item1</p>
                <p className='text-base sm:text-lg md:text-xl'>Item1</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-white rounded-t-none">
              <input type="radio" name="my-accordion-2" defaultChecked /> 
              <div className="collapse-title text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
              Tex Set
              </div>
              <div className="collapse-content"> 
                <p className='text-base sm:text-lg md:text-xl'>Item1</p>
                <p className='text-base sm:text-lg md:text-xl'>Item1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;