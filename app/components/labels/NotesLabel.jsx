'use client';

import React from 'react';
import { Trash, PencilSimpleLine } from '@phosphor-icons/react';

export default function NotesLabel({
  title = 'العنوان',
  date = '01 مايو, 2025',
  onEdit,
  onDelete,
  className = '',
  ...props
}) {
  return (
    <div
      className={`
        w-full h-[75px] bg-[#CCF8E7] rounded-[12px]
        flex flex-row justify-between items-center px-3
        ${className}
      `}
      {...props}
    >
      {/* Info Section */}
      <div className="flex flex-col items-end gap-[6px] ">
        {/* Title */}
        <h3 className="w-full font-['Noto_Kufi_Arabic'] font-medium text-base leading-6 text-[#222222] text-right">
          {title}
        </h3>
        
        {/* Date */}
        <span className="w-full font-['Noto_Kufi_Arabic'] text-sm font-normal leading-[21px] text-[#6C6C6C] text-right">
          {date}
        </span>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-row items-center gap-[6px]">
     
        
        {/* Edit Button */}
        <button
          onClick={onEdit}
          className="w-10 h-10 bg-white border border-[#CECECE] rounded-[8px] flex items-center justify-center"
        >
          <PencilSimpleLine size={24} color="#222222" weight="regular" />
        </button>
           {/* Delete Button */}
           <button
          onClick={onDelete}
          className="w-10 h-10 bg-white border border-[#CECECE] rounded-[8px] flex items-center justify-center"
        >
          <Trash size={24} color="#222222" weight="regular" />
        </button>
      </div>
    </div>
  );
}
