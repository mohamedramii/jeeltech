import React from 'react';
import { AIChatBoxWrapper } from '@/app/components/chat';
import { CourseProgressCardWrapper } from '@/app/components/cards/courses';
import { NotesLabelWrapper } from '@/app/components/labels';
import { CategoryCardWrapper } from '@/app/components/cards/categories';
import Button from '@/app/components/buttons/Button';

export default function HomePage() {
  return (
    <div className="">
      {/* Main grid layout: two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Right Column (First column in RTL) - Main content */}
        <div className="flex flex-col gap-6 order-1 lg:order-1">
          {/* Welcome Section */}
          <div className="    ">
            <h2 className="text-[32px] font-bold mb-2  font-['Noto_Kufi_Arabic'] font-700">صباح الخير يا أحمد! 👋</h2>
            <p className="text-[#535353]  text-base  font-['Noto_Kufi_Arabic'] font-400">
            هل مستعد لتعلّم شيء جديد اليوم؟            </p>
           
          </div>
          
          {/* Course Progress Section */}
          <div>
            <h2 className="text-base  font-semibold mb-4  font-['Noto_Kufi_Arabic'] font-700">أكمل التعلم</h2>
            <CourseProgressCardWrapper 
              title="كورس تصميم تجربة المستخدم وواجهة المستخدم للمبتدئين"
              duration="3 ساعة و 43 دقيقة"
              imageSrc="/categories-icon/dev.png"
              progress={25}
              completedLessons="5 درس"
              totalLessons="20 درس"
            />
          </div>
          
          {/* Categories Section */}
          <div>
            <h2 className="text-[18px] font-semibold mb-4 text-right font-['Noto_Kufi_Arabic'] font-700">استكشف الفئات</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CategoryCardWrapper
  title="دورات المختبرات والكتب"
  imageSrc="/categories-icon/lab and book.png"
/>
<CategoryCardWrapper
  title="دورات التطوير"
  imageSrc="/categories-icon/dev.png"
/>
<CategoryCardWrapper
  title="دورات التصميم والرسم"
  imageSrc="/categories-icon/illustration.png"
/>
<CategoryCardWrapper
  title="دورات سطح المكتب"
  imageSrc="/categories-icon/desktop.png"
/>
<CategoryCardWrapper
  title="دورات الكتب والمراجع"
  imageSrc="/categories-icon/books.png"
/>
<CategoryCardWrapper
  title="دورات تطوير العقل"
  imageSrc="/categories-icon/brain.png"
/>            </div>
          </div>
        </div>
        
        {/* Left Column (Second column in RTL) - AI Chat and Notes */}
        <div className="flex flex-col gap-6 order-2 lg:order-2">
          {/* AI Chat Section */}
          <div>
            <AIChatBoxWrapper />
          </div>
          
          {/* Notes Section */}
          <div className='border border-[#CECECE] rounded-2xl p-4 h-full' > 
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-right font-['Noto_Kufi_Arabic']">ملاحظاتي</h2>
              <Button 
                variant="primary"
                size="lg"
                text="إضافة ملاحظة جديدة"
                withIcon={true}
              />
            </div>
            
            <div className="flex flex-col gap-4">
              <NotesLabelWrapper 
                title="العنوان" 
                date="01 مايو, 2025"
              />
              <NotesLabelWrapper 
                title="ملاحظة أخرى" 
                date="01 مايو, 2025"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
