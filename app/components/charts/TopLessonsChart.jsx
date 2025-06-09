'use client';
/* 
هذا المكون هو مكون على جانب العميل فقط 
لا يمكن تقديمه على جانب الخادم
*/

import React, { useState, useEffect } from 'react';

/**
 * مكون رسم بياني لعرض أعلى الدروس التي تمت مشاهدتها
 * @param {Object} props - خصائص المكون
 * @param {Array} props.data - بيانات الدروس (اختياري)
 * @param {string} props.className - فئات CSS إضافية (اختياري)
 */
export default function TopLessonsChart({ lessons = [], className = '', ...props }) {
  // حالة للتحقق من أننا على جانب العميل
  const [isClient, setIsClient] = useState(false);

  // التأكد من أننا على جانب العميل قبل عرض الرسم البياني
  useEffect(() => {
    setIsClient(true);
  }, []);

  // البيانات الافتراضية للدروس الأكثر مشاهدة
  const defaultLessons = [
    { course: "Scratch", lessonCount: 17 },
    { course: "HTML", lessonCount: 15 },
    { course: "CSS", lessonCount: 9 },
    { course: "C+", lessonCount: 7 },
    { course: "UI/UX", lessonCount: 10 },
    { course: "Java script", lessonCount: 13 }
  ];

  // استخدام البيانات المقدمة أو البيانات الافتراضية
  const chartData = lessons.length > 0 ? lessons : defaultLessons;

  // حساب العرض النسبي للأشرطة بناءً على عدد الدروس
  const getBarWidth = (count) => {
    // احسب أقصى عدد دروس
    const maxCount = Math.max(...chartData.map(item => item.lessonCount));
    
    // احسب النسبة المئوية من الحد الأقصى (بين 60% و 100%)
    const percentage = 60 + (count / maxCount) * 40;
    
    // عودة بالنسبة المئوية للعرض
    return `${percentage}%`;
  };

  return (
    <div 
      className={`box-border relative w-full h-[408px] bg-white border border-[#CECECE] rounded-2xl p-6 ${className}`}
      {...props}
    >
      {!isClient ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-gray-400">جاري التحميل...</div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-end gap-4 h-full w-full">
          <h2 className="font-['Noto_Kufi_Arabic'] font-bold text-lg leading-[27px] text-right text-[#222222] w-full">
            أكثر الدروس مشاهدة
          </h2>
          
          <div className="flex flex-col justify-center items-start gap-2 w-full flex-grow">
            {chartData.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-row justify-between items-center px-2 py-2 w-full h-[45px] rounded"
                style={{
                  background: `linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0) 112.5%)`,
                  width: getBarWidth(item.lessonCount),
                  transform: 'matrix(-1, 0, 0, 1, 0, 0)'
                }}
              >
                <div className="transform scale-x-[-1]">
                  <span className="font-['Noto_Kufi_Arabic'] font-normal text-sm text-[#222222]">
                    {item.lessonCount} درس
                  </span>
                </div>
                <div className="transform scale-x-[-1]">
                  <span className="font-['Noto_Kufi_Arabic'] font-medium text-base text-[#222222]">
                    {item.course}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
