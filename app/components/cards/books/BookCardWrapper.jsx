'use client';

import React from 'react';
import Link from 'next/link';
import BookCard from './BookCard';

export default function BookCardWrapper(props) {
  return (
    <Link href={`/dashboard/library/${props.id}`} className="block no-underline">
      <BookCard
        {...props}
        onClick={() => console.log('Book clicked: ', props.title)}
      />
    </Link>
  );
}
