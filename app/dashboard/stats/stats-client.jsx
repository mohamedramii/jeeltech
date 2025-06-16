'use client';

import React, { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import ActivityCard from '../../components/cards/activity/ActivityCard';

const LearningHoursChart = dynamic(() => import('../../components/charts/LearningHoursChart'), {
  ssr: false,
  loading: () => <ChartPlaceholder height="400px" />
});

const CompletedLessonsChart = dynamic(() => import('../../components/charts/CompletedLessonsChart'), {
  ssr: false,
  loading: () => <ChartPlaceholder height="400px" />
});

const CourseDistributionChart = dynamic(() => import('../../components/charts/CourseDistributionChart'), {
  ssr: false,
  loading: () => <ChartPlaceholder height="400px" />
});

const LoginCountChart = dynamic(() => import('../../components/charts/LoginCountChart'), {
  ssr: false,
  loading: () => <ChartPlaceholder height="350px" />
});

const TopLessonsChart = dynamic(() => import('../../components/charts/TopLessonsChart'), {
  ssr: false,
  loading: () => <ChartPlaceholder height="400px" />
});

function ChartPlaceholder({ height }) {
  return (
    <div 
      className="w-full rounded-2xl bg-white border border-[#CECECE] p-6 flex items-center justify-center" 
      style={{ height }}
    >
      <div className="text-gray-400 animate-pulse">جاري تحميل المخطط...</div>
    </div>
  );
}


export default function StatsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const activityData = [
    {
      dayCount: "3",
      activityText: "أيام منذ آخر تسجيل دخول"
    },
    {
      dayCount: "5",
      activityText: "إجمالي ساعات التعلم"
    },
    {
      dayCount: "12",
      activityText: "عدد الطلاب المسجلين"
    },
    {
      dayCount: "7",
      activityText: "عدد الكورسات المكتملة"
    },
    {
      dayCount: "10",
      activityText: "عدد الدروس المكتملة"
    }
  ];

  return (
    <div className="w-full max-w-full">

      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {activityData.map((activity, index) => (
            <ActivityCard
              key={index}
              dayCount={activity.dayCount}
              activityText={activity.activityText}
              className="w-full"
            />
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            {isClient && (
              <LearningHoursChart 
                totalHours={35} 
                growthPercentage={1.3} 
                currentMonth="مايو 2024" 
                currentMonthHours={8}
              />
            )}
          </div>
          <div>
            {isClient && (
              <CompletedLessonsChart 
                selectedMonth="مايو 2024"
              />
            )}
          </div>
        </div>
      </div>

      {isClient && (
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Suspense fallback={<ChartPlaceholder height="350px" />}>
              <div className="w-full">
                <LoginCountChart />
              </div>
            </Suspense>
            <Suspense fallback={<ChartPlaceholder height="400px" />}>
              <div>
                <CourseDistributionChart />
              </div>
            </Suspense>
            
            <Suspense fallback={<ChartPlaceholder height="400px" />}>
              <div className="flex justify-center">
                <TopLessonsChart />
              </div>
            </Suspense>
            
          </div>
        </div>
      )}
    </div>
  );
}
