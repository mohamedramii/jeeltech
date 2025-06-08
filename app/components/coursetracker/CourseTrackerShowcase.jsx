'use client';
import React from 'react';
import { CourseProgressTracker } from './index';

const STATUS = {
  COMPLETED: 'completed',
  IN_PROGRESS: 'in-progress',
  NOT_STARTED: 'not-started'
};

const CourseTrackerShowcase = () => {
  // Sample data for the showcase
  const sampleLessons = [
    { time: '15:47', title: 'اسم الدرس', status: STATUS.COMPLETED },
    { time: '20:23', title: 'اسم الدرس', status: STATUS.IN_PROGRESS },
    { time: '12:11', title: 'اسم الدرس', status: STATUS.NOT_STARTED },
    { time: '85:45', title: 'اسم الدرس', status: STATUS.NOT_STARTED },
    { time: '17:45', title: 'اسم الدرس', status: STATUS.NOT_STARTED },
  ];

  return (
    <div className="flex flex-col gap-6 w-full max-w-[477px] p-4">
      <h2 className="font-[Noto Kufi Arabic] font-bold text-xl text-right mb-4">مكونات تتبع الدروس</h2>
      
      {/* Completed course */}
      <CourseProgressTracker 
        title="اسم الدرس" 
        duration="1 ساعة و 18 دقيقة" 
        status={STATUS.COMPLETED}
      />
      
      {/* In-progress course */}
      <CourseProgressTracker 
        title="اسم الدرس" 
        duration="1 ساعة و 18 دقيقة" 
        progress={6}
        status={STATUS.IN_PROGRESS}
      />
      
      {/* Expanded course with lessons */}
      <div className="relative">
        <CourseProgressTracker 
          title="اسم الدرس" 
          duration="1 ساعة و 18 دقيقة" 
          progress={6}
          status={STATUS.IN_PROGRESS}
          lessons={sampleLessons}
        />
        {/* This div forces the component to display in expanded state for showcase purposes */}
        <style jsx global>{`
          div:has(> #expanded-showcase) > div:first-child {
            background-color: #E6E6E6;
            border-radius: 8px 8px 0 0;
          }
          div:has(> #expanded-showcase) > div:nth-child(2) {
            display: flex;
          }
        `}</style>
        <div id="expanded-showcase" className="hidden"></div>
      </div>
    </div>
  );
};

export default CourseTrackerShowcase;
