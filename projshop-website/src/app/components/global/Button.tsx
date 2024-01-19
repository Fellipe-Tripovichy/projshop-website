"use client"
import React from 'react';

interface Props {
  onClick: () => void;
  label: string;
  primary?: boolean;
  cta?: boolean;
  secondary?: boolean;
  disable?: boolean;
  haveIcon?: boolean;
  isLeft?: boolean;
  iconImg?: string;
}

function Button({ onClick, label, primary, secondary, cta, disable, haveIcon, iconImg, isLeft}: Props) {
  if (primary && (secondary || cta)) {
    throw new Error("Button component can't have more than one color style (primary, secondary, cta) set to true.");
  }

  if (secondary && (primary || cta)) {
    throw new Error("Button component can't have more than one color style (primary, secondary, cta) set to true.");
  }

  let buttonClassName = '';

  if (primary) {
    buttonClassName = 'bg-brand_xx_dark text-gray_white';
  } else if (secondary) {
    buttonClassName = 'bg-transparent text-gray_dark border border-gray_light';
  } else if (cta) {
    buttonClassName = 'bg-brand_medium text-gray_white';
  }

  const handleClick = () => {
    if (!disable) {
      onClick();
    }
  };

  return (
    <div className={`flex py-2 w-full items-center rounded-[1px] justify-center ${buttonClassName} ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
      <button onClick={handleClick} className={`text-body_2 font-bold md:text-body_1 ${disable ? 'disabled' : ''} ${haveIcon ? (isLeft ? 'pl-2' : 'pr-2') : 'p-0'}`}>
        {label}
      </button>
      <div className={`${haveIcon ? 'block' : 'hidden'} w-4 color-gray_white`}>
            <img alt='' src={`icons/${iconImg}`} />
        </div>
    </div>
  );
}

export default Button;
