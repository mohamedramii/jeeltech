'use client';
import React, { useState } from 'react';

export default function ToggleSwitch({
  checked = false,
  onChange,
  disabled = false,
  activeColor = '#22C55E', 
  className = '',
  ...props
}) {
  const [isChecked, setIsChecked] = useState(checked);
  const handleToggle = () => {
    if (disabled) return;
   
    const newValue = !isChecked;
    setIsChecked(newValue);
   
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      disabled={disabled}
      onClick={handleToggle}
      className={`
        relative inline-flex flex-shrink-0 items-center
        w-10 h-[22px] rounded-full transition-colors duration-200 ease-in-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#01DD86] focus-visible:ring-opacity-50
        ${isChecked ? 'bg-[#22C55E]' : 'bg-[#E6E6E6]'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      {...props}
    >
      <span
        className={`
          absolute w-[18px] h-[18px] bg-white rounded-full shadow-md transform transition-transform duration-200
          ${isChecked ? 'translate-x-[20px]' : 'translate-x-[2px]'}
          top-[2px] left-0
        `}
      />
    </button>
  );
}