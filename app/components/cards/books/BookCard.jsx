'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../../buttons/Button';

/**
 * BookCard component for displaying book information
 * @param {Object} props - Component props
 * @param {string} props.title - Book title
 * @param {string} props.imageSrc - Book cover image source
 * @param {string} props.category - Book category
 * @param {function} props.onClick - Click handler for the book card button
 * @param {string} props.buttonText - Text for the call-to-action button
 * @param {string} props.buttonVariant - Button variant ('primary', 'outline', 'ghost')
 * @param {string} props.buttonSize - Button size ('s', 'm', 'lg')
 * @param {boolean} props.withIcon - Whether to show an icon in the button
 */
export default function BookCard({
  title = 'اسم الكتاب',
  imageSrc = '/placeholder-book.jpg',
  category = 'الكتب التعليمية',
  onClick,
  buttonText = 'قراءة الان',
  buttonVariant = 'primary',
  buttonSize = 'm',
  withIcon = false,
  className = '',
  ...props
}) {
  return (
    <div 
      className={`
        box-border flex flex-col items-start p-3 sm:p-3 gap-3 sm:gap-4
        w-full max-w-[355px] bg-white hover:bg-[#E9FFF7] border border-[#CECECE] hover:border-[#01DD86] rounded-xl sm:rounded-2xl
        transition-all duration-300 
        ${className}
      `}
      {...props}
    >
      {/* Book Cover Image */}
      <div className="w-full h-[140px] sm:h-[180px] md:h-[190px] rounded-lg sm:rounded-xl overflow-hidden relative">
        <Image 
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full">
        {/* Book Info */}
        <div className="flex flex-row justify-between items-start w-full">
           {/* Book Title */}
           <h3 className="font-[Noto_Kufi_Arabic] font-bold text-sm sm:text-base leading-tight sm:leading-6 text-right text-[#222222]">
            {title}
          </h3>
          {/* Category Tag */}
          <div className="box-border flex flex-row justify-center items-center px-3 sm:px-4 py-1.5 sm:py-2 
                         bg-[rgba(1,221,134,0.1)] border border-[#01DD86] rounded-xl">
            <span className="font-[Noto_Kufi_Arabic] font-medium text-xs sm:text-sm text-[#01DD86]">
              {category}
            </span>
          </div>
          
         
        </div>

        {/* Call to Action Button */}
        <Button 
          variant={buttonVariant}
          size={buttonSize}
          text={buttonText}
          withIcon={withIcon}
          className="w-full sm:h-11 md:h-12"
          onClick={onClick}
        />
      </div>
    </div>
  );
}
