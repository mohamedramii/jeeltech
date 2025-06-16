'use client';

/* 
هذا المكون هو مكون على جانب العميل فقط
لا يمكن تقديمه على الخادم
*/

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { CaretDown } from '@phosphor-icons/react';

// استيراد بشكل ديناميكي لتجنب مشاكل التوافق بين الخادم والعميل
// استيراد ديناميكي مع تعطيل التقديم على الخادم صراحةً
const ReactApexChart = dynamic(() => import('react-apexcharts'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] flex items-center justify-center bg-white">
      <p className="text-gray-400">جاري تحميل الرسم البياني...</p>
    </div>
  ) 
});

/**
 * مكون رسم بياني لعرض إجمالي عدد الساعات التعليمية شهريًا
 * @param {Object} props - خصائص المكون
 * @param {number} props.totalHours - إجمالي عدد الساعات
 * @param {number} props.growthPercentage - نسبة النمو مقارنة بالعام السابق
 * @param {string} props.currentMonth - الشهر الحالي
 * @param {number} props.currentMonthHours - عدد ساعات الشهر الحالي
 * @param {function} props.onPeriodChange - معالج تغيير الفترة الزمنية
 * @param {string} props.className - فئات CSS إضافية
 */
export default function LearningHoursChart({
  totalHours = 35,
  growthPercentage = 1.3,
  currentMonth = "مايو 2024",
  currentMonthHours = 8,
  onPeriodChange,
  className = "",
  ...props
}) {
  const [period, setPeriod] = useState('سنويًا');
  const [isClient, setIsClient] = useState(false);
  
  // التأكد من أننا في البيئة العميل
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // معرف ثابت للرسم البياني لتجنب إعادة الإنشاء
  // إنشاء معرف فريد للرسم البياني عند تهيئة المكون فقط
  const chartId = useMemo(() => `learning-hours-chart-${Math.random().toString(36).substr(2, 9)}`, []);
  
  // بيانات الرسم البياني (ساعات التعلم لكل شهر) - مثبتة في useMemo
  const chartData = useMemo(() => [5, 8, 6, 7, 4, 9, 7, 10, 8, 5, 4, 11], []);
  
  // الشهور العربية - مثبتة في useMemo
  const months = useMemo(() => [
    'يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ], []);
  
  // تهيئة خيارات الرسم البياني - مثبتة في useMemo لتحسين الأداء
  const chartOptions = useMemo(() => ({
    chart: {
      id: chartId,
      type: 'area',
      height: 270,
      fontFamily: 'Noto Kufi Arabic, sans-serif',
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      },
      redrawOnWindowResize: true,
      redrawOnParentResize: true
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#01DD86'],
      lineCap: 'round'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.33,
        opacityTo: 0.0,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: '#01DD86',
            opacity: 0.33
          },
          {
            offset: 100,
            color: '#FFFFFF',
            opacity: 0.0
          },
        ]
      }
    },
    grid: {
      borderColor: '#F1F2F4',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: months,
      labels: {
        style: {
          fontFamily: 'Noto Kufi Arabic, sans-serif',
          colors: '#10182B'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
    },
    yaxis: {
      show: true,
      min: 0,
      max: 20,
      tickAmount: 5,
      reversed: false,
      labels: {
        align: 'left',
        style: {
          fontFamily: 'Noto Kufi Arabic, sans-serif',
          colors: '#6C6C6C',
          opacity: 0.7
        },
        formatter: (value) => {
          if (value === 0) return '0';
          return `س${value}`;
        }
      }
    },
    // التلميح الذي يظهر عند المرور بالماوس
    tooltip: {
      enabled: true,
      followCursor: false,
      shared: false,
      intersect: false, // مهم: عشان يشتغل على كل الخط
      theme: 'light',
      custom: function({series, seriesIndex, dataPointIndex, w}) {
        const value = series[seriesIndex][dataPointIndex];
        const monthName = months[dataPointIndex];
        return `
          <div style="
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid #01DD86;
            border-radius: 8px;
            padding: 8px 12px;
            font-family: 'Noto Kufi Arabic', sans-serif;
            text-align: center;
            box-shadow: 0 2px 8px rgba(1, 221, 134, 0.2);
            backdrop-filter: blur(4px);
            min-width: 100px;
            animation: fadeIn 0.2s ease-in-out;
          ">
            <div style="
              color: #01DD86;
              font-weight: 600;
              font-size: 13px;
              margin-bottom: 2px;
            ">
              ${value} ساعات
            </div>
            <div style="
              color: #222222;
              font-weight: 500;
              font-size: 11px;
            ">
              ${monthName} 2024
            </div>
          </div>
        `;
      },
      marker: {
        show: false,
      },
    },
    markers: {
      size: 0, 
      strokeWidth: 2,
      strokeColors: "#ffffff", 
      fillColors: "#01DD86", 
      colors: ["#01DD86"], 
      hover: {
        size: 6, 
        strokeWidth: 3, 
        strokeColors: "#ffffff", 
        fillColors: "#01DD86" 
      }
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 200
          }
        }
      }
    ],
    states: {
      hover: {
        filter: {
          type: 'lighten',
          value: 0.05,
        }
      },
      active: {
        filter: {
          type: 'none',
        }
      }
    },
    colors: ['#01DD86'],
    theme: {
      palette: 'palette1'
    }
  }), [chartId, months]); 

  const series = useMemo(() => [
    {
      name: 'ساعات التعلم',
      data: chartData,
      color: '#01DD86' 
    }
  ], [chartData]);

  const handlePeriodChange = useCallback(() => {
    const newPeriod = period === 'سنويًا' ? 'شهريًا' : 'سنويًا';
    setPeriod(newPeriod);
    if (onPeriodChange) {
      onPeriodChange(newPeriod);
    }
  }, [period, onPeriodChange]);

  const isPositiveGrowth = growthPercentage > 0;

  return (
    <div 
      className={`box-border flex flex-row justify-end items-end p-6 relative w-full md:max-w-[908px] h-auto md:h-[409px] bg-white border border-[#CECECE] rounded-2xl ${className}`}
      {...props}
    >
      <div className="flex flex-col justify-end items-end w-full h-full gap-4">
        <div className="flex flex-row justify-between items-start w-full">
      
          
          <div className="flex flex-col items-end">
            <h2 className="font-['Noto_Kufi_Arabic'] font-bold text-lg leading-[27px] text-right text-[#222222] mb-1">
              إجمالي عدد الساعات التعليمية شهريًا
            </h2>
            
            <div className="flex flex-row justify-end items-center gap-4">
             
              
              <h1 className="font-['Noto_Kufi_Arabic'] font-bold text-[32px] leading-[48px] text-[#22C55E]">
                {totalHours} ساعة
              </h1>
               <div className="flex flex-row items-center gap-1">
               {isPositiveGrowth ? (
                  <div className="w-[11px] h-[11px] relative">
                    <div className="absolute w-[11px] h-[11px] bg-[#22C55E] rounded-full"></div>
                    <div className="absolute left-[95%] right-[1.75%] top-[52.7%] bottom-[28.79%] bg-white transform rotate-[-45deg]"></div>
                  </div>
                ) : (
                  <div className="w-[11px] h-[11px] relative">
                    <div className="absolute w-[11px] h-[11px] bg-red-500 rounded-full"></div>
                    <div className="absolute left-[95%] right-[1.75%] top-[28.79%] bottom-[52.7%] bg-white transform rotate-[45deg]"></div>
                  </div>
                )}
                <span className={`font-['Noto_Kufi_Arabic'] font-bold text-sm ${isPositiveGrowth ? 'text-[#22C55E]' : 'text-red-500'}`}>
                  {growthPercentage}%
                </span>
               
                <span className="font-['Noto_Kufi_Arabic'] font-medium text-sm text-[#6C6C6C]">
                  مقارنة بالعام السابق
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handlePeriodChange}
            className="flex flex-row justify-center items-center py-2 px-4 gap-1 h-8 border-[0.5px] border-[#6C6C6C] rounded-lg"
          >
            <CaretDown size={12} weight="regular" color="#6C6C6C" />
            <span className="font-['Noto_Kufi_Arabic'] font-medium text-sm text-[#6C6C6C]">
              {period}
            </span>
          </button>
        </div>
        
        <div className="flex flex-row justify-between items-end w-full h-[270px] relative">
          <div className="w-full h-full relative" id={chartId}>
            {isClient && (
              <ReactApexChart 
                key={chartId} 
                options={chartOptions} 
                series={series} 
                type="area" 
                height="100%" 
                width="100%"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}