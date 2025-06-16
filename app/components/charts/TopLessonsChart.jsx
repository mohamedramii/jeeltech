'use client';

import React, { useState, useEffect } from 'react';


export default function TopLessonsChart({ lessons = [], className = '', ...props }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultLessons = [
    { course: "Scratch", lessonCount: 17 },
    { course: "HTML", lessonCount: 15 },
    { course: "CSS", lessonCount: 9 },
    { course: "C+", lessonCount: 7 },
    { course: "UI/UX", lessonCount: 10 },
    { course: "Java script", lessonCount: 13 }
  ];

  const chartData = lessons.length > 0 ? lessons : defaultLessons;

  const getBarWidth = (count) => {
    const maxCount = Math.max(...chartData.map(item => item.lessonCount));
    
    const percentage = 60 + (count / maxCount) * 40;
    
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
