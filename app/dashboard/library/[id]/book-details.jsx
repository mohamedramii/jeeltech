'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AIChatBox from '@/app/components/chat/AIChatBox';
import { Clock } from '@phosphor-icons/react';

// محتوى نص الكتاب
const bookContent = `
تقدم البرمجة للأطفال فرصة فريدة لتعلم مهارات التفكير المنطقي وحل المشكلات. ليست مجرد مهارة تقنية للمحترفين فقط، بل هي أداة لتطوير مهارات التفكير النقدي والإبداعي لدى الأطفال.

ربما تبدأ رحلة تعلم البرمجة عادة من خلال ألعاب تفاعلية وتطبيقات تعليمية مصممة خصيصاً للأطفال. تجعل عملية التعلم ممتعة وتفاعلية، مما يسهل على الأطفال عن الاستمتاع بالتعلم وفهم المفاهيم بطريقة مرحة وسلسة. هناك العديد من التطبيقات التي توفر للأطفال تعلم البرمجة بطريقة مرنة، مثل استخدام التحديات الكرتونية أو الألعاب التفاعلية.

عندما يتعلم الأطفال البرمجة، يكتسبون ويتعلمون أيضاً كيفية تحليل المشكلات. فقط كيفية كتابة الأكواد أو تسلسل الخطوات، يتعلمون كيف يحللون المشاكل إلى خطوات أصغر في مجالات أخرى من حياتهم.

علاوة على ذلك، البرمجة تعزز من قدرة الأطفال على التعاون والتواصل المنطقي. العديد من المشاريع البرمجية تتطلب العمل مع الآخرين مما يساعد الأطفال على تعلم كيفية التواصل والتعاون مع زملائهم.

من المهم أن نفهم أن إدخال البرمجة في التعليم يساعد في إعداد الأطفال لمستقبل تكنولوجي بشكل متزايد. هذه الخبرات ستفيدهم في حالات أخرى في حياتهم، سواء اختاروا مهنة في مجال التكنولوجيا أم لا.

إن إدخال البرمجة في التعليم يساعد على إعداد الأطفال لاستخدام التكنولوجيا في حياتهم بشكل إيجابي. من المهم أن نعلم أن تعليم الأطفال البرمجة لا يعني أننا نعدهم فقط لمهن تقنية، بل نزودهم بمهارات ستفيدهم في العديد من المجالات الأخرى.
`;

// بيانات الكتب في المكتبة
const books = [
  {
    id: '1',
    title: 'تعليم البرمجة للأطفال',
    content: bookContent,
    imageSrc: '/Digital-Library/Frame 1984078598.png',
    category: 'الكتب التعليمية',
    totalPages: 30,
    currentPage: 15
  },
  {
    id: '2',
    title: 'الذكاء الاصطناعي للمبتدئين',
    content: bookContent,
    imageSrc: '/Digital-Library/Frame 1984078598-1.png',
    category: 'الكتب التعليمية',
    totalPages: 25,
    currentPage: 10
  },
  {
    id: '3',
    title: 'الحوسبة السحابية',
    content: bookContent,
    imageSrc: '/Digital-Library/Frame 1984078598-2.png',
    category: 'الكتب التعليمية',
    totalPages: 20,
    currentPage: 5
  },
  {
    id: '4',
    title: 'تطوير الويب للمبتدئين',
    content: bookContent,
    imageSrc: '/Digital-Library/Frame 1984078598-3.png',
    category: 'الكتب التعليمية',
    totalPages: 22,
    currentPage: 8
  },
  {
    id: '5',
    title: 'أساسيات الأمن السيبراني',
    content: bookContent,
    imageSrc: '/Digital-Library/Frame 1984078598-4.png',
    category: 'الكتب التعليمية',
    totalPages: 18,
    currentPage: 12
  }
];

export default function BookDetailsPage({ bookId }) {
  const router = useRouter();
  const [book, setBook] = useState(null);
  
  useEffect(() => {
    const foundBook = books.find(b => b.id === bookId);
    if (foundBook) {
      setBook(foundBook);
    } else {
      router.push('/dashboard/library');
    }
  }, [bookId, router]);

  if (!book) {
    return <div className="p-8 text-center">جاري تحميل الكتاب...</div>;
  }

  const goToPreviousPage = () => {
    console.log('الانتقال إلى الصفحة السابقة');
  };

  const goToNextPage = () => {
    console.log('الانتقال إلى الصفحة التالية');
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      <div className="box-sizing-border w-full md:w-[1101px] h-[781px] bg-white border border-[#CECECE] rounded-[16px]">
        <div className="box-sizing-border flex flex-row justify-between items-center p-6 border-b border-[#CECECE]">
          <div className="font-['Noto_Kufi_Arabic'] font-medium text-base text-center text-[#222222]">
            {book.currentPage} / {book.totalPages}
          </div>
          <div className="font-['Noto_Kufi_Arabic'] font-bold text-base text-center text-[#222222]">
            {book.title}
          </div>
          <button className="flex justify-center items-center p-[10px] w-[44px] h-[44px] bg-white border border-[#CECECE] rounded-[12px]">
            <Clock size={24} weight="regular" color="#222222" />
          </button>
        </div>

        <div className="p-6 h-[565px] overflow-y-auto">
          <article className="font-['Noto_Kufi_Arabic'] font-normal text-base leading-6 text-right text-[#222222]">
            {book.content}
          </article>
        </div>

        <div className="box-sizing-border flex flex-row justify-center items-center gap-6 p-6 border-t border-[#CECECE]">
          <button 
            onClick={goToPreviousPage}
            className="flex justify-center items-center px-4 py-3 h-[48px] bg-white border border-[#CECECE] rounded-[16px]"
          >
            <span className="font-['Noto_Kufi_Arabic'] font-normal text-base text-right text-[#222222]">
              الصفحة السابقة
            </span>
          </button>
          <button 
            onClick={goToNextPage}
            className="flex justify-center items-center px-4 py-3 h-[48px] bg-white border border-[#CECECE] rounded-[16px]"
          >
            <span className="font-['Noto_Kufi_Arabic'] font-normal text-base text-right text-[#222222]">
              الصفحة التالية
            </span>
          </button>
        </div>
      </div>

      <div className="box-sizing-border w-full md:w-[715px] h-[781px] bg-white border border-[#CECECE] rounded-[16px] p-6">
        <div className="h-full flex flex-col">
          <h3 className="font-['Noto_Kufi_Arabic'] font-bold text-lg mb-4 text-right">
            اسأل عن الكتاب
          </h3>
          <div className="flex-grow">
            <AIChatBox className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
