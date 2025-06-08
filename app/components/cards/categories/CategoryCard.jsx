'use client';
import React, { useState } from 'react';
import Image from 'next/image';
/**
 * CategoryCard component for displaying category information
 * @param {Object} props - Component props
 * @param {string} props.title - Category title
 * @param {string|Object} props.imageSrc - Category image source or Image component
 * @param {function} props.onClick - Click handler for the category card
 * @param {string} props.className - Additional classes
 */
export default function CategoryCard({
  title = 'دورات البرمجة الأساسية',
  imageSrc,
  onClick,
  className = '',
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Paths for normal and hover states
  const normalPath = "M16 115C7.43959 115 0.5 108.06 0.5 99.5L0.5 15.5C0.500001 6.93959 7.43959 0 16 0L70.1768 0C60.4793 18.8206 59.9988 34.9581 65.3115 52.6865C70.6252 70.4183 81.7463 89.7725 95.167 115L16 115Z";
  const hoverPath = "M16 115C7.43959 115 0.5 108.06 0.5 99.5L0.5 15.5C0.500001 6.93959 7.43959 0 16 0L100 0C85 18.8206 84.5 34.9581 89.8 52.6865C95.1 70.4183 106.2 89.7725 125 115L16 115Z";  
  // Handler for card click
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div
      className={`
        relative w-full max-w-[448px] h-[115px] bg-white hover:bg-[#e9fff7] border border-[#CECECE] rounded-2xl
        overflow-hidden cursor-pointer transition-all duration-300
         hover:border-[#01DD86]
        ${className}
      `}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Green SVG section */}
      <div className="absolute left-0 top-0 bottom-0 w-32">
        <svg 
          width="128" 
          height="115" 
          viewBox="0 0 128 115" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d={isHovered ? hoverPath : normalPath}
            fill="#01DD86" 
            style={{
              transition: 'd 0.3s ease-in-out'
            }}
          />
        </svg>
      </div>
     
      {/* Icon/Image container */}
      <div className={`absolute top-1/2 transform -translate-y-1/2 w-20  h-20 z-10 transition-all duration-300 left-14 ${isHovered ? 'scale-125' : 'scale-100'}`}>        {typeof imageSrc === 'string' ? (
          <Image
            src={imageSrc}
            alt={title}
            width={80}
            height={80}
            className="object-contain"
          />
        ) : (
          imageSrc
        )}
      </div>
     
      {/* Title */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-right">
        <h3 className="font-[Noto_Kufi_Arabic] font-semibold text-base leading-6 text-[#222222]">
          {title}
        </h3>
      </div>
    </div>
  );
}