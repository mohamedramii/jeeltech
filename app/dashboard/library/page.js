import React from 'react';
import { BookCardWrapper } from '@/app/components/cards/books';
import CategoryButton from '@/app/components/buttons/CategoryButton';

export default function DigitalLibraryPage() {
  // الفئات المتاحة في المكتبة الرقمية
  const categories = [
    'كل المجالات',
    'الكتب التعليمية',
    'المقالات التعليمية',
    'الكتب العلمية',
    'السيرات الشخصية'
  ];
  
  // بيانات الكتب المعروضة
  const books = [
    {
      id: 1,
      title: 'اسم الكتاب',
      imageSrc: '/Digital-Library/Frame 1984078598.png',
      category: 'الكتب التعليمية'
    },
    {
      id: 2,
      title: 'اسم الكتاب',
      imageSrc: '/Digital-Library/Frame 1984078598-1.png',
      category: 'الكتب التعليمية'
    },
    {
      id: 3,
      title: 'اسم الكتاب',
      imageSrc: '/Digital-Library/Frame 1984078598-2.png',
      category: 'الكتب التعليمية'
    },
    {
      id: 4,
      title: 'اسم الكتاب',
      imageSrc: '/Digital-Library/Frame 1984078598-3.png',
      category: 'الكتب التعليمية'
    },
    {
      id: 5,
      title: 'اسم الكتاب',
      imageSrc: '/Digital-Library/Frame 1984078598-4.png',
      category: 'الكتب التعليمية'
    },
    {
      id: 6,
      title: 'اسم الكتاب',
      imageSrc: '/Digital-Library/Frame 1984078598-5.png',
      category: 'الكتب التعليمية'
    },
    {
      id: 7,
      title: 'اسم الكتاب',
      imageSrc: '/Digital-Library/Frame 1984078598-6.png',
      category: 'الكتب التعليمية'
    },
    {
      id: 8,
      title: 'اسم الكتاب',
      imageSrc: '/Digital-Library/Frame 1984078598-7.png',
      category: 'الكتب التعليمية'
    },
    {
      id: 9,
      title: 'اسم الكتاب',
      imageSrc: '/Digital-Library/Frame 1984078598-8.png',
      category: 'الكتب التعليمية'
    },
    {
      id: 10,
      title: 'اسم الكتاب',
      imageSrc: '/Digital-Library/Frame 1984078598-9.png',
      category: 'الكتب التعليمية'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-row justify-between items-center">
        <h1 className="text-[32px] font-bold font-[Noto_Kufi_Arabic] mb-4">المكتبة الرقمية</h1>
        {/* قسم التصنيفات */}
        <div className="flex flex-row flex-wrap gap-3 mb-8">
          {categories.map((category, index) => (
            <CategoryButton 
              key={index}
              text={category}
              withIcon={false}
            />
          ))}
        </div>
        </div>
        
        
        {/* عرض الكتب */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {books.map((book) => (
            <BookCardWrapper
              key={book.id}
              title={book.title}
              imageSrc={book.imageSrc}
              category={book.category}
              buttonText="قراءة الآن"
              buttonVariant="primary"
              buttonSize="lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
