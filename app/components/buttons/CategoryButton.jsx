'use client';

import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';


export default function CategoryButton({
  text = 'تصفح جميع الدورات',
  withIcon = true,
  iconSrc = '',
  iconWidth = 24,
  iconHeight = 24,
  iconAlt = 'icon',
  icon,
  onClick,
  className = '',
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`
        box-border flex flex-row justify-center items-center 
        py-1.5 px-3 gap-2 text-sm
        sm:py-2 sm:px-4 sm:text-base
        w-auto h-8 sm:h-10 border border-[#CECECE] rounded-xl sm:rounded-2xl
        transition-colors duration-200
        font-[Noto_Kufi_Arabic]
        bg-white hover:bg-[#E6E6E6]
        ${className}
      `}
      {...props}
    >
      <span className="text-center">{text}</span>
      {withIcon && (
        <span className="flex items-center">
          {icon || (
            <ArrowRight size={20} weight="bold" />
          )}
        </span>
      )}
    </button>
  );
}
