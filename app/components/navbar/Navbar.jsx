'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavbarButton from './NavbarButton';
import { Gauge, GraduationCap, Books, ChalkboardTeacher, Brain, Bell, User } from '@phosphor-icons/react';


export default function Navbar({ activePage = 'الرئيسية' }) {
  const [hoverItem, setHoverItem] = useState(null);
  


  // Navigation items
  const navItems = [
    { id: 'home', text: 'الرئيسية', icon: 'Gauge', path: '/dashboard/home' },
    { id: 'courses', text: 'الدورات التدريبية', icon: 'GraduationCap', path: '/dashboard/courses' },
    { id: 'library', text: 'المكتبة الرقمية', icon: 'Books', path: '/dashboard/library' },
    { id: 'exams', text: 'المعلم الذكى AI', icon: 'Brain', path: '/dashboard/exams' },
    { id: 'stats', text: 'احصائيات التعلم', icon: 'ChalkboardTeacher', path: '/dashboard/stats' },
    { id: 'podcast', text: 'بودكاست', icon: 'Broadcast', path: '/dashboard/podcast', comingSoon: true }
  ];

  // Get button state based on item
  const getButtonState = (item) => {
    if (item.text === activePage) return 'selected';
    if (item.id === hoverItem) return 'hover';
    if (item.id === 'home' && item.text !== activePage) return 'default'; // For the white button in the image
    return 'non-selected';
  };

  return (
    <header className="flex justify-between items-center py-5 px-10 bg-[#f1f1f1]">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image src="/logo/logo.svg" alt="JeelTech Logo" width={175} height={48} />
          </div>
        </Link>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex flex-row items-center p-5 gap-[25px] relative w-auto h-[88px]   ">
        {navItems.map((item) => (
          <Link href={item.path} key={item.id} className="no-underline">
            <NavbarButton
              text={item.text}
              iconName={item.icon}
              state={getButtonState(item)}
              showComingSoon={item.comingSoon}
              onMouseEnter={() => setHoverItem(item.id)}
              onMouseLeave={() => setHoverItem(null)}
            />
          </Link>
        ))}
      </div>
      
      {/* User Section */}
      <div className="flex items-center gap-4">
        <button className="relative w-10 h-10 rounded-full bg-[#01dd86] flex items-center justify-center">
          <Bell size={24} color="#fff" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#F1F1F1] flex items-center justify-center">
            <User size={24} color="#535353" />
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-[#222222]">حسام غانم</p>
            <p className="text-xs text-[#535353]">hossam215@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
}
