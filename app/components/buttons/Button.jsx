'use client';
import React from 'react';
import { Plus, ArrowRight } from '@phosphor-icons/react';


export default function Button({
  variant = 'primary',
  size = 'm',
  text = 'استمر في التعلم',
  withIcon = true,
  iconSrc = '',
  iconWidth = 24,
  iconHeight = 24,
  iconAlt = 'icon',
  icon,
  iconBgRadius = 'rounded-lg',
  onClick,
  className = '',
  ...props
}) {
  // Size classes - fully responsive with flexible height
  const sizeClasses = {
    s: 'min-h-8 text-sm font-medium py-1.5 px-4 gap-2 sm:min-h-9 sm:text-base sm:py-2 sm:px-6',
    m: 'min-h-9 text-sm font-semibold py-1.5 px-4 gap-2.5 sm:min-h-10 sm:text-base sm:py-2 sm:px-6',
    lg: 'min-h-10 text-sm font-600 py-2 px-5 gap-3 sm:min-h-12 sm:text-base sm:py-3 sm:px-6',
  };
 
  // Icon size based on button size
  const iconSize = {
    s: 16,
    m: 18,
    lg: 20,
  };
 
  // Icon container size based on button size
  const iconContainerSize = {
    s: 'w-6 h-6',
    m: 'w-6 h-6',
    lg: 'w-6 h-6',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-[#01DD86] hover:bg-[#01B870] text-white',
    outline: 'border border-[#01DD86] text-[#01DD86] hover:bg-[#f0fdf8]',
    ghost: 'text-[#01DD86] hover:bg-[#f0fdf8]',
  };
  
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex flex-row-reverse justify-center items-center gap-2 rounded-full
        transition-colors duration-200
        font-[Noto_Kufi_Arabic]
        whitespace-nowrap
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
      {...props}
    >
      <span className="flex-shrink-0">{text}</span>
      {withIcon && (
        <>
          {icon ? (
            <span className="flex items-center flex-shrink-0">
              {icon}
            </span>
          ) : variant === 'ghost' ? (
            <span className="flex items-center flex-shrink-0">
              <ArrowRight
                size={iconSize[size]}
                weight="bold"
                color={variant === 'primary' ? '#FFFFFF' : '#white'}
              />
            </span>
          ) : (
            <span
              className={`
                ${iconContainerSize[size]} ${iconBgRadius} flex items-center justify-center flex-shrink-0
                ${variant === 'primary' ? 'bg-white' : 'bg-[#01DD86]'}
              `}
            >
              <Plus
                size={iconSize[size]}
                weight="bold"
                color={variant === 'primary' ? '#01DD86' : '#FFFFFF'}
              />
            </span>
          )}
        </>
      )}
    </button>
  );
}