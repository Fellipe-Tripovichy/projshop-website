"use client"
import React, { useState } from 'react';
import variables from '../../../../variables';

interface Props {
    title: string,
    icon: string,
    placeholder: string,
    unitMeasure: string,
}

function TextFieldNumber({title, icon, placeholder, unitMeasure}: Props) {
  
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='w-full flex space-x-2 border rounded-sm p-2 border-gray-light'>
      <div>
        <img alt='' src={`icons/${icon}`} />
      </div>
      <div className='w-full'>
        <div style={{fontWeight: variables.regular, fontSize: variables.body_1, color: variables.gray_dark}}>
          {title}
        </div>
        <div className='w-full'>
          <form className='w-full flex flex-row items-center'>
            <div className='w-10 md:w-16 place-self-center border-b-2 p-x-8'>
              <input className='pl-2 md:pl-4 bg-white rounded w-full py-2 text-body-2 leading-5 active:text-gray-dark focus:outline-none' placeholder={placeholder} type="text" onChange={handleInputChange} style={{ color: inputValue ? variables.gray_x_dark : variables.gray_medium, fontSize: inputValue ? variables.body_1 : variables.body_2, fontWeight: inputValue ? variables.regular : variables.regular}}/>   
            </div>
            <div className='text-gray_medium text-body_2'>
              {unitMeasure}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TextFieldNumber