'use client';
import React, { useState } from 'react';

export default function RadioButton({
  checked = false,
  name,
  value,
  onChange,
  disabled = false,
  className = '',
  ...props
}) {
  const [isChecked, setIsChecked] = useState(checked);
  
  const handleChange = (e) => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <label
      className={`
        inline-flex items-center cursor-pointer
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      <div className="relative">
        <input
          type="radio"
          name={name}
          value={value}
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
          {...props}
        />
        <div
          className={`
            flex items-center justify-center
            w-4 h-4 border border-[#CECECE] rounded-full transition-all duration-200
            ${isChecked ? 'border-[#01DD86]' : ''}
          `}
        >
          {isChecked && (
            <div className="w-2.5 h-2.5 bg-[#01DD86] rounded-full transition-all duration-200"></div>
          )}
        </div>
      </div>
    </label>
  );
}