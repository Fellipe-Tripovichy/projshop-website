"use client"
import React from 'react'
import Tag from '../global/Tag'
import IconAndText from '../global/IconAndText'
import Button from '../global/Button'

interface DescriptionInfo{
    number: string,
    metricUnit: string,
    iconImg: string
}

interface Props{
    tagList: Array<{ label: string }>,
    title: string,
    descriptionList: DescriptionInfo[],
    imageList: Array<string>,
}

function BigProductCard({tagList, title, descriptionList, imageList}: Props) {
    const handleButtonClick = () => {
        console.log('Button clicked!');
      };
  
    return (
    <div className='w-full min-w-fit flex flex-row space-x-2 bg-gray_x_light xl:h-[25rem] lg:h-[22rem]'>
        <div className='lg:w-1/2 md:w-1/3 overflow-y-hidden space-y-2'>
            <img className='' src={`/${imageList[0]}`} />
            <div className='hidden md:block lg:hidden'>
                <img className='' src={`/${imageList[2]}`} />
            </div>
        </div>
        <div className='flex flex-row lg:w-1/2 md:w-2/3 overflow-y-hidden'>
            <div className='space-y-2 w-1/2'>
                <img className='' src={`/${imageList[1]}`} />
                <img className='' src={`/${imageList[2]}`} />
            </div>
            <div className='xl:p-8 md:p-4 w-1/2 flex flex-col justify-between'>
                <div className='space-y-4'>
                    <div className='space-y-4'>
                        <div className='flex flex-row space-x-1'>
                            {tagList.map((item, idx) => {
                                return <Tag key={idx} title={item.label}/>
                            })}
                        </div>
                        <div className='text-desktop_h4 text-brand_xx_dark font-semibold'>
                            {title}
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-x-4 justify-start'>
                        {descriptionList.map((item, idx) => {
                            return <IconAndText key={idx} number={item.number} metricUnit={item.metricUnit} iconImg={item.iconImg} isLeft/>
                        })}
                    </div>
                </div>
                <div>
                    <Button label="Ver projetos" primary onClick={handleButtonClick}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigProductCard