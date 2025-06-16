'use client';

import React, { useState } from 'react';
import AIChatInput from './AIChatInput';
import Image from 'next/image';

// User message component
function UserMessage({ message }) {
  return (
    <div className="flex  mb-4 gap-2">
      {/* User Avatar */}
      <div className="w-10 h-10 rounded-full overflow-hidden bg-[#CCF8E7]">
        <Image 
          src="/user.png" 
          alt="User" 
          width={40} 
          height={40}
        />
      </div>
      {/* Message bubble */}
      <div className="py-3 px-4 bg-[#01DD86] rounded-[12px] max-w-[359px]">
        <p className="text-sm text-white text-right font-['Noto_Kufi_Arabic']">{message}</p>
      </div>
      
    </div>
  );
}

// AI message component
function AIMessage({ message }) {
  return (
    <div className="flex justify-end mb-4 gap-2">
    
      
      {/* Message bubble */}
      <div className="py-4 px-4 bg-[rgba(34,34,34,0.05)] rounded-[12px] max-w-[537px]">
        <p className="text-sm text-[#222222] text-right font-['Noto_Kufi_Arabic'] leading-[21px]">
          {message}
        </p>
      </div>
        {/* AI Avatar */}
        <div className="w-10 h-10 rounded-full bg-[rgba(34,34,34,0.05)] flex items-center justify-center">
        <Image 
          src="/logoai.svg" 
          alt="JeelTech AI" 
          width={32} 
          height={24}
        />
      </div>
    </div>
  );
}

export default function AIChatBox({
  className = '',
  variant = 'B', 
  ...props
}) {
  // Predefined messages for the chat (initial state)
  const [messages, setMessages] = useState([
    { 
      text: 'كيف يمكن أن تجعل التعلم الإلكتروني ممتعًا للأطفال؟', 
      isUser: true 
    },
    { 
      text: 'مرحبًا! التعلم الإلكتروني للأطفال هو وسيلة رائعة لجعل التعليم ممتعًا وتفاعليًا. يمكن للأطفال الوصول إلى مجموعة متنوعة من الدروس والأنشطة عبر الإنترنت، مما يساعدهم على تطوير مهارات جديدة في بيئة مرنة. هل لديك أسئلة معينة حول كيفية بدء التعلم الإلكتروني أو الموارد المتاحة؟', 
      isUser: false 
    },
  ]);
  
  // Handle sending a new message
  const handleSendMessage = (message) => {
    if (!message.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: message, isUser: true }]);
    
    // Add fixed AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: 'شكرًا على سؤالك! يمكن تحسين تجربة التعلم الإلكتروني للأطفال من خلال استخدام الألعاب التعليمية، والمحتوى التفاعلي، والفيديوهات القصيرة المسلية. أيضًا يساعد وضع أهداف صغيرة ومكافآت على تحفيز الأطفال للاستمرار في التعلم. هل تريد اقتراحات محددة لفئة عمرية معينة؟',
        isUser: false
      }]);
    }, 1000);
  };
  
  return (
    <div 
      className={`
        w-full max-w-[912px]  border border-[#CECECE] rounded-2xl p-4
        flex flex-col h-full
        ${className}
      `}
      {...props}
    >
      {/* Chat messages area */}
      <div className="flex-grow h-[300px] overflow-y-auto mb-4 p-2">
        {messages.map((msg, index) => (
          msg.isUser ? 
            <UserMessage key={index} message={msg.text} /> : 
            <AIMessage key={index} message={msg.text} />
        ))}
      </div>
      
      {/* Input area */}
      <div className="w-full">
        <AIChatInput onSendMessage={handleSendMessage} variant={variant} />
      </div>
    </div>
  );
}
