"use client"
import React from 'react'
import TextFieldOpen from '../global/TextFieldOpen'
import TextFieldDropdown from '../global/TextFieldDropdown'
import TextFieldNumber from '../global/TextFieldNumber'
import TextFieldTwoNumber from '../global/TextFieldTwoNumber'
import Button from '../global/Button'

function FormHome() {
    
    const handleButtonClick = () => {
        console.log('Button clicked!');
      };    
    
    return (
        <div className='w-full md:max-w-md lg:max-w-lg p-4 md:p-8 space-y-4 bg-white absolute mt-16 md:mt-20 lg:mt-16'>
            <div className='text-mobile_h1 md:text-desktop_h1 text-brand_xx_dark font-bold leading-tight'>
                Encontre a casa <br/> dos seus sonhos
            </div>
            <TextFieldDropdown title="Categoria" icon="Category.svg" placeholder="Busque por categoria"/>
            <div className='w-full flex flex-row justify-between space-x-4'>
                <TextFieldNumber title="Pavimentos" icon="Floors.svg" placeholder="000" unitMeasure="andares"/>
                <TextFieldNumber title="Dormitórios" icon="Bedrooms.svg" placeholder="000" unitMeasure="quartos"/>
            </div>
            <TextFieldTwoNumber title="Dimensões" icon="Dimensions.svg" placeholder1="000" placeholder2="000" unitMeasure="m²" middleString='x' />
            <div className='space-y-2'>
                <Button label='Buscar minha casa' onClick={handleButtonClick} primary/>
                <Button label='Ver todas as casas' onClick={handleButtonClick} secondary/>
            </div>
        </div>
    )
}

export default FormHome