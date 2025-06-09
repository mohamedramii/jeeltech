'use client';

/* 
هذا المكون هو مكون على جانب العميل فقط 
لا يمكن تقديمه على جانب الخادم
*/

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { CaretDown } from '@phosphor-icons/react';

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
 * مكون رسم بياني لعرض عدد الدروس المكتملة لكل لغة برمجة
 * @param {Object} props - خصائص المكون
 * @param {string} props.selectedMonth - الشهر المحدد
 * @param {function} props.onPeriodChange - معالج تغيير الفترة الزمنية
 * @param {string} props.className - فئات CSS إضافية
 */
export default function CompletedLessonsChart({ selectedMonth = "مايو 2024", onPeriodChange, className = "", ...props }) {
  // حالة للتحقق من أننا على جانب العميل
  const [isClient, setIsClient] = useState(false);

  // التأكد من أننا على جانب العميل قبل عرض الرسم البياني
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [period, setPeriod] = useState('سنويًا');
  
  // بيانات الرسم البياني (عدد الدروس المكتملة لكل لغة في كل شهر)
  const htmlData = [18, 22, 15, 30, 20, 25, 32, 28, 35, 42, 25, 22];
  const cssData = [12, 15, 10, 20, 15, 18, 22, 20, 25, 30, 18, 15];
  const scratchData = [25, 30, 28, 35, 32, 40, 45, 35, 38, 42, 35, 28];
  
  // الشهور العربية
  const months = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  
  // تهيئة خيارات الرسم البياني
  const chartOptions = {
    chart: {
      type: 'line',
      height: 270,
      fontFamily: 'Noto Kufi Arabic, sans-serif',
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        speed: 300,
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      dashArray: [5, 5, 5], // جميع الخطوط متقطعة في الحالة العادية
    },
    colors: ['#01DD86', '#E34C26', '#F0DB4F'],
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
      max: 50,
      tickAmount: 5,
      reversed: false,
      labels: {
        align: 'left',
        style: {
          fontFamily: 'Noto Kufi Arabic, sans-serif',
          colors: '#6C6C6C',
          opacity: 0.7
        }
      }
    },
    // إعدادات التلميح عند تحريك الماوس
    tooltip: {
      enabled: true,
      followCursor: true,
      theme: 'light',
      x: {
        show: true,
        formatter: function(val, opts) {
          return months[val-1] + ' 2024';
        }
      },
      y: {
        formatter: function(val, opts) {
          const seriesIndex = opts.seriesIndex;
          const seriesName = opts.w.globals.seriesNames[seriesIndex];
          return val + ' درس - ' + seriesName;
        },
        title: {
          formatter: () => ''
        },
      },
      style: {
        fontSize: '14px',
        fontFamily: 'Noto Kufi Arabic, sans-serif'
      },
      marker: {
        show: true,
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontFamily: 'Noto Kufi Arabic, sans-serif',
      labels: {
        colors: '#10182B'
      },
      markers: {
        width: 10,
        height: 10,
        radius: 0,
        offsetX: -5
      },
      itemMargin: {
        horizontal: 15
      },
      onItemHover: {
        highlightDataSeries: true
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
    // تحسين تفاعلية المخطط
    states: {
      hover: {
        filter: {
          type: 'none',
        }
      },
      active: {
        filter: {
          type: 'none',
        }
      }
    },
    // إعدادات النقاط على الخط
    markers: {
      size: 0,
      strokeWidth: 2,
      strokeColors: ['#fff', '#fff', '#fff'],
      hover: {
        size: 7,
        sizeOffset: 3
      }
    }
  };

  const series = [
    {
      name: 'Scratch',
      data: scratchData
    },
    {
      name: 'HTML',
      data: htmlData
    },
    {
      name: 'CSS',
      data: cssData
    }
  ];

  // معالج تغيير الفترة الزمنية
  const handlePeriodChange = () => {
    const newPeriod = period === 'سنويًا' ? 'شهريًا' : 'سنويًا';
    setPeriod(newPeriod);
    if (onPeriodChange) {
      onPeriodChange(newPeriod);
    }
  };

  return (
    <div 
      className={`box-border flex flex-row justify-end items-end p-6 relative w-full md:max-w-[908px] h-auto md:h-[409px] bg-white border border-[#CECECE] rounded-2xl ${className}`}
      {...props}
    >
      <div className="flex flex-col justify-end items-end w-full h-full gap-4">
        {/* رأس البطاقة */}
        <div className="flex flex-row justify-between items-start w-full">
          {/* زر الفترة الزمنية */}
          <button
            onClick={handlePeriodChange}
            className="flex flex-row justify-center items-center py-2 px-4 gap-1 h-8 border-[0.5px] border-[#6C6C6C] rounded-lg"
          >
            <CaretDown size={12} weight="regular" color="#6C6C6C" />
            <span className="font-['Noto_Kufi_Arabic'] font-medium text-sm text-[#6C6C6C]">
              {period}
            </span>
          </button>
          
          {/* معلومات البطاقة */}
          <div className="flex flex-col items-end">
            {/* عنوان البطاقة */}
            <h2 className="font-['Noto_Kufi_Arabic'] font-bold text-lg leading-[27px] text-right text-[#222222] mb-1">
              عدد الدروس المكتملة
            </h2>
          </div>
        </div>
        
        {/* حاوية الرسم البياني */}
        <div className="flex flex-row justify-between items-end w-full h-[270px] relative">
          {/* الرسم البياني */}
          <div className="w-full h-full relative">
            {/* تقديم الرسم البياني فقط على جانب العميل */}
            {isClient && (
              <ReactApexChart 
                options={chartOptions} 
                series={series} 
                type="line" 
                height="100%" 
                width="100%"
              />
            )}
            
            {/* مؤشر الشهر الحالي والقيمة */}
            {/* معلومات إضافية تظهر عند التفاعل مع الرسم البياني */}
          </div>
        </div>
      </div>
    </div>
  );
}
