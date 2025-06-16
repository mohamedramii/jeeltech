'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CourseProgressTracker from '@/app/components/coursetracker/CourseProgressTracker';
import Button from '@/app/components/buttons/Button';
import { 
  CaretLeft, 
  Clock, 
  Play,
  Certificate,
  Video,
  User
} from '@phosphor-icons/react';

export default function CourseDetailsClient({ course }) {
  const router = useRouter();
  
  const goBack = () => {
    router.push('/dashboard/courses');
  };

  return (
    <div className="flex flex-col px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="lg:w-1/3 order-2 lg:order-1">
         
          
          <div className="flex flex-col border border-gray-300 rounded-lg p-6 gap-4">
          <div className="flex items-center gap-3  pb-4 border-b border-gray-200 ">
              <div className="w-16 h-16 bg-[#CCF8E7] rounded-full flex items-center justify-center">
<Image 
src="/Course progress.png"
width={40}
height={48


}
/>
              </div>
              <h1 className="font-['Noto_Kufi_Arabic'] font-bold text-2xl text-[#222222]">
                {course.title}
              </h1>
            </div>
          <div className='flex flex-col gap-4'>


            <CourseProgressTracker
              title={course.title}
              duration={course.totalTime}
              progress={course.progress}
              lessons={course.lessons}
            />
            <CourseProgressTracker
              title={course.title}
              duration={course.totalTime}
              progress={course.progress}
              lessons={course.lessons}
            />
          </div>
            
           
          </div>
        </div>

        <div className=" flex-grow border border-gray-300 rounded-lg p-6 lg:w-2/3 order-1 lg:order-2">
          <div className="relative w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden mb-8 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <Play size={64} weight="fill" color="#01DD86" />
              <p className="font-['Noto_Kufi_Arabic'] text-lg mt-4">انقر لمشاهدة الدرس</p>
            </div>
          </div>
          
          <div className="border border-gray-300 rounded-lg p-6">
            <h2 className="font-['Noto_Kufi_Arabic'] font-bold text-xl mb-6">ملخص الدورة</h2>
            
<div className="flex items-center gap-6 mb-6">
  <div className="flex items-center justify-between flex-1">
    <div className="flex items-center gap-3">
      <Clock size={20} weight="regular" color="#222222" />
      <span className="font-['Noto_Kufi_Arabic'] text-sm text-gray-600">مدة الدورة</span>
    </div>
    <span className="font-['Noto_Kufi_Arabic'] font-medium text-[#222222]">
      {course.duration}
    </span>
  </div>
  
  <div className="w-px h-12 bg-[#D9D8D8]"></div>
  
  <div className="flex items-center justify-between flex-1">
    <div className="flex items-center gap-3">
      <Video size={20} weight="regular" color="#222222" />
      <span className="font-['Noto_Kufi_Arabic'] text-sm text-gray-600">عدد الفيديوهات</span>
    </div>
    <span className="font-['Noto_Kufi_Arabic'] font-medium text-[#222222]">
      {course.videosCount} فيديو
    </span>
  </div>
  
  {course.hasCertificate && (
    <>
      <div className="w-px h-12 bg-[#D9D8D8]"></div>
      <div className="flex items-center justify-between flex-1">
        <div className="flex items-center gap-3">
          <Certificate size={20} weight="regular" color="#222222" />
          <span className="font-['Noto_Kufi_Arabic'] text-sm text-gray-600">المدة الإجمالية</span>
        </div>
        <span className="font-['Noto_Kufi_Arabic'] font-medium text-[#222222]">
          15 و 20 ساعة
        </span>
      </div>
    </>
  )}
</div>
            
            <div className="border-t border-gray-200 pt-4">
              <p className="font-['Noto_Kufi_Arabic'] text-[#222222] leading-relaxed text-sm">
                {course.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}