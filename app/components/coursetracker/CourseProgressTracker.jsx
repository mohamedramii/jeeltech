'use client';
import React, { useState } from 'react';

// Define the status types as constants
const STATUS = {
  COMPLETED: 'completed',
  IN_PROGRESS: 'in-progress',
  NOT_STARTED: 'not-started'
};

// Check icon for completed items
const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6668 5L7.50016 14.1667L3.3335 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Play icon for in-progress items
const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 10L5 3.33V16.67L15 10Z" fill="#01DD86"/>
  </svg>
);

// Arrow icon for expanding/collapsing
const ArrowDownIcon = ({ isOpen }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ 
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s ease'
    }}
  >
    <path d="M19 9L12 16L5 9" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Progress Circle Component
const ProgressCircle = ({ progress }) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center justify-center w-10 h-10">
      <svg width="40" height="40" className="transform -rotate-90">
        {/* Background circle */}
        <circle 
          cx="20" 
          cy="20" 
          r={radius}
          fill="transparent" 
          stroke="#CECECE" 
          strokeWidth="2" 
        />
        {/* Progress circle */}
        <circle 
          cx="20" 
          cy="20" 
          r={radius}
          fill="transparent" 
          stroke="#01DD86" 
          strokeWidth="3" 
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
      </svg>
      {/* Percentage text - positioned absolutely over the SVG */}
      <div className="absolute flex items-center justify-center">
        <span className="text-xs font-bold text-[#222222]" style={{ fontFamily: 'Syne' }}>
          {progress}%
        </span>
      </div>
    </div>
  );
};

// Lesson item component
const LessonItem = ({ time, title, status }) => {
  let statusIcon;
  
  switch(status) {
    case STATUS.COMPLETED:
      statusIcon = (
        <div className="flex justify-center items-center w-8 h-8 bg-[#01DD86] rounded-full flex-shrink-0">
          <CheckIcon />
        </div>
      );
      break;
    case STATUS.IN_PROGRESS:
      statusIcon = (
        <div className="flex justify-center items-center w-8 h-8 bg-[#CCF8E7] rounded-full flex-shrink-0">
          <PlayIcon />
        </div>
      );
      break;
    default:
      statusIcon = (
        <div className="w-8 h-8 border-2 border-[#CECECE] rounded-full flex-shrink-0"></div>
      );
  }

  return (
    <div className="flex flex-row justify-between items-center w-full gap-4">
      <div className="flex flex-row items-center gap-4 flex-1">
        {statusIcon}
        <span className="font-bold text-base text-[#222222] text-right flex-1" style={{ fontFamily: 'Noto Kufi Arabic' }}>
          {title}
        </span>
      </div>
      <span className="text-base text-[#6C6C6C] flex-shrink-0" style={{ fontFamily: 'Noto Kufi Arabic' }}>
        {time}
      </span>
    </div>
  );
};

// Main component
const CourseProgressTracker = ({ 
  title = "دورة تحليل البيانات", 
  duration = "1 ساعة و 50 دقيقة", 
  progress = 75, 
  status = STATUS.IN_PROGRESS,
  lessons = [
    { title: "مقدمة في تحليل البيانات", time: "15 دقيقة", status: STATUS.COMPLETED },
    { title: "أدوات التحليل الأساسية", time: "20 دقيقة", status: STATUS.COMPLETED },
    { title: "تطبيق عملي", time: "25 دقيقة", status: STATUS.IN_PROGRESS },
    { title: "التقييم النهائي", time: "10 دقائق", status: STATUS.NOT_STARTED }
  ]
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Determine the status icon based on the course status
  let statusIcon;
  if (status === STATUS.COMPLETED) {
    statusIcon = (
      <div className="flex justify-center items-center w-10 h-10 bg-[#01DD86] rounded-full flex-shrink-0">
        <CheckIcon />
      </div>
    );
  } else if (status === STATUS.IN_PROGRESS || progress > 0) {
    statusIcon = <ProgressCircle progress={progress} />;
  } else {
    statusIcon = (
      <div className="w-10 h-10 border-2 border-[#CECECE] rounded-full flex-shrink-0"></div>
    );
  }

  return (
    <div className="flex flex-col w-full  mx-auto rounded-lg border border-[#CECECE] bg-white overflow-hidden">
      {/* Header section */}
      <div 
        className={`flex flex-row justify-between items-center p-3.5 cursor-pointer transition-colors w-full ${
          isOpen ? 'bg-[#E6E6E6]' : 'bg-white hover:bg-gray-50'
        }`}
        onClick={toggleOpen}
      >
        <div className="flex flex-row items-center gap-4 flex-1">
          {statusIcon}
          <div className="flex flex-col items-end flex-1">
            <h3 className="font-bold text-base leading-6 text-[#222222] text-right w-full" style={{ fontFamily: 'Noto Kufi Arabic' }}>
              {title}
            </h3>
            <p className="text-base leading-6 text-[#6C6C6C] text-right w-full" style={{ fontFamily: 'Noto Kufi Arabic' }}>
              {duration}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <ArrowDownIcon isOpen={isOpen} />
        </div>
      </div>
      
      {/* Expanded content */}
      {isOpen && (
        <div className="flex flex-col p-6 gap-6 bg-white border-t border-[#CECECE]">
          {lessons.map((lesson, index) => (
            <div key={index} className="flex flex-col">
              <LessonItem 
                time={lesson.time} 
                title={lesson.title} 
                status={lesson.status} 
              />
              {/* Connecting dashed line using flex */}
              {index < lessons.length - 1 && (
                <div className="flex justify-start ml-4 mt-2 mb-2">
                  <div className="w-0 h-6 border-l border-dashed border-[#CECECE]"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseProgressTracker;