'use client';

import React from 'react';
import CategoryCard from './CategoryCard';

export default function CategoryCardWrapper(props) {
  // Event handler defined in the client component
  const handleClick = () => {
    console.log('Category clicked: ', props.title);
    // Add your category click logic here
    // For example, navigate to category page
  };
  
  return (
    <CategoryCard
      {...props}
      onClick={handleClick}
    />
  );
}
