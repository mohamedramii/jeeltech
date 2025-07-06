'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavbarButton from './NavbarButton';
import { Gauge, GraduationCap, Books, ChalkboardTeacher, Brain, Bell, User } from '@phosphor-icons/react';

export default function Navbar() {
  const pathname = usePathname();
  const [hoverItem, setHoverItem] = useState(null);

  // Navigation items
  const navItems = [
    { id: 'home', text: 'الرئيسية', icon: 'Gauge', path: '/dashboard/home' },
    { id: 'courses', text: 'الدورات التدريبية', icon: 'GraduationCap', path: '/dashboard/courses' },
    { id: 'library', text: 'المكتبة الرقمية', icon: 'Books', path: '/dashboard/library' },
    { id: 'ai', text: 'المعلم الذكى AI', icon: 'Brain', path: '/dashboard/ai' },
    { id: 'stats', text: 'احصائيات التعلم', icon: 'ChalkboardTeacher', path: '/dashboard/stats' },
    { id: 'podcast', text: 'بودكاست', icon: 'Broadcast', path: '/dashboard/podcast', comingSoon: true }
  ];

  const getButtonState = (item) => {
    let isActive = false;
   
    if (item.id === 'home') {
      isActive = pathname === '/dashboard/home' || pathname === '/dashboard';
    } else {
      isActive = pathname === item.path ||
                (pathname.startsWith(item.path + '/') && item.path !== '/dashboard/home');
    }
   
    if (isActive) {
      return 'selected';
    }
   
    if (item.id === hoverItem) {
      return 'hover';
    }
   
    if (item.id === 'home') {
      return 'non-selected';
    }
   
    return 'non-selected';
  };

  return (
    <header 
      className="flex justify-between items-center bg-[#f1f1f1]"
      style={{
        padding: `clamp(0px, 2.6vw, 0px) clamp(16px, 5.2vw, 16px)`,
        minHeight: `clamp(72px, 4.6vw, 88px)`
      }}
    >
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <Link href="/">
          <div className="flex items-center">
            <Image 
              src="/logo/logo.svg" 
              alt="JeelTech Logo" 
              width={175} 
              height={48}
              style={{
                width: `clamp(140px, 9.1vw, 175px)`,
                height: `clamp(38px, 2.5vw, 48px)`
              }}
            />
          </div>
        </Link>
      </div>
     
      {/* Navigation Buttons */}
      <div 
        className="flex flex-row items-center justify-center"
        style={{
          padding: `clamp(16px, 2.6vw, 40px) clamp(8px, 2.1vw, 32px)`,
          gap: `clamp(8px, 1.3vw, 25px)`,
          height: `clamp(72px, 4.6vw, 88px)`
        }}
      >
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
      <div 
        className="flex items-center flex-shrink-0"
        style={{
          gap: `clamp(8px, 0.8vw, 16px)`
        }}
      >
        <button 
          className="relative rounded-full bg-[#01dd86] flex items-center justify-center"
          style={{
            width: `clamp(32px, 2.1vw, 40px)`,
            height: `clamp(32px, 2.1vw, 40px)`
          }}
        >
          <Bell 
            color="#fff" 
            style={{ 
              width: `clamp(18px, 1.25vw, 24px)`, 
              height: `clamp(18px, 1.25vw, 24px)` 
            }} 
          />
          <span 
            className="absolute bg-red-500 rounded-full"
            style={{
              width: `clamp(6px, 0.4vw, 8px)`,
              height: `clamp(6px, 0.4vw, 8px)`,
              top: `clamp(-2px, -0.1vw, -2px)`,
              right: `clamp(-2px, -0.1vw, -2px)`
            }}
          ></span>
        </button>
       
        <div className="flex items-center" style={{ gap: `clamp(4px, 0.4vw, 8px)` }}>
          <div 
            className="rounded-full bg-[#F1F1F1] flex items-center justify-center"
            style={{
              width: `clamp(32px, 2.1vw, 40px)`,
              height: `clamp(32px, 2.1vw, 40px)`
            }}
          >
            <User 
              color="#535353" 
              style={{ 
                width: `clamp(18px, 1.25vw, 24px)`, 
                height: `clamp(18px, 1.25vw, 24px)` 
              }} 
            />
          </div>
          <div className="text-right">
            <p 
              className="font-semibold text-[#222222] whitespace-nowrap"
              style={{ fontSize: `clamp(12px, 0.7vw, 14px)` }}
            >
              حسام غانم
            </p>
            <p 
              className="text-[#535353] whitespace-nowrap"
              style={{ fontSize: `clamp(10px, 0.6vw, 12px)` }}
            >
              hossam215@gmail.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}