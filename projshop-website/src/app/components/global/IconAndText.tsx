'use client'
import React from 'react'

interface Props {
    number: string,
    metricUnit: string,
    iconImg: string,
    isLeft?: boolean,
}

function IconAndText({number, metricUnit, iconImg, isLeft = false}: Props) {
  return (
    <div className={`flex py-1 items-center ${isLeft ? 'flex-row-reverse justify-end' : 'flex-row'}`}>
        <div className={`flex flex-row items-center space-x-1.5 ${isLeft ? 'pl-2' : 'pr-2'}`}>
            <div className='text-mobile_h4 text-gray_x_dark font-bold'>
                {number}
            </div>
            <div className='text-body_2 text-gray_dark font-normal'>
                {metricUnit}
            </div>
        </div>
        <div className={`color-gray_white w-4`}>
            <img alt='' src={`icons/${iconImg}`} />
        </div>
    </div>
  )
}

export default IconAndText