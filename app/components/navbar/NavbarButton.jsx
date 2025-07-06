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
  const IconComponent = PhosphorIcons[iconName];
 
  const getButtonStyles = () => {
    switch (state) {
      case 'selected':
        return 'bg-[#ffffff] backdrop-blur-[30px] ';
      case 'hover':
        return 'bg-[rgba(34,34,34,0.1)]';
      case 'default':
        return 'bg-white backdrop-blur-[30px] ';
      case 'non-selected':
      default:
        return 'bg-transparent hover:bg-[rgba(34,34,34,0.05)] transition-colors duration-200';
    }
  };
 
  const getTextColor = () => {
    if (state === 'selected') {
      return 'text-[#01DD86]';
    } else {
      return 'text-[#535353]';
    }
  };

  const getIconColor = () => {
    if (state === 'selected') {
      return '#01DD86';
    } else {
      return '#535353';
    }
  };

  const getBorderStyle = () => {
    if (state === 'selected' || state === 'default') {
      return {
        borderRight: `clamp(4px, 0.36vw, 7px) solid rgba(255, 255, 255, 0.1)`
      };
    }
    return {};
  };

  return (
    <div className="relative">
      <button
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`
          box-border flex flex-row justify-center items-center 
          rounded-full transition-all duration-200 
          whitespace-nowrap 
          ${getButtonStyles()}
        `}
        style={{
          padding: `clamp(6px, 0.4vw, 8px) clamp(12px, 0.8vw, 16px)`,
          gap: `clamp(4px, 0.4vw, 8px)`,
          height: `clamp(40px, 2.5vw, 48px)`,
          maxWidth: `clamp(120px, 12vw, 200px)`,
          minWidth: `clamp(80px, 8vw, 120px)`,
          ...getBorderStyle()
        }}
      >
        {IconComponent && (
          <div className="flex-shrink-0">
            <IconComponent 
              color={getIconColor()} 
              weight="regular" 
              style={{
                width: `clamp(16px, 1.04vw, 20px)`,
                height: `clamp(16px, 1.04vw, 20px)`
              }}
            />
          </div>
        )}
        <span
          className={`
            font-['Noto_Kufi_Arabic'] font-semibold 
            whitespace-nowrap overflow-hidden text-ellipsis
            ${getTextColor()}
          `}
          style={{
            fontSize: `clamp(11px, 0.75vw, 16px)`
          }}
        >
          {text}
        </span>
      </button>
     
      {/* Coming Soon Badge */}
      {showComingSoon && (
        <div 
          className="absolute flex flex-row justify-center items-center bg-[#DC2626] rounded-full z-10"
          style={{
            padding: `clamp(2px, 0.26vw, 4px) clamp(8px, 0.8vw, 12px)`,
            gap: `clamp(4px, 0.5vw, 10px)`,
            minWidth: `clamp(35px, 2.55vw, 49px)`,
            height: `clamp(20px, 1.35vw, 26px)`,
            left: `clamp(-12px, -1.6vw, -31px)`,
            top: `clamp(-2px, -0.2vw, -4px)`
          }}
        >
          <span 
            className="font-['Noto_Kufi_Arabic'] font-medium text-white leading-tight"
            style={{
              fontSize: `clamp(9px, 0.6vw, 12px)`
            }}
          >
            قريباً
          </span>
        </div>
      )}
    </div>
  );
}