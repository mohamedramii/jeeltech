'use client';

import React from 'react';
import CourseProgressCard from './CourseProgressCard';

/**
 * Client wrapper for CourseProgressCard component
 * This component is used to handle client-side events and pass them to CourseProgressCard
 */
export default function CourseProgressCardWrapper({
  title,
  duration,
  imageSrc,
  progress,
  completedLessons,
  totalLessons
}) {
  const handleContinueLearning = () => {
    console.log('استمر في التعلم', title);
  };

  return (
    <CourseProgressCard
      title={title}
      duration={duration}
      imageSrc={imageSrc}
      progress={progress}
      completedLessons={completedLessons}
      totalLessons={totalLessons}
      onClick={handleContinueLearning}
    />
  );
}
