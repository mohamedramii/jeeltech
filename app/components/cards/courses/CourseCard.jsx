'use client';

import React from 'react';
import Image from 'next/image';
import { Certificate, Play, Clock, Plus } from '@phosphor-icons/react';
import Button from '../../buttons/Button';

/**
 * CourseCard component for displaying course information
 * @param {Object} props - Component props
 * @param {string} props.title - Course title
 * @param {string} props.imageSrc - Course image source
 * @param {boolean} props.hasCertificate - Whether the course offers a certificate
 * @param {number} props.videosCount - Number of videos in the course
 * @param {string} props.duration - Course duration (e.g., "10 ساعات")
 * @param {function} props.onClick - Click handler for the course card button
 * @param {string} props.buttonText - Text for the call-to-action button
 */
export default function CourseCard({
  title = 'دورة تصميم تجربة وواجهة المستخدم',
  imageSrc = '/placeholder-course.jpg',
  hasCertificate = true,
  videosCount = 12,
  duration = '10 ساعات',
  onClick,
  buttonText = 'استمر في التعلم',
  buttonVariant = 'primary',
  buttonSize = 'm',
  withIcon = false,
  className = '',
  ...props
}) {
  return (
    <div 
      className={`
        box-border flex flex-col items-start p-3 sm:p-4 gap-3 sm:gap-4
        w-full max-w-[355px] bg-white hover:bg-[#E9FFF7]  border border-[#CECECE] hover:border-[#01DD86] rounded-xl sm:rounded-2xl
        transition-all duration-300 
        ${className}
      `}
      {...props}
    >
      {/* Course Image */}
      <div className="w-full h-[140px] sm:h-[180px] md:h-[200px] rounded-lg sm:rounded-xl overflow-hidden relative">
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
        {/* Course Info */}
        <div className="flex flex-col gap-2 sm:gap-3 w-full">
          {/* Title */}
          <h3 className="font-[Noto_Kufi_Arabic] font-bold text-sm sm:text-base leading-tight sm:leading-6 text-right text-[#222222] w-full">
            {title}
          </h3>

          {/* Details */}
          <div className="flex flex-wrap flex-row items-center gap-2 sm:gap-4 justify-start">
            {/* Duration */}
            <div className="flex flex-row items-center gap-1">
              <Clock size={16} weight="regular" color="#6C6C6C" />
              <span className="font-[Noto_Kufi_Arabic] font-medium text-xs sm:text-sm leading-tight sm:leading-[21px] text-right text-[#6C6C6C]">
                {duration}
              </span>
            </div>
           
            {/* Videos Count */}
            <div className="flex flex-row items-center gap-1">
              <Play size={16} weight="regular" color="#6C6C6C" />
              <span className="font-[Noto_Kufi_Arabic] font-medium text-xs sm:text-sm leading-tight sm:leading-[21px] text-right text-[#6C6C6C]">
                {videosCount} فيديو
              </span>
            </div>

            {/* Certificate */}
            {hasCertificate && (
              <div className="flex flex-row items-center gap-1">
                <Certificate size={16} weight="regular" color="#6C6C6C" />
                <span className="font-[Noto_Kufi_Arabic] font-medium text-xs sm:text-sm leading-tight sm:leading-[21px] text-right text-[#6C6C6C]">
                  شهادة
                </span>
              </div>
            )}
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
