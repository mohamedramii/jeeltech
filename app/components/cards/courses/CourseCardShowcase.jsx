'use client';

import React from 'react';
import CourseCard from './CourseCard';

export default function CourseCardShowcase() {
  return (
    <div className="box-sizing-border-box flex flex-col items-start p-5 gap-8 relative w-full max-w-[1200px] bg-white border border-dashed border-[#9747FF] rounded-md">
      <h2 className="text-xl font-bold text-right w-full mb-4">عرض كروت الدورات</h2>
      
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {/* Default Course Card */}
        <CourseCard 
          title="دورة تصميم تجربة وواجهة المستخدم"
          imageSrc="/placeholder-course.jpg"
          hasCertificate={true}
          videosCount={12}
          duration="10 ساعات"
          buttonText="إبدأ الآن"
        />
        
        {/* Another Course Card */}
        
        <CourseCard 
          title="أساسيات تطوير الويب"
          imageSrc="/placeholder-course2.jpg"
          hasCertificate={false}
          videosCount={24}
          duration="15 ساعة"
          buttonText="مواصلة التعلم"
        />
        
        {/* Yet Another Course Card */}
        <CourseCard 
          title="تعلم JavaScript من الصفر"
          imageSrc="/placeholder-course3.jpg"
          hasCertificate={true}
          videosCount={18}
          duration="12 ساعة"
          buttonText="استكشف الدورة"
        />
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-md w-full">
        <h3 className="text-lg font-bold mb-2">كيفية استخدام كارت الدورات</h3>
        <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
{`import { CourseCard } from '@/components/cards/courses';

// Basic usage
<CourseCard 
  title="دورة تصميم تجربة وواجهة المستخدم"
  imageSrc="/path/to/image.jpg"
  hasCertificate={true}
  videosCount={12}
  duration="10 ساعات"
  buttonText="إبدأ الآن"
  onClick={() => alert('تم النقر على الزر')}
/>`}
        </pre>
      </div>
    </div>
  );
}
