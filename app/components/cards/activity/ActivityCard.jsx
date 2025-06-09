'use client';

import React from 'react';
import { CalendarCheck } from '@phosphor-icons/react';

/**
 * ActivityCard component for displaying the last activity on the platform
 * @param {Object} props - Component props
 * @param {string} props.dayCount - Number of days (e.g. "منذ 2 يوم")
 * @param {string} props.activityText - Activity description (e.g. "آخر نشاط في المنصة")
 * @param {function} props.onClick - Click handler for the card
 * @param {string} props.className - Additional classes
 */
export default function ActivityCard({
  dayCount = "منذ 2 يوم",
  activityText = "آخر نشاط في المنصة",
  onClick,
  className = "",
  ...props
}) {
  return (
    <div 
      className={`
        box-sizing border-box relative w-[348.8px] h-[104px] 
        bg-[#E4FAF2] border-[1.5px] border-[#56E8AE] rounded-2xl
        overflow-hidden
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {/* Background Elements */}
      <div className="absolute w-[191px] h-[167.85px] left-[0px] top-[-0
      px]">
        {/* Ellipse 6 */}
        <div className="box-border absolute w-[136.59px] h-[136.59px] left-[-72px] top-[-84px] border border-[#AAF4D7] rounded-full"></div>
        {/* Ellipse 7 */}
        <div className="box-border absolute w-[136.59px] h-[136.59px] left-[-17.59px] top-[-52.75px] border border-[#AAF4D7] rounded-full"></div>
      </div>

      {/* Content */}
      <div className="flex flex-row justify-end items-start gap-4 absolute w-[218px] h-[56px] left-[106.8px] top-[24px]">
        {/* Icon Container */}
        <div className="w-[56px] h-[56px] bg-white rounded-lg flex items-center justify-center">
          <CalendarCheck size={32} weight="regular" color="#01DD86" />
        </div>
        {/* Text Container */}
        <div className="flex flex-col items-end gap-1 w-[146px]">
          {/* Date */}
          <h3 className="w-full text-right font-['Noto_Kufi_Arabic'] font-bold text-lg leading-[27px] text-[#222222]">
            {dayCount}
          </h3>
          {/* Activity */}
          <p className="w-full text-right font-['Noto_Kufi_Arabic'] font-normal text-base leading-6 text-[#6C6C6C]">
            {activityText}
          </p>
        </div>

       
      </div>
    </div>
  );
}
