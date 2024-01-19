'use client'
import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import BigProductCard from "../home/BigProductCard";

interface DescriptionInfo{
  number: string,
  metricUnit: string,
  iconImg: string
}

interface Project{
  tagList: Array<{ label: string }>,
  title: string,
  descriptionList: DescriptionInfo[],
  imageList: Array<string>,
}

interface Props{
  slides: Project[],
}

export default function BigCardCarousel({slides} : Props) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((item, idx) => {
          return <BigProductCard key={idx} imageList={item.imageList} tagList={item.tagList} title={item.title} descriptionList={item.descriptionList}/>;
        })}
      </div>

      <div className=" top-0 h-full w-full justify-between items-center flex text-white px-4 text-3xl">


      </div>

      <div className="bottom-0 py-4 flex justify-center items-center gap-3 w-full">
        <button className="w-4" onClick={previousSlide}>
            <img src='icons/chevron-left.svg'/>
        </button>
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full cursor-pointer transition ease-out duration-40  ${
                i == current ? "bg-brand_medium w-6 h-2" : "bg-gray_x_light w-2 h-2"
              }`}
            ></div>
          );
        })}
        <button className="w-4" onClick={nextSlide}>
          <img src='icons/chevron-right.svg'/>
        </button>
      </div>
    </div>
  );
}