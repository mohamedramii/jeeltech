'use client';


import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] flex items-center justify-center bg-gray-50 rounded-lg">
      <div className="text-gray-500">جاري تحميل الرسم البياني...</div>
    </div>
  )
});


export default function LoginCountChart({
  data = [], 
  className = "",
  ...props
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultData = useMemo(() => [
    { month: 'يناير', count: 48, color: '#B0F1C8' },
    { month: 'فبراير', count: 8, color: '#B0F1C8' },
    { month: 'مارس', count: 79, color: '#B0F1C8' },
    { month: 'إبريل', count: 19, color: '#B0F1C8' },
    { month: 'مايو', count: 3, color: '#B0F1C8' },
    { month: 'يونيو', count: 22, color: '#B0F1C8' },
    { month: 'يوليو', count: 93, color: '#B0F1C8' },
    { month: 'أغسطس', count: 7, color: '#B0F1C8' },
    { month: 'سبتمبر', count: 5, color: '#FCD46D' },
    { month: 'أكتوبر', count: 47, color: '#FCD46D' },
    { month: 'نوفمبر', count: 101, color: '#FCD46D' },
    { month: 'ديسمبر', count: 10, color: '#FCD46D' }
  ], []);

  const chartData = useMemo(() => {
    return data.length > 0 ? data : defaultData;
  }, [data, defaultData]);
  
  const series = useMemo(() => [{
    name: 'عدد مرات الدخول',
    data: chartData.map(item => item.count)
  }], [chartData]);

  const maxValue = useMemo(() => {
    const max = Math.max(...chartData.map(item => item.count));
    return Math.ceil(max / 10) * 10; 
  }, [chartData]);

  const chartOptions = useMemo(() => ({
    chart: {
      type: 'bar',
      height: 350,
      fontFamily: 'Noto Kufi Arabic, sans-serif',
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 600,
        animateGradually: {
          enabled: true,
          delay: 50
        }
      },
      redrawOnParentResize: true,
      redrawOnWindowResize: true,
    },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 8,
        columnWidth: '55%',
        dataLabels: {
          position: 'top',
        },
      }
    },
    colors: chartData.map(item => item.color),
    dataLabels: {
      enabled: true,
      formatter: function(val) {
        return val;
      },
      offsetY: -30, 
      style: {
        fontSize: '14px',
        fontFamily: 'Noto Kufi Arabic, sans-serif',
        fontWeight: '600',
        colors: ["#374151"] 
      }
    },
    xaxis: {
      categories: chartData.map(item => item.month),
      position: 'bottom',
      labels: {
        style: {
          fontFamily: 'Noto Kufi Arabic, sans-serif',
          colors: '#6B7280',
          fontSize: '13px',
          fontWeight: 500
        },
        rotate: 0,
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
      max: 120, 
      tickAmount: 6,
      labels: {
        show: true,
        align: 'left',
        style: {
          fontFamily: 'Noto Kufi Arabic, sans-serif',
          colors: '#9CA3AF',
          fontSize: '12px',
          fontWeight: 400
        },
        formatter: (value) => {
          const roundedValue = Math.round(value);
          if (roundedValue === 0) return '0';
          if (roundedValue === 20) return '5';
          if (roundedValue === 40) return '10';
          if (roundedValue === 60) return '20';
          if (roundedValue === 80) return '50';
          if (roundedValue === 100) return '100';
          if (roundedValue === 120) return 'عدد المرات';
          return '';
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    title: {
      text: 'عدد مرات تسجيل الدخول لكل شهر',
      align: 'right',
      margin: 20,
      style: {
        fontSize: '18px',
        fontFamily: 'Noto Kufi Arabic, sans-serif',
        fontWeight: 700,
        color: '#1F2937'
      }
    },
    grid: {
      show: true,
      borderColor: '#E5E7EB',
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
      },
      row: {
        colors: undefined,
        opacity: 0.5
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
      padding: {
        top: 10,
        right: 20,
        bottom: 5,
        left: 5
      },
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '14px',
        fontFamily: 'Noto Kufi Arabic, sans-serif'
      },
      y: {
        formatter: function(val) {
          return val + " مرة";
        },
        title: {
          formatter: () => 'عدد مرات الدخول: '
        },
      },
      marker: {
        show: true,
      },
      fixed: {
        enabled: false,
      }
    },
    legend: {
      show: false
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '65%'
            }
          },
          dataLabels: {
            style: {
              fontSize: '13px',
            }
          }
        }
      },
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '75%'
            }
          },
          title: {
            style: {
              fontSize: '16px',
            }
          },
          dataLabels: {
            style: {
              fontSize: '12px',
            }
          }
        }
      },
      {
        breakpoint: 480,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '85%'
            }
          },
          xaxis: {
            labels: {
              style: {
                fontSize: '11px',
              }
            }
          }
        }
      }
    ]
  }), [chartData, maxValue]);

  if (!isClient) {
    return (
      <div 
        className={`box-border relative w-full p-6 bg-white border border-[#CECECE] rounded-2xl ${className}`}
        {...props}
      >
        <div className="w-full h-[350px] flex items-center justify-center bg-gray-50 rounded-lg animate-pulse">
          <div className="text-gray-400">جاري تحميل الرسم البياني...</div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`box-border relative w-full p-6 bg-white border border-[#CECECE] rounded-2xl  ${className}`}
      {...props}
    >
      <div className="w-full h-[350px] mt-2">
        {isClient && (
          <ReactApexChart 
          options={chartOptions} 
          series={series} 
          type="bar" 
          height={350} 
          width="100%" 
        />
        )}
      </div>
    </div>
  );
}