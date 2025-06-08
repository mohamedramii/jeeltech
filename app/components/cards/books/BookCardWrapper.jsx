'use client';

import React from 'react';
import BookCard from './BookCard';

export default function BookCardWrapper(props) {
  // Event handler defined in the client component
  const handleClick = () => {
    console.log('Book clicked: ', props.title);
    // Add your book click logic here
    // For example, navigate to book reading page
  };
  
  return (
    <BookCard
      {...props}
      onClick={handleClick}
    />
  );
}
