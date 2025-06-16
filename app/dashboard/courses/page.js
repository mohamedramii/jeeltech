import React from 'react';
import { CourseCardWrapper } from '@/app/components/cards/courses';
import CategoryButton from '@/app/components/buttons/CategoryButton';

export default function CoursesPage() {
  const categories = [
    'جميع الدورات',
    'دورات البرمجة',
    'دورات التصميم',
    'دورات التسويق الرقمي',
    'دورات تحليل البيانات',
    'دورات الذكاء الاصطناعي'
  ];
  
  const courses = [
    {
      id: 1,
      title: 'دورة تصميم تجربة وواجهة المستخدم',
      imageSrc: '/courses/course1.png',
      hasCertificate: true,
      videosCount: 12,
      duration: '10 ساعات',
      buttonText: 'إبدأ الآن',
      buttonVariant: 'primary'
    },
    {
      id: 2,
      title: 'دورة تصميم الرسوم المتحركة',
      imageSrc: '/courses/course1.png',
      hasCertificate: true,
      videosCount: 15,
      duration: '12 ساعة',
      buttonText: 'إبدأ الآن',
      buttonVariant: 'primary'
    },
    {
      id: 3,
      title: 'دورة تطوير تطبيقات المحمول',
      imageSrc: '/courses/course1.png',
      hasCertificate: true,
      videosCount: 20,
      duration: '15 ساعة',
      buttonText: 'إبدأ الآن',
      buttonVariant: 'primary'
    },
    {
      id: 4,
      title: 'دورة تحليل البيانات',
      imageSrc: '/courses/course1.png',
      hasCertificate: true,
      videosCount: 18,
      duration: '14 ساعة',
      buttonText: 'إبدأ الآن',
      buttonVariant: 'primary'
    },
    {
      id: 5,
      title: 'دورة التسويق الرقمي',
      imageSrc: '/courses/course1.png',
      hasCertificate: true,
      videosCount: 16,
      duration: '10 ساعات',
      buttonText: 'إبدأ الآن',
      buttonVariant: 'primary'
    },
    {
      id: 6,
      title: 'دورة تصميم تجربة وواجهة المستخدم',
      imageSrc: '/courses/course1.png',
      hasCertificate: true,
      videosCount: 12,
      duration: '10 ساعات',
      buttonText: 'إبدأ الآن',
      buttonVariant: 'primary'
    },
    {
      id: 7,
      title: 'دورة البرمجة بلغة بايثون',
      imageSrc: '/courses/course1.png',
      hasCertificate: true,
      videosCount: 25,
      duration: '20 ساعة',
      buttonText: 'إبدأ الآن',
      buttonVariant: 'primary'
    },
    {
      id: 8,
      title: 'دورة تطوير تطبيقات الويب',
      imageSrc: '/courses/course1.png',
      hasCertificate: true,
      videosCount: 30,
      duration: '22 ساعة',
      buttonText: 'إبدأ الآن',
      buttonVariant: 'primary'
    },
    {
      id: 9,
      title: 'دورة تطوير تطبيقات الهواتف الذكية',
      imageSrc: '/courses/course1.png',
      hasCertificate: true,
      videosCount: 20,
      duration: '16 ساعة',
      buttonText: 'إبدأ الآن',
      buttonVariant: 'primary'
    },
    {
      id: 10,
      title: 'دورة تصميم الجرافيك',
      imageSrc: '/courses/course1.png',
      hasCertificate: true,
      videosCount: 15,
      duration: '12 ساعة',
      buttonText: 'إبدأ الآن',
      buttonVariant: 'primary'
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-row justify-between items-center mb-4">
          <h1 className="text-[32px] font-bold font-['Noto_Kufi_Arabic']">الدورات التدريبية</h1>
          
          <div className="flex flex-row flex-wrap gap-3">
            {categories.map((category, index) => (
              <CategoryButton 
                key={index}
                text={category}
                withIcon={false}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {courses.map((course) => (
            <CourseCardWrapper
              key={course.id}
              id={course.id}
              title={course.title}
              imageSrc={course.imageSrc}
              hasCertificate={course.hasCertificate}
              videosCount={course.videosCount}
              duration={course.duration}
              buttonText={course.buttonText}
              buttonVariant={course.buttonVariant}
              buttonSize="lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
