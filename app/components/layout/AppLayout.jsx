'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/app/components/navbar';

export default function AppLayout({ children }) {
  const pathname = usePathname();
  
  const getActivePage = () => {
    if (pathname === '/dashboard/home' || pathname === '/') {
      return 'الرئيسية';
    } else if (pathname.includes('/dashboard/courses')) {
      return 'الدورات التدريبية';
    } else if (pathname.includes('/exams')) {
      return 'المعلم الذكى AI';
    } else if (pathname.includes('/dashboard/library')) {
      return 'المكتبة الرقمية';
    } else if (pathname.includes('/podcast')) {
      return 'بودكاست';
    }
    return 'الرئيسية';
  };

  return (
    <>
      <Navbar activePage={getActivePage()} />
      <div className="h-full w-full bg-[#F1F1F1] flex flex-col justify-start items-center px-4 pb-2">
        <div className="w-full bg-white rounded-2xl overflow-hidden p-6 ">
          {children}
        </div>
      </div>
    </>
  );
}
