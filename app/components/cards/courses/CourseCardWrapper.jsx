'use client';

import React from 'react';
import CourseCard from './CourseCard';

export default function CourseCardWrapper(props) {
  // Event handler defined in the client component
  const handleClick = () => {
    console.log('Course clicked: ', props.title);
    // Add your course click logic here
    // For example, navigate to course details page
  };
  
  return (
    <CourseCard
      {...props}
      onClick={handleClick}
    />
  );
}
