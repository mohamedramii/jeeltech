'use client';
import React from 'react';
import Image from 'next/image';
import {
  ChatCircleDots,
  Robot,
  Brain,
  Rocket,
  Lightbulb,
  Code,
  ChatText
} from '@phosphor-icons/react';
import AIChatInputWrapper from '@/app/components/chat/AIChatInputWrapper';

export default function AIAssistantPage() {
  const chatButtons = [
    {
      id: 1,
      text: 'تعليم برمجة بايثون',
      icon: <Code weight="bold" size={20} />
    },
    {
      id: 2,
      text: 'تطبيقات الذكاء الاصطناعي',
      icon: <Robot weight="bold" size={20} />
    },
    {
      id: 3,
      text: 'تحليل البيانات باستخدام بايثون',
      icon: <Brain weight="bold" size={20} />
    },
    {
      id: 4,
      text: 'تصميم وتطوير الواجهات',
      icon: <Rocket weight="bold" size={20} />
    },
    {
      id: 5,
      text: 'أفكار لمشاريع تعليمية',
      icon: <Lightbulb weight="bold" size={20} />
    }
  ];

  return (
    <div className="flex flex-row gap-8 p-6 h-full">
      <div className="w-[350px] flex flex-col gap-6">
        <h1 className="text-[32px] font-bold font-['Noto_Kufi_Arabic']">مساعد الذكاء الاصطناعي</h1>
       
        <div className="flex flex-row gap-4 justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#CCF8E7] hover:bg-[#01DD86] transition-colors cursor-pointer">
            <ChatCircleDots weight="bold" size={24} color="#222222" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#CCF8E7] hover:bg-[#01DD86] transition-colors cursor-pointer">
            <Robot weight="bold" size={24} color="#222222" />
          </div>
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#CCF8E7] hover:bg-[#01DD86] transition-colors cursor-pointer">
            <Brain weight="bold" size={24} color="#222222" />
          </div>
        </div>
       
        <div className="flex flex-col gap-3">
          {chatButtons.map(button => (
            <button
              key={button.id}
              className="flex flex-row items-center justify-end gap-3 p-3 border border-[#CECECE] rounded-xl hover:border-[#01DD86] hover:bg-[#E9FFF7] transition-all"
            >
              <span className="text-[16px] text-[#222222] font-['Noto_Kufi_Arabic']">{button.text}</span>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#CCF8E7]">
                {button.icon}
              </div>
            </button>
          ))}
        </div>
      </div>
     
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <span className="text-lg text-[#6C6C6C] font-['Noto_Kufi_Arabic']">دردشة جديدة</span>
          <h2 className="text-2xl font-bold font-['Noto_Kufi_Arabic']">كيف اساعدك اليوم</h2>
        </div>
       
        <div className="flex-1 bg-[#F9F9F9] rounded-xl p-4 overflow-hidden relative flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 flex flex-col justify-center items-center">
            <div className="text-center">
              <ChatText size={48} weight="fill" color="#CECECE" className="mx-auto mb-4" />
              <p className="text-[#6C6C6C] text-xl font-['Noto_Kufi_Arabic']">ابدأ محادثة جديدة</p>
            </div>
          </div>
         
          <div className="h-auto">
            <AIChatInputWrapper variant="A" />
          </div>
        </div>
      </div>
    </div>
  );
}