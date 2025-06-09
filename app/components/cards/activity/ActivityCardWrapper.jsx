'use client';

import React from 'react';
import ActivityCard from './ActivityCard';

export default function ActivityCardWrapper(props) {
  // Event handler defined in the client component
  const handleClick = () => {
    console.log('Activity card clicked');
    // Add your activity card click logic here
  };
  
  return (
    <ActivityCard
      {...props}
      onClick={handleClick}
    />
  );
}
