'use client';

import React from 'react';
import * as PhosphorIcons from '@phosphor-icons/react';


export default function NavbarButton({
  text = 'الرئيسية',
  state = 'non-selected',
  iconName = 'Gauge',
  showComingSoon = false,
  onClick,
  onMouseEnter,
  onMouseLeave
}) {
  // Get the icon component from Phosphor icons
  const IconComponent = PhosphorIcons[iconName];
  
  // Define styles based on state
  const getButtonStyles = () => {
    switch (state) {
      case 'selected':
        return 'bg-[#ffffff] border-r-[7px] border-r-white/10 backdrop-blur-[30px]';
      case 'hover':
        return 'bg-[rgba(34,34,34,0.1)]';
      case 'default':
        return 'bg-white border-r-[7px] border-r-white/10 backdrop-blur-[30px]';
      case 'non-selected':
      default:
        return 'bg-transparent';
    }
  };
  
  // Define text color based on state
  const getTextColor = () => {
    return ['selected', 'default'].includes(state) ? 'text-[#01DD86]' : 'text-[#535353]';
  };

  // Define icon color based on state
  const getIconColor = () => {
    return ['selected', 'default'].includes(state) ? '#01DD86' : '#535353';
  };

  return (
    <div className="relative">
      <button
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`box-border flex flex-row justify-end items-center py-3 px-4 gap-2 w-full h-[48px] rounded-full ${getButtonStyles()}`}
      >
        {IconComponent && (
          <div className="w-6 h-6 flex-none">
            <IconComponent size={24} color={getIconColor()} weight="regular" />
          </div>
        )}
        <span className={`w-full h-6 font-['Noto_Kufi_Arabic'] font-semibold text-base leading-6 ${getTextColor()}`}>
          {text}
        </span>
      </button>
      
      {/* Coming Soon Badge */}
      {showComingSoon && (
        <div className="absolute flex flex-row justify-center items-center py-1 px-3 gap-[10px] w-[49px] h-[26px] left-[-31px] top-[-4px] bg-[#DC2626] rounded-full z-10">
          <span className="font-['Noto_Kufi_Arabic'] font-medium text-xs leading-[18px] text-white">
            قريباً
          </span>
        </div>
      )}
    </div>
  );
}
