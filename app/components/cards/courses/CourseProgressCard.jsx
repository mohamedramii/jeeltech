'use client';
import React from 'react';
import Image from 'next/image';
import { Clock } from '@phosphor-icons/react';
import Button from '@/app/components/buttons/Button';

export default function CourseProgressCard({
  title = 'كورس تصميم تجربة المستخدم وواجهة المستخدم للمبتدئين',
  duration = '3 ساعة و 43 دقيقة',
  imageSrc = '/placeholder-course.png',
  progress = 25,
  completedLessons = '5 درس',
  totalLessons = '20 درس',
  onClick,
  className = '',
  ...props
}) {
  const progressWidth = `${progress}%`;
  // Path for the green section - using the one from CategoryCard but with fixed shape
  const svgPath = "M16 115C7.43959 115 0.5 108.06 0.5 99.5L0.5 15.5C0.500001 6.93959 7.43959 0 16 0L70.1768 0C60.4793 18.8206 59.9988 34.9581 65.3115 52.6865C70.6252 70.4183 81.7463 89.7725 95.167 115L16 115Z";
  
  return (
    <div
      className={`
        w-full max-w-[912px] h-[183px] bg-white border border-[#CECECE] rounded-2xl
        overflow-hidden flex flex-row ${className}
      `}
      {...props}
    >
      {/* Green SVG Section with Image */}
      <div className="w-[156px] relative flex items-center justify-center">
        {/* Green SVG Background */}
        <div className="absolute inset-0 scale-x-[-1]">
          <svg 
            width="156" 
            height="183" 
            viewBox="0 0 128 115" 
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path 
              d={svgPath}
              fill="#01DD86" 
            />
          </svg>
        </div>
        
        {/* Icon/Image container */}
        <div className="w-[124px] h-[161px] z-10 flex items-center justify-center">
          {typeof imageSrc === 'string' ? (
            <Image
              src={imageSrc}
              alt={title}
              width={124}
              height={161}
              className="object-contain"
            />
          ) : (
            imageSrc
          )}
        </div>
      </div>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col justify-between p-6 ">
        {/* Top Section - Duration and Title */}
        <div className="flex flex-col  gap-2.5">
          {/* Duration */}
          <div className="flex flex-row items-center gap-2 text-[#6C6C6C]">
            <Clock size={20} color="#6C6C6C" weight="regular" />
            <span className="text-sm font-['Noto_Kufi_Arabic'] leading-[21px]">
              {duration}
            </span>
          </div>
          
          {/* Course Title */}
          <h3 className="text-right font-['Noto_Kufi_Arabic'] font-semibold text-base leading-6 text-[#222222] w-full">
            {title}
          </h3>
        </div>
        
        {/* Bottom Section - Button and Progress */}
        <div className="flex flex-row justify-between  gap-[75px]">
       
          
          {/* Progress Info */}
          <div className="flex flex-col items-center gap-1 w-[446px]">
            {/* Lessons Count */}
            <div className="flex flex-row justify-between items-center w-full">
              <span className="font-['Noto_Kufi_Arabic'] text-sm text-[#6C6C6C]">
                {totalLessons}
              </span>
              <span className="font-['Noto_Kufi_Arabic'] font-semibold text-sm text-[#222222]">
                {completedLessons}
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-[18px] flex items-start">
              {/* Background bar */}
              <div className="w-full h-[10px] bg-[#E6E6E6] rounded-full flex">
                {/* Progress indicator */}
                <div 
                  className="h-full bg-[#01DD86] rounded-full" 
                  style={{ width: progressWidth }}
                ></div>
              </div>
            </div>
          </div>
            {/* Continue Learning Button */}
            <Button 
              variant="primary" 
              size="lg" 
              text="استمر في التعلم" 
              withIcon={false}
              onClick={onClick}
            />
        </div>
      </div>
      
      
    </div>
  );
}