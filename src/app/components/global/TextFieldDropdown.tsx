"use client"
import React from 'react'
import Select from 'react-select';
import { useState } from 'react';
import variables from '../../../../variables';

interface Props {
    title: string,
    icon: string,
    placeholder: string
}

function TextFieldDropdown({title, icon, placeholder}: Props) {

  const options = [
    { value: 'moderno', label: 'Moderno' },
    { value: 'rústico', label: 'Rústico' },
    { value: 'minimalista', label: 'Minimalista' }
  ]

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
            <Select 
              isMulti
              isSearchable
              options={options} 
              placeholder={placeholder}
              noOptionsMessage={() => "Categoria não encontrada"}
              styles={{
                placeholder: (baseStyles, state) => ({
                  ...baseStyles,
                  color: variables.gray_medium,
                  fontSize: variables.body_2,
                  lineHeight: '20px'
                }),
                control: (state) => ({
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  border: '0px',
                  padding: '0px',
                  marginLeft: '-8px'
                }),
                multiValue: (baseStyles) => ({
                  ...baseStyles,
                  backgroundColor: variables.brand_x_light,
                  flexBasis: 'auto',
                }),
                multiValueLabel: () => ({
                  color: variables.gray_x_dark,
                  fontWeight: variables.semibold,
                  paddingLeft: '8px',
                  paddingRight: '8px',
                  paddingTop: '2px',
                  paddingBottom: '2px',
                }),
                multiValueRemove: (baseStyles) => ({
                  ...baseStyles,
                  ":hover": {
                    backgroundColor: variables.brand_light
                  },
                }),
                valueContainer: (baseStyles) => ({
                  ...baseStyles,
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  flexWrap: 'nowrap',
                  flexBasis: 'auto',
                }),
              }}
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default TextFieldDropdown