"use client"
import React, { useState } from 'react';
import variables from '../../../../variables';

interface Props {
    title: string,
    icon: string,
    placeholder: string
}

function TextFieldOpen({title, icon, placeholder}: Props) {
  
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
          <form className='w-full'>
            <input className='bg-white rounded w-full py-2 text-body-2 leading-5 active:text-gray-dark focus:outline-none' placeholder={placeholder} type="text" onChange={handleInputChange} 
              style={{ color: inputValue ? variables.gray_x_dark : variables.gray_medium, fontSize: inputValue ? variables.body_1 : variables.body_2, fontWeight: inputValue ? variables.regular : variables.regular}}/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TextFieldOpen