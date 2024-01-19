'use client'
import React from 'react'

interface Props {
    title: string,
    haveIcon?: boolean,
    iconImg?: string,
    isLeft?: boolean,
}

function Tag({title, haveIcon = false, iconImg, isLeft = false}: Props) {
  return (
    <div className={`flex bg-brand_medium py-1 px-2 rounded-[2px] items-center ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`text-body_2 text-gray_white font-bold ${haveIcon ? (isLeft ? 'pl-2' : 'pr-2') : 'p-0'}`}>
            {title}
        </div>
        <div className={`${haveIcon ? 'block' : 'hidden'} w-4 color-gray_white`}>
            <img alt='' src={`icons/${iconImg}`} />
        </div>
    </div>
  )
}

export default Tag