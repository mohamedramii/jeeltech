'use client';

import React from 'react';
import BookCard from './BookCard';

export default function BookCardShowcase() {
  return (
    <div className="box-sizing-border-box flex flex-col items-start p-5 gap-8 relative w-full max-w-[1200px] bg-white border border-dashed border-[#9747FF] rounded-md">
      <h2 className="text-xl font-bold text-right w-full mb-4">عرض كروت الكتب</h2>
      
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {/* Default Book Card */}
        <BookCard 
          title="اسم الكتاب"
          imageSrc="/placeholder-book.jpg"
          category="الكتب التعليمية"
          buttonText="قراءة الان"
          buttonVariant="primary"
        />
        
        {/* Another Book Card */}
        <BookCard 
          title="رواية جديدة"
          imageSrc="/placeholder-book2.jpg"
          category="الروايات"
          buttonText="اقرأ المزيد"
          buttonVariant="outline"
        />
        
        {/* Yet Another Book Card */}
        <BookCard 
          title="كتاب تطوير الذات"
          imageSrc="/placeholder-book3.jpg"
          category="تطوير الذات"
          buttonText="استكشف الكتاب"
          buttonVariant="primary"
          withIcon={true}
        />
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-md w-full">
        <h3 className="text-lg font-bold mb-2">كيفية استخدام كارت الكتب</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
{`import { BookCard } from '@/components/cards/books';

// استخدام أساسي
<BookCard 
  title="اسم الكتاب"
  imageSrc="/path/to/image.jpg"
  category="الكتب التعليمية"
  buttonText="قراءة الان"
  onClick={() => alert('تم النقر على الزر')}
/>

// تخصيص الزر
<BookCard 
  title="رواية جديدة"
  imageSrc="/path/to/image.jpg"
  category="الروايات"
  buttonText="اقرأ المزيد"
  buttonVariant="outline"
  buttonSize="lg"
  withIcon={true}
/>`}
        </pre>
      </div>
    </div>
  );
}
