'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import AIChatBox from '@/app/components/chat/AIChatBox';
import { Clock } from '@phosphor-icons/react';

export default function BookDetailsClient({ book }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(book.currentPage);
  
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < book.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToLibrary = () => {
    router.push('/dashboard/library');
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 ">
     
      <div className="box-sizing-border w-full md:w-[715px] h-[full] ">
        <div className="h-full flex flex-col">
          
          <div className="flex-grow">
            <AIChatBox className="h-full" variant="A" />
          </div>
        </div>
      </div>
       <div className="box-sizing-border w-full md:w-[1101px] h-full bg-white border border-[#CECECE] rounded-[16px]">
        <div className="box-sizing-border flex flex-row justify-between items-center p-6 border-b border-[#CECECE]">
         
        <div className="font-['Noto_Kufi_Arabic'] font-bold text-base text-center text-[#222222]">
            {book.title}
          </div>
          <div className="font-['Noto_Kufi_Arabic'] font-medium text-base text-center text-[#222222]">
            {currentPage} / {book.totalPages}
          </div>
         
          
        </div>

        <div className="p-6 h-[565px] overflow-y-auto">
          <article className="font-['Noto_Kufi_Arabic'] font-normal text-base leading-6 text-right text-[#222222]">
            {book.content}
          </article>
        </div>

        <div className="box-sizing-border flex flex-row justify-center items-center gap-6 p-6 border-t border-[#CECECE]">
          <button 
            onClick={goToPreviousPage}
            disabled={currentPage <= 1}
            className={`flex justify-center items-center px-4 py-3 h-[48px] bg-white border border-[#CECECE] rounded-[16px] ${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#E9FFF7]'}`}
          >
            <span className="font-['Noto_Kufi_Arabic'] font-normal text-base text-right text-[#222222]">
              الصفحة السابقة
            </span>
          </button>
          <button 
            onClick={goToNextPage}
            disabled={currentPage >= book.totalPages}
            className={`flex justify-center items-center px-4 py-3 h-[48px] bg-white border border-[#CECECE] rounded-[16px] ${currentPage >= book.totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#E9FFF7]'}`}
          >
            <span className="font-['Noto_Kufi_Arabic'] font-normal text-base text-right text-[#222222]">
              الصفحة التالية
            </span>
          </button>
        </div>
      </div>

    </div>
  );
}
