'use client';

/* 
هذا المكون هو مكون على جانب العميل فقط 
لا يمكن تقديمه على جانب الخادم
*/
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
// استيراد ديناميكي لتجنب مشاكل التوافق بين الخادم والعميل
// استيراد ديناميكي مع تعطيل التقديم على جانب الخادم صراحةً
const ReactApexChart = dynamic(() => import('react-apexcharts'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] flex items-center justify-center bg-white">
      <p className="text-gray-400">جاري تحميل الرسم البياني...</p>
    </div>
  ) 
});

/**
 * مكون رسم بياني دائري لتوزيع التعلم بين الكورسات
 * @param {Object} props - خصائص المكون
 * @param {Object[]} props.courses - بيانات الكورسات مع الساعات
 * @param {string} props.totalTime - إجمالي الوقت كنص
 * @param {string} props.className - فئات CSS إضافية
 */
export default function CourseDistributionChart({
  courses = [
    { name: 'HTML', hours: 6, minutes: 15, color: '#E34C26' },
    { name: 'CSS', hours: 3, minutes: 30, color: '#264DE4' },
    { name: 'Scratch', hours: 9, minutes: 45, color: '#01DD86' },
    { name: 'JavaScript', hours: 1, minutes: 30, color: '#F0DB4F' }
  ],
  totalTime = "6 ساعات و 30 دقيقة",
  className = "",
  ...props
}) {
  // حالة للتحقق من أننا على جانب العميل
  const [isClient, setIsClient] = useState(false);

  // التأكد من أننا على جانب العميل قبل عرض الرسم البياني
  useEffect(() => {
    setIsClient(true);
  }, []);
  // تحويل الساعات والدقائق إلى دقائق كلية لكل دورة
  const seriesData = courses.map(course => (course.hours * 60) + course.minutes);
  const colors = courses.map(course => course.color);
 
  // إعدادات الرسم البياني
  const chartOptions = {
    chart: {
      type: 'donut',
      fontFamily: 'Noto Kufi Arabic, sans-serif',
    },
    colors: colors,
    labels: courses.map(course => course.name),
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '14px',
              fontFamily: 'Noto Kufi Arabic, sans-serif',
              color: '#222222',
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: '24px',
              fontFamily: 'Noto Kufi Arabic, sans-serif',
              fontWeight: 700,
              color: '#222222',
              formatter: function(val) {
                // تحويل القيمة إلى ساعات ودقائق
                const hours = Math.floor(val / 60);
                const minutes = Math.floor(val % 60);
                return `${hours} س ${minutes} د`;
              }
            },
            total: {
              show: true,
              label: 'إجمالي الوقت',
              color: '#222222',
              fontFamily: 'Noto Kufi Arabic, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              formatter: function() {
                // تحليل totalTime وإعادة ترتيبه
                const parts = totalTime.split(' ');
                if (parts.length >= 4) {
                  // إذا كان التنسيق مثل "6 ساعات و 30 دقيقة"
                  const hours = parts[0];
                  const minutes = parts[3];
                  return `${hours} س ${minutes} د`;
                } else if (totalTime.includes('س')) {
                  // إذا كان التنسيق مثل "30س"
                  const match = totalTime.match(/(\d+)س/);
                  if (match) {
                    return `${match[1]} ساعة`;
                  }
                }
                return totalTime;
              }
            }
          }
        }
      }
    },
    legend: {
      show: false // إخفاء Legend الافتراضية
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 250
          }
        }
      }
    ],
    stroke: {
      width: 0
    }
  };

  const series = seriesData;

  // تقسيم الكورسات إلى أعمدة (كل عمود 5 عناصر كحد أقصى)
  const createColumns = (items, itemsPerColumn = 5) => {
    const columns = [];
    for (let i = 0; i < items.length; i += itemsPerColumn) {
      columns.push(items.slice(i, i + itemsPerColumn));
    }
    return columns;
  };

  const courseColumns = createColumns(courses, 5);

  return (
    <div
      className={`box-border flex flex-col justify-center items-center p-6 relative w-full  h-auto bg-white border border-[#CECECE] rounded-2xl ${className}`}
      {...props}
    >
      <h2 className="font-['Noto_Kufi_Arabic'] font-bold text-lg leading-[27px] text-right text-[#222222] mb-4 w-full">
        توزيع التعلم بين الكورسات
      </h2>
     
      <div className="w-full h-[300px] mb-4">
        {/* تقديم الرسم البياني فقط على جانب العميل */}
        {isClient && (
          <ReactApexChart
            options={chartOptions}
            series={series}
            type="donut"
            height="100%"
            width="100%"
          />
        )}
      </div>

      {/* Legend مخصص */}
      <div className="flex flex-wrap justify-start gap-4 w-full">
        {courseColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-2">
            {column.map((course) => (
              <div
                key={course.name}
                className="flex items-center gap-2 font-['Noto_Kufi_Arabic'] text-sm"
              >
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: course.color }}
                ></div>
                <span className="text-[#222222] flex items-center gap-1">
                  <span>{course.name}</span>
                  <span className='font-semibold'>{course.hours}</span>
                  <span className='font-semibold'>ساعة</span>
                  <span className='font-semibold'>{course.minutes}</span>
                  <span className='font-semibold'>دقيقة</span>
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}