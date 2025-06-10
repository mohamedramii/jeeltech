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
        relative w-[348.8px] h-[104px]
        bg-[#E4FAF2] border-[1.5px] border-[#56E8AE] rounded-2xl
        flex items-center justify-end
        px-6 py-4
        overflow-hidden
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {/* Background Decorative Elements */}
      <div className="absolute left-0 top-0 pointer-events-none">
        <div className="w-[136.59px] h-[136.59px] border border-[#AAF4D7] rounded-full -translate-x-[72px] -translate-y-[84px]"></div>
        <div className="w-[136.59px] h-[136.59px] border border-[#AAF4D7] rounded-full -translate-x-[17.59px] -translate-y-[52.75px] absolute top-0 left-0"></div>
      </div>

      {/* Main Content */}
      <div className="w-full flex items-center gap-4 z-10">
        {/* Icon Container */}
        <div className="w-[56px] h-[56px] bg-white rounded-lg flex items-center justify-center flex-shrink-0">
          <CalendarCheck size={32} weight="regular" color="#01DD86" />
        </div>
        {/* Text Container */}
        <div className="flex flex-col  gap-1">
          {/* Date */}
          <h3 className="font-['Noto_Kufi_Arabic'] font-bold text-lg leading-[27px] text-[#222222] text-right">
            {dayCount}
          </h3>
          {/* Activity */}
          <p className="font-['Noto_Kufi_Arabic'] font-normal text-base leading-6 text-[#6C6C6C] text-right">
            {activityText}
          </p>
        </div>

        
      </div>
    </div>
  );
}