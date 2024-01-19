"use client"
import React from 'react'
import Tag from '../global/Tag'
import IconAndText from '../global/IconAndText'
import Button from '../global/Button'
import Carousel from './ImageCarousel'

interface DescriptionInfo{
    number: string,
    metricUnit: string,
    iconImg: string
}

interface Props{
    tagList: Array<{ label: string }>,
    title: string,
    descriptionList: DescriptionInfo[],
    haveButton?: boolean,
    imageList: Array<string>,
}

const images = [
    {element: '/produto1/image-1.png'}, 
    {element:'/produto1/image-2.png'},
    {element: '/produto1/image-3.png'}, 
]

function SmallProductCard({tagList, title, descriptionList, haveButton, imageList}:Props) {
  return (
    <div className='w-full min-w-fit'>
        <div className='w-full'>
            <Carousel slides={imageList}/>
        </div>
        <div className="bg-gray_x_light p-4 space-y-4">
            <div className='text-mobile_h4 md:text-desktop_h4 text-brand_xx_dark font-semibold'>
                {title}
            </div>
            <div className='flex flex-wrap gap-x-4 justify-start'>
                        {descriptionList.map((item, idx) => {
                            return <IconAndText key={idx} number={item.number} metricUnit={item.metricUnit} iconImg={item.iconImg} isLeft/>
                        })}
            </div>
        </div>
    </div>
  )
}

export default SmallProductCard