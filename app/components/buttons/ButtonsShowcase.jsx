'use client';

import React from 'react';
import Button from './Button';
import CategoryButton from './CategoryButton';
import { Plus, ArrowRight, ArrowLeft, Download, Heart } from '@phosphor-icons/react';

export default function ButtonsShowcase() {
  return (
    <div className="box-sizing-border-box flex flex-row flex-wrap items-start content-start p-5 gap-y-7 gap-x-3.5 relative w-full max-w-[683px] bg-white border border-dashed border-[#9747FF] rounded-md">
      {/* Primary Buttons - Different Sizes */}
      <div className="w-full">
        <h3 className="text-lg font-bold mb-2">أزرار أساسية</h3>
        <div className="flex flex-wrap gap-4 mb-6">
          <Button size="s" variant="primary" text="استمر في التعلم" withIcon />
          <Button size="m" variant="primary" text="استمر في التعلم" withIcon />
          <Button size="lg" variant="primary" text="استمر في التعلم" withIcon />
        </div>
      </div>

      {/* Outline Buttons */}
      <div className="w-full">
        <h3 className="text-lg font-bold mb-2">أزرار إطارية</h3>
        <div className="flex flex-wrap gap-4 mb-6">
          <Button size="s" variant="outline" text="استمر في التعلم" withIcon />
          <Button size="m" variant="outline" text="استمر في التعلم" withIcon />
          <Button size="lg" variant="outline" text="استمر في التعلم" withIcon />
        </div>
      </div>

      {/* Ghost Buttons */}
      <div className="w-full">
        <h3 className="text-lg font-bold mb-2">أزرار شفافة</h3>
        <div className="flex flex-wrap gap-4 mb-6">
          <Button size="s" variant="ghost" text="استمر في التعلم" />
          <Button size="m" variant="ghost" text="استمر في التعلم" />
          <Button size="lg" variant="ghost" text="استمر في التعلم" />
        </div>
      </div>

      {/* Custom Icons */}
      <div className="w-full">
        <h3 className="text-lg font-bold mb-2">أزرار مخصصة</h3>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary" 
            text="تحميل الملف" 
            icon={<Download size={20} weight="bold" />} 
          />
          <Button 
            variant="outline" 
            text="إضافة إلى المفضلة" 
            icon={<Heart size={20} weight="fill" className="text-red-500" />} 
          />
          <Button 
            variant="ghost" 
            text="التالي" 
            icon={<ArrowLeft size={20} weight="bold" />} 
          />
        </div>
      </div>

      {/* Category Buttons */}
      <div className="w-full mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-bold mb-2">أزرار التصنيفات</h3>
        <div className="flex flex-wrap gap-4">
          <CategoryButton text="تصفح جميع الدورات" />
          <CategoryButton text="المفضلة" icon={<Heart size={20} weight="fill" className="text-red-500" />} />
          <CategoryButton text="الذهاب للخلف" icon={<ArrowLeft size={20} weight="bold" />} />
        </div>
      </div>
    </div>
  );
}
