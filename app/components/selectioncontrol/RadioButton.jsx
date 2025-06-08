'use client';
import React, { useState } from 'react';
/**
 * Simple RadioButton component for selection options
 * @param {Object} props - Component props
 * @param {boolean} props.checked - Whether the radio is checked (selected)
 * @param {string} props.name - Name for the radio button group
 * @param {string} props.value - Value for the radio button
 * @param {function} props.onChange - Function to call when the radio changes
 * @param {boolean} props.disabled - Whether the radio is disabled
 * @param {string} props.className - Additional classes
 */
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