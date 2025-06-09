/**
 * ملف للمساعدة في تعزيز تفاعلية المخططات البيانية
 */

/**
 * دالة لإضافة تفاعلية المرور بالماوس للمخططات الخطية
 * @param {string} chartId - معرف المخطط في DOM
 */
export function enhanceLineChartInteractivity(chartId) {
  if (typeof window === 'undefined') return; // تحقق من وجود window (للعميل فقط)
  
  // انتظر حتى تحميل المخطط
  setTimeout(() => {
    try {
      const chart = document.querySelector(`#${chartId}`);
      if (!chart) return;

      // العناصر الخطية في المخطط
      const paths = chart.querySelectorAll('.apexcharts-line-series path');
      
      // حدث عند المرور فوق الخط
      paths.forEach((path, index) => {
        path.addEventListener('mouseenter', () => {
          // تغيير نمط الخط من متقطع إلى متصل
          path.style.strokeDasharray = '0';
          path.style.transition = 'stroke-dasharray 0.3s ease';
          path.style.strokeWidth = '4px'; // زيادة سماكة الخط قليلاً
        });
        
        path.addEventListener('mouseleave', () => {
          // إعادة الخط إلى متقطع
          path.style.strokeDasharray = '5';
          path.style.strokeWidth = '3px'; // إعادة السماكة الأصلية
        });
      });
      
    } catch (err) {
      console.error('خطأ في تفعيل تفاعلية المخططات:', err);
    }
  }, 1000); // انتظر ثانية واحدة للتأكد من تحميل المخطط
}

/**
 * دالة لإضافة تفاعلية للمخطط الخطي المساحي
 * @param {string} chartId - معرف المخطط في DOM
 */
export function enhanceAreaChartInteractivity(chartId) {
  if (typeof window === 'undefined') return;
  
  setTimeout(() => {
    try {
      const chart = document.querySelector(`#${chartId}`);
      if (!chart) return;
      
      // تفعيل التفاعلية الإضافية للمخطط المساحي
      const paths = chart.querySelectorAll('.apexcharts-area-series path');
      
      paths.forEach((path) => {
        path.addEventListener('mouseenter', () => {
          // تعزيز وضوح المخطط عند المرور عليه
          path.style.opacity = '0.9';
          path.style.transition = 'opacity 0.3s ease';
        });
        
        path.addEventListener('mouseleave', () => {
          path.style.opacity = '0.7';
        });
      });
      
    } catch (err) {
      console.error('خطأ في تفعيل تفاعلية المخطط المساحي:', err);
    }
  }, 1000);
}
