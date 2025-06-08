'use client';
import React, { useState } from 'react';
import Image from 'next/image';

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
    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
  >
    <path d="M19 9L12 16L5 9" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Lesson item component
const LessonItem = ({ time, title, status }) => {
  let statusIcon;
  
  switch(status) {
    case STATUS.COMPLETED:
      statusIcon = (
        <div className="flex justify-center items-center w-8 h-8 bg-[#01DD86] rounded-full">
          <CheckIcon />
        </div>
      );
      break;
    case STATUS.IN_PROGRESS:
      statusIcon = (
        <div className="relative w-8 h-8">
          <div className="absolute w-8 h-8 bg-[#CCF8E7] rounded-full"></div>
          <div className="absolute w-8 h-8 flex justify-center items-center">
            <PlayIcon />
          </div>
        </div>
      );
      break;
    default:
      statusIcon = (
        <div className="w-8 h-8 border-2 border-[#CECECE] rounded-full"></div>
      );
  }

  return (
    <div className="flex flex-row justify-between items-center w-full">
      <div className="flex flex-row items-center gap-4">
        {statusIcon}
        <span className="font-[Noto Kufi Arabic] font-bold text-base text-[#222222] text-right">{title}</span>
      </div>
      <span className="font-[Noto Kufi Arabic] text-base text-[#6C6C6C]">{time}</span>
    </div>
  );
};

// Main component
const CourseProgressTracker = ({ 
  title = "اسم الدرس", 
  duration = "1 ساعة و 18 دقيقة", 
  progress = 0, 
  status = STATUS.NOT_STARTED,
  lessons = [] 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Determine the status icon based on the course status
  let statusIcon;
  if (status === STATUS.COMPLETED) {
    statusIcon = (
      <div className="flex justify-center items-center w-10 h-10 bg-[#01DD86] rounded-full">
        <CheckIcon />
      </div>
    );
  } else if (status === STATUS.IN_PROGRESS || progress > 0) {
    statusIcon = (
      <div className="relative w-10 h-10">
        <svg width="40" height="46" viewBox="0 0 40 40">
          {/* Background circle */}
          <circle 
            cx="20" 
            cy="20" 
            r="19" 
            fill="transparent" 
            stroke="#CECECE" 
            strokeWidth="2" 
          />
          {/* Progress circle */}
          <circle 
            cx="20" 
            cy="20" 
            r="19" 
            fill="transparent" 
            stroke="#01DD86" 
            strokeWidth="4" 
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 50 * progress / 100} ${2 * Math.PI * 50 * (100 - progress) / 100}`}
            strokeDashoffset="0"
            transform="rotate(-90 20 20)"
          />
          {/* Percentage text */}
          <text 
            x="20" 
            y="25" 
            textAnchor="middle" 
            fontFamily="Syne" 
            fontSize="14" 
            fill="#222222"
          >
            {progress}%
          </text>
        </svg>
      </div>
    );
  } else {
    statusIcon = (
      <div className="w-10 h-10 border-2 border-[#CECECE] rounded-full"></div>
    );
  }

  return (
    <div className={`box-border flex flex-col w-full max-w-[477px] rounded-lg border border-[#CECECE] ${isOpen ? 'bg-white' : 'bg-white'}`}>
      {/* Header section */}
      <div 
        className={`flex flex-row justify-between items-center p-4 gap-[189px] cursor-pointer ${isOpen ? 'bg-[#E6E6E6] rounded-t-lg' : 'bg-white rounded-lg'}`}
        onClick={toggleOpen}
      >
     
        
        <div className="flex flex-row items-center gap-4 flex-grow justify-end">
        {statusIcon}

          <div className="flex flex-col items-end">
            <h3 className="font-[Noto Kufi Arabic] font-bold text-base leading-6 text-[#222222] text-right w-full">
              {title}
            </h3>
            <p className="font-[Noto Kufi Arabic] text-base leading-6 text-[#6C6C6C] text-right w-full">
              {duration}
            </p>
          </div>
        </div>
        <div>
          <ArrowDownIcon isOpen={isOpen} />
        </div>
      </div>
      
      {/* Expanded content */}
      {isOpen && (
        <div className="relative flex flex-col p-6 gap-10 bg-white">
          {/* Lessons list */}
          {lessons.map((lesson, index) => (
            <div key={index} className="relative">
              <LessonItem 
                time={lesson.time} 
                title={lesson.title} 
                status={lesson.status} 
              />
              
              {/* Connecting dashed line */}
              {index < lessons.length - 1 && (
                <div className="absolute left-5 top-8 w-0 h-10 border-l border-dashed border-[#CECECE]"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseProgressTracker;
