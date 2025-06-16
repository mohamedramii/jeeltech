'use client';

import React from 'react';
import CourseCard from './CourseCard';
import Link from 'next/link';

export default function CourseCardWrapper(props) {
  return (
    <Link href={`/dashboard/course/${props.id}`} className="block no-underline">
      <CourseCard
        {...props}
        onClick={() => console.log('Course clicked: ', props.title)}
      />
    </Link>
  );
}
