import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

interface Props{
    slides: Array<string>,
}


export default function ImageCarousel({slides} : Props) {
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
        {slides.map((s, idx) => {
          return <img key={idx} src={s}/>;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-4 text-3xl">
        <button className="bg-brand_medium rounded-full" onClick={previousSlide}>
            <img src='icons/chevron-left-white.svg'/>
        </button>
        <button className="bg-brand_medium rounded-full" onClick={nextSlide}>
            <img src='icons/chevron-right-white.svg'/>
        </button>
      </div>
    </div>
  );
}